import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/marka-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#categorias", label: "Categorias" },
    { href: "#visite", label: "Visite a Loja" },
    { href: "#visite", label: "Contato" },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-sunlight/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4 lg:py-5 max-w-[1800px] mx-auto">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Marka Móveis"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12 lg:h-16" : "h-16 lg:h-24"}`}
          />
        </a>

        <div className="hidden lg:flex gap-12 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/60">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-marka-purple transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=5543999904666&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Marka%20M%C3%B3veis."
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-marka-purple text-sunlight px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-marka-purple-deep transition-colors rounded-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            className="lg:hidden p-2 text-marka-purple"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-sunlight/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-marka-purple"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=5543999904666&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Marka%20M%C3%B3veis."
              target="_blank"
              rel="noreferrer"
              className="md:hidden inline-flex items-center justify-center gap-2 bg-marka-purple text-sunlight px-5 py-3 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
