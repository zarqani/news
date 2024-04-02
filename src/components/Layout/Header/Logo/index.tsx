import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="border-2 border-black text-black py-1 px-4 text-xl rounded-2xl font-bold">
        Newsvoyager
      </div>
    </Link>
  );
}
