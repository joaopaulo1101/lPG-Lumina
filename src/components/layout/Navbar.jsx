import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold">
            Lumina
          </h1>

          <span className="text-xs uppercase tracking-[0.25em] text-stone-500">
            Clínica Estética
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-wider text-stone-600 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-black text-white px-5 py-3 text-sm uppercase tracking-wider hover:opacity-90 transition">
          Agendar Consulta
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 p-6 flex flex-col gap-4">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="bg-black text-white py-3">
            Agendar Consulta
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;