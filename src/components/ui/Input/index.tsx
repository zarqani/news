import { cn } from "@/libs/utils";
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string | ReactNode;
  name: string;
  className?: string;
  fullWidth?: boolean;
};

export default function Input({
  className,
  name,
  label,
  error,
  type,
  fullWidth = false,
  ...props
}: InputProps) {
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
      <div className="">
        <input
          id={name}
          name={name}
          type={type}
          className={cn(
            className,
            "bg-white rounded-2xl block w-full border-0 py-1.5 px-6  text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-black outline-none sm:text-sm sm:leading-8"
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-3 text-sm leading-6 text-red-500">{error}</p>}
    </div>
  );
}
