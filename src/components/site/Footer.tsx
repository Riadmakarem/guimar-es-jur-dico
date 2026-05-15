import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

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
              <a href="mailto:alg.guimaraes.adv@gmail.com" className="hover:text-gold">alg.guimaraes.adv@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-gold" />
              <span>Manaus · Amazonas</span>
            </li>
            <li className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/abraaoguimaraes_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/in/abraão-guimarães-0b5467bb/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <span>© {new Date().getFullYear()} Dr. Abraão Guimarães. Todos os direitos reservados.</span>
          <a href="https://chronokairo.com.br/" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-0 hover:text-gold transition-colors flex items-center gap-2">
            <span>Feito por</span>
            <span className="font-semibold">CHRONOKAIRO</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
