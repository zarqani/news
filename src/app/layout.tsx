import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Newsvoyager",
  description:
    "Dive into the heart of global affairs with Newsvoyager! We curate the latest news stories from around the world, providing in-depth analysis and diverse perspectives. Stay informed, engaged, and connected with the issues shaping our planet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
