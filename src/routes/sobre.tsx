import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import portrait from "@/assets/abraao-portrait.png";
import merito from "@/assets/abraao-merito.jpg";
import { whatsappUrl } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
});

const credentials = [
  "Advogado regularmente inscrito na OAB/AM sob o nº 14.788",
  "Mestre em Direito Ambiental pela Universidade do Estado do Amazonas (UEA)",
  "Professor universitário e Coordenador Jurídico",
  "Autor do livro 'Quando o Ambiente Adoece — Burnout e a luta por qualidade de vida' (Editora Dialética)",
  "Título honorário de Mérito Acadêmico concedido pela Assembleia Legislativa do Amazonas (ALEAM)",
  "Atuação consultiva e contenciosa em Direito do Trabalho, Direito Educacional e Saúde Ocupacional",
];

function SobrePage() {
  return (
    <>
      <section className="gradient-navy py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Sobre</div>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Dr. Abraão Lucas Ferreira <span className="gradient-gold-text">Guimarães</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
            Advogado · Escritor · Mestre · Professor · Coordenador Jurídico
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/40" />
              <img src={portrait} alt="Dr. Abraão Guimarães" className="relative w-full" />
            </div>
            <img src={merito} alt="Cerimônia de Mérito Acadêmico na ALEAM" className="w-full rounded-sm shadow-elegant" />
          </div>

          <div>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">Trajetória</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-foreground/85">
              <p>
                O Dr. Abraão Lucas Ferreira Guimarães é advogado regularmente
                inscrito na Ordem dos Advogados do Brasil, Seccional Amazonas,
                sob o nº <strong className="text-navy">14.788</strong>. Une à prática profissional
                a vivência acadêmica, atuando como professor universitário,
                coordenador jurídico e pesquisador.
              </p>
              <p>
                Mestre em Direito pela Universidade do Estado do Amazonas (UEA),
                desenvolveu pesquisa sobre o direito à sadia qualidade de vida e o
                enquadramento da síndrome de burnout como doença ocupacional no
                Brasil — investigação que deu origem ao livro
                <em> “Quando o Ambiente Adoece: Burnout e a luta por qualidade de vida”</em>,
                publicado pela Editora Dialética.
              </p>
              <p>
                Por sua contribuição à educação e ao Direito, foi homenageado
                com o título honorário de <strong className="text-navy">Mérito Acadêmico</strong>
                {" "}pela Assembleia Legislativa do Estado do Amazonas (ALEAM).
              </p>
              <p>
                Sua atuação combina rigor técnico, sensibilidade humana e
                compromisso com a clareza — princípios que orientam a missão de
                <em> descomplicar o Direito para as pessoas</em>.
              </p>
            </div>

            <h3 className="mt-12 font-serif text-2xl text-navy">Credenciais</h3>
            <ul className="mt-5 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-foreground/85">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-navy-deep hover:shadow-gold"
              >
                Solicitar atendimento <ArrowRight size={16} />
              </a>
              <Link
                to="/livro"
                className="inline-flex items-center gap-2 rounded-sm border border-gold/35 px-6 py-3 text-sm text-navy hover:bg-secondary"
              >
                Conhecer o livro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
