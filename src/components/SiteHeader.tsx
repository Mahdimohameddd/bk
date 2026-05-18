import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BK Deco Production" className="h-9 w-auto" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg tracking-wide">BK Deco</span>
            <span className="eyebrow text-muted-foreground" style={{ fontSize: "0.55rem" }}>
              Production
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 eyebrow">
          <Link to="/" className="hover:opacity-60 transition-opacity">Maison</Link>
          <Link to="/#collection" className="hover:opacity-60 transition-opacity">Collection</Link>
          <Link to="/#philosophie" className="hover:opacity-60 transition-opacity">Philosophie</Link>
          <Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5 eyebrow">
            <Link to="/" onClick={() => setOpen(false)}>Maison</Link>
            <Link to="/#collection" onClick={() => setOpen(false)}>Collection</Link>
            <Link to="/#philosophie" onClick={() => setOpen(false)}>Philosophie</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
