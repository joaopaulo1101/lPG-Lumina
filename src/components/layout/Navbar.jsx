import { useState } from "react";

import { navigationLinks, site } from "../../data/site";
import Button from "../ui/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 border-b border-stone-200 bg-[#FAFAF8]/88 backdrop-blur-xl"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">

        <a href="#home" className="block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8977E] focus-visible:ring-offset-4">
          <span className="block text-2xl font-semibold leading-none">
            {site.shortName}
          </span>

          <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-stone-500 sm:text-xs">
            {site.tagline}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm text-sm uppercase tracking-wider text-stone-600 transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8977E] focus-visible:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button href="#cta" className="hidden px-5 py-3 md:inline-flex">
          Agendar Consulta
        </Button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center border border-stone-300 text-xl md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white border-t border-stone-200 p-6 flex flex-col gap-4 shadow-[0_18px_45px_rgba(44,43,40,0.10)]"
        >

          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-wider text-stone-700"
            >
              {link.label}
            </a>
          ))}

          <Button href="#cta" onClick={() => setMenuOpen(false)} className="mt-2 w-full">
            Agendar Consulta
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
