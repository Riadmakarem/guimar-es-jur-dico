import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/livro", label: "Livro" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold bg-navy text-gold font-serif text-lg">
            AG
          </div>
          <div className="leading-tight">
            <div className="font-serif text-base text-navy">Abraão Guimarães</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Advocacia · OAB/AM 14.788
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-medium" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5592982170123?text=Ol%C3%A1%2C%20Dr.%20Abra%C3%A3o.%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-navy-deep hover:shadow-elegant"
          >
            Fale comigo
          </a>
        </nav>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5592982170123?text=Ol%C3%A1%2C%20Dr.%20Abra%C3%A3o.%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-sm bg-navy px-4 py-2.5 text-center text-sm text-primary-foreground"
            >
              Fale comigo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
