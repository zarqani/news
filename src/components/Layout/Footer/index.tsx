import IconGithub from "@/components/Icons/IconGithub";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="mt-8 border-t border-slate-200 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          <Link
            href="https://github.com/zarqani"
            className="flex items-center space-x-2 text-black transition-colors duration-75 font-semibold"
          >
            <IconGithub />
            <p>Follow Me on Github</p>
          </Link>
        </div>
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          © 2024 Newsvoyager. All rights reserved.
        </p>
      </div>
    </div>
  );
}
