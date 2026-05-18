import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, AtSign } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BK Deco" className="h-10 w-auto invert" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl">BK Deco Production</span>
              <span className="eyebrow opacity-60" style={{ fontSize: "0.6rem" }}>
                Fabrication des meubles
              </span>
            </div>
          </div>
          <p className="font-serif text-2xl md:text-3xl max-w-md leading-snug opacity-90">
            Inspirer chacun à devenir le créateur de son propre espace de vie.
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="eyebrow opacity-60">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:opacity-60">Maison</Link></li>
            <li><Link to="/#collection" className="hover:opacity-60">Collection</Link></li>
            <li><Link to="/#philosophie" className="hover:opacity-60">Philosophie</Link></li>
            <li><Link to="/contact" className="hover:opacity-60">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="eyebrow opacity-60">Atelier</h4>
          <p className="text-sm flex items-start gap-2 opacity-90">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            Alger, Algérie
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-60"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-60"><Facebook className="h-5 w-5" /></a>
            <a href="https://threads.net" target="_blank" rel="noreferrer" aria-label="Threads" className="hover:opacity-60"><AtSign className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
          <span>© {new Date().getFullYear()} BK Deco Production. Tous droits réservés.</span>
          <span className="eyebrow">Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
