import { Nunito, Roboto } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const roboto = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="pt-18 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
