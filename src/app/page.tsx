import Blog from "@/components/Blog";
import { Sources } from "@/libs/constants";
import {
  getGuardianPosts,
  getNewsAPIPosts,
  getNewsAiPosts,
} from "@/services/blog.services";
import { cookies } from "next/headers";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const defaultType = cookieStore.get("type");
  const type = Number(searchParams?.type || "");
  const startDate = searchParams?.from || "";
  const endDate = searchParams?.to || "";

  const newsAiPostsPromise =
    type === Sources.s1 || !type
      ? getNewsAiPosts({
          ...(startDate && { dateStart: startDate }),
          ...(endDate && { dateEnd: endDate }),
        })
      : undefined;
  const newsAPIPostsPromise =
    type === Sources.s2 || !type
      ? getNewsAPIPosts({
          ...(startDate && { from: startDate }),
          ...(endDate && { to: endDate }),
        })
      : undefined;
  const guardianPostsPromise =
    type === Sources.s3 || !type
      ? getGuardianPosts({
          ...(startDate && { "from-date": startDate }),
          ...(endDate && { "to-date": endDate }),
        })
      : undefined;

  console.log({ mm: type === Sources.s2 || !type });
  const [newsAiPosts, newsAPIPosts, guardianPosts] = await Promise.all([
    newsAiPostsPromise,
    newsAPIPostsPromise,
    guardianPostsPromise,
  ]);

  const data = (newsAiPosts?.data || [])
    .concat(newsAPIPosts?.data || [])
    .concat(guardianPosts?.data || []);

  const categories = (newsAiPosts?.categories || [])
    .concat(newsAPIPosts?.categories || [])
    .concat(guardianPosts?.categories || []);

  return (
    <div className="container mx-auto">
      <Blog
        data={data}
        categories={categories}
        articles={[newsAiPosts, newsAPIPosts, guardianPosts]}
      />
    </div>
  );
}
