import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <nav className="border-b border-slate-900/5 z-10 bg-white fixed top-0 w-full shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-18 md:h-20">
            <Logo />
          </div>
        </div>
      </nav>
    </header>
  );
}
