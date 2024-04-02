import { NewsProps } from "@/types/blog.types";

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
    <div
      style={{ breakInside: "avoid" }}
      className="mb-4 h-fit relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md max-w-[24rem] overflow-hidden"
    >
      {data.img && (
        <div className="min-h-36 relative bg-clip-border overflow-hidden bg-transparent text-gray-700 shadow-none m-0 rounded-none">
          <img src={data.img} alt="ui/ux review check" />
        </div>
      )}
      <div className="p-6">
        <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
          {data.title}
        </h4>
        <p className="block antialiased font-sans text-xl leading-relaxed text-gray-700 mt-3 font-normal">
          {data.description}
        </p>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center">{data.authors?.join(",")}</div>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal">
          {data.date} - {data.category}
        </p>
      </div>
    </div>
  );
}
