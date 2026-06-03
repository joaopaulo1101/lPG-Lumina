import { navigationLinks, site } from "../../data/site";

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAFAF8] px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{site.shortName}</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-stone-500">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Links do rodapé">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-stone-600 transition hover:text-[#2C2B28]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-stone-500">
          © 2026 {site.name}. Projeto fictício.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
