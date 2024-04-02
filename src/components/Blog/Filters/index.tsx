"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { SOURCES } from "@/libs/constants";
import { useRouter, useSearchParams } from "next/navigation";

type FiltersProps = {
  categories: string[];
};

let timeOutId: ReturnType<typeof setTimeout>;
export default function Filters({ categories }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const type = searchParams.get("type") || "";
  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";
  // const [text, setText] = useState("");
  // const deferredText = useDeferredValue(text);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      if (e.target.value)
        router.push(
          `/?search=${e.target.value}&category=${category}&from=${from}&to=${to}&type=${type}`
        );
    }, 500);
  };

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value)
      router.push(
        `/?search=${search}&category=${category}&from=${from}&to=${to}&type=${e.target.value}`
      );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value)
      router.push(
        `/?search=${search}&category=${e.target.value}&from=${from}&to=${to}&type=${type}`
      );
  };

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value)
      router.push(
        `/?search=${search}&category=${category}&from=${e.target.value}&to=${to}&type=${type}`
      );
  };

  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value)
      router.push(
        `/?search=${search}&category=${category}&from=${from}&to=${e.target.value}&type=${type}`
      );
  };

  return (
    <div className="rounded-2xl p-6 mx-auto mb-8 shadow bg-slate-50 flex flex-row flex-wrap justify-between">
      <Input
        type="text"
        name="search"
        placeholder="e.g. Football"
        label="Search"
        onChange={handleInputChange}
      />
      <div className="flex flex-row flex-wrap items-center space-x-8">
        <Select
          name="source"
          label="Source"
          options={[{ value: "", label: "All" }].concat(
            Object.values(SOURCES).map((item) => ({
              value: String(item.id),
              label: item.name,
            }))
          )}
          onChange={handleSourceChange}
        />
        {!!categories?.length && (
          <Select
            name="category"
            label="Category"
            options={[""].concat(categories)}
            onChange={handleCategoryChange}
          />
        )}
        <Input
          type="date"
          name="startDate"
          placeholder="e.g. 2024-03-01"
          label="From"
          onChange={handleStartDate}
        />
        <Input
          type="date"
          name="endDate"
          placeholder="e.g. 2024-03-02"
          label="to"
          onChange={handleEndDate}
        />
      </div>
    </div>
  );
}
