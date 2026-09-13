import { useState } from "react";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (name: string) => {
    const id = name === "Home" ? "home" : name.toLowerCase();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <button
          onClick={() => goTo("Home")}
          className="flex items-center gap-2 font-bold text-slate-900"
          aria-label="Go to home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-[10px] font-bold text-white">
            DS
          </span>

          <span className="text-[16px]">
            Dev{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Stack
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              className={`text-[12px] transition ${
                link === "Home"
                  ? "font-medium text-pink-600"
                  : "text-slate-500 hover:text-pink-600"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 sm:flex">
          <button className="text-[12px] text-slate-700 transition hover:text-pink-600">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 sm:hidden">
          <button className="text-[12px] text-slate-700 transition hover:text-pink-600">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-[11px] font-semibold text-white">
            Sign Up
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="ml-1 rounded-md border border-slate-200 p-1.5 text-slate-700"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 shadow-sm sm:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => goTo(link)}
                className={`rounded-lg px-3 py-2 text-left text-sm transition ${
                  link === "Home"
                    ? "bg-pink-50 font-medium text-pink-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-pink-600"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}