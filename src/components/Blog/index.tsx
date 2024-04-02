"use client";

import { NewsProps } from "@/types/blog.types";
import BlogHeader from "./BlogHeader";
import Card from "./Card";
import Filters from "./Filters";

type BlogProps = {
  data: NewsProps[];
  articles?: any;
  categories: string[];
};
export default function Blog({ data, categories }: BlogProps) {
  return (
    <>
      <BlogHeader />
      <Filters categories={categories} />
      <div className="gap-4" style={{ columnCount: 4 }}>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
