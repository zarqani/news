import { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/libs/utils";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  label?: string | ReactNode;
  name: string;
  className?: string;
  fullWidth?: boolean;
  options: { label: string; value: string }[] | string[];
};

export default function Select({
  className,
  name,
  label,
  error,
  fullWidth = false,
  options,
  ...props
}: SelectProps) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
      )}

      <select
        className={cn(
          className,
          "bg-white appearance-none border-0 rounded-2xl py-1.5 px-6 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-black outline-none sm:text-sm sm:leading-8"
        )}
        {...props}
      >
        {options.map((item) => (
          <option value={typeof item === "string" ? item : item.value}>
            {(typeof item === "string" ? item : item.label) || "Select"}
          </option>
        ))}
      </select>

      {error && <p className="mt-3 text-sm leading-6 text-red-500">{error}</p>}
    </div>
  );
}
