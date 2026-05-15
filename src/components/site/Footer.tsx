import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl">Abraão Guimarães</div>
          <div className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
            Advocacia · OAB/AM 14.788
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Atuação jurídica especializada com base em pesquisa, ensino e
            compromisso com a qualidade de vida no trabalho.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-gold">Sobre</Link></li>
            <li><Link to="/livro" className="hover:text-gold">Livro</Link></li>
            <li><Link to="/contato" className="hover:text-gold">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contato</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-gold" />
              <a href="tel:+5592982170123" className="hover:text-gold">(92) 98217-0123</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-gold" />
              <span>contato@abraaoguimaraes.adv.br</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-gold" />
              <span>Manaus · Amazonas</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Dr. Abraão Guimarães. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
