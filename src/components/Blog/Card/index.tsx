import IconCalender from "@/components/Icons/IconCalender";
import IconUser from "@/components/Icons/IconUser";
import { formatTime } from "@/libs/utils";
import { NewsProps } from "@/types/blog.types";
import Link from "next/link";

export default function Card({ data }: { data: NewsProps }) {
  // id: 1,
  // title: "News Articles",
  // description: "Collection of news articles",
  // url: "http://localhost:3000/articles",
  // img: null,
  // date: "2024-04-01",
  // category: "news",
  // authors: null,
  // source: {
  //   id: "cbs-news",
  //   name: "CBS News",
  // },
  return (
    <Link
      href={data.url}
      target="__blank"
      style={{ breakInside: "avoid" }}
      className="mb-4 h-fit relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md max-w-[24rem] overflow-hidden"
    >
      {data.img && (
        <div className="min-h-36 relative bg-clip-border overflow-hidden bg-transparent text-gray-700 shadow-none m-0 rounded-none">
          <img src={data.img} alt={data.title} />
        </div>
      )}
      <div className="p-6 pb-0">
        <span className="inline-flex items-center px-3 py-0.5 rounded-2xl text-sm font-bold font-display bg-slate-200 text-black">
          {data.category}
        </span>
      </div>
      <div className="p-6 pt-2">
        <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
          {data.title}
        </h4>
        <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mt-3 font-normal">
          {data.description}
        </p>
      </div>
      <div className="p-6 flex items-center justify-between text-xs gap-2">
        <div className="inline-flex items-center gap-2">
          {data.authors && (
            <>
              <IconUser width={16} />
              {data.authors.join(",")}
            </>
          )}
        </div>
        <p className="inline-flex items-center gap-2">
          <IconCalender width={16} /> {formatTime(data.date)}
        </p>
      </div>
    </Link>
  );
}
