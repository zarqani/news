import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getQueryParams = (queryParams: { [key: string]: any }): string => {
  const encodedParams = new URLSearchParams();

  // Loop through each property in queryParams
  for (const [key, value] of Object.entries(queryParams)) {
    // If value is an object, stringify it before appending
    if (typeof value === "object")
      encodedParams.append(key, JSON.stringify(value));
    else encodedParams.append(key, value);
  }

  return encodedParams.toString();
};

export const formatTime = (timeString: string) => {
  // Parse the ISO 8601 time string
  const date = new Date(timeString);

  // Format the date using the correct options for locale and format
  const options: any = { year: "numeric", month: "2-digit", day: "numeric" };

  // Format the date and return the result
  return date.toLocaleDateString("en-US", options);
};
