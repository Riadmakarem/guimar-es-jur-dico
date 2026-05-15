import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Scale, GraduationCap, Award, Quote } from "lucide-react";
import portrait from "@/assets/abraao-portrait.png";
import livro from "@/assets/livro-quando-ambiente-adoece.png";
import { whatsappUrl } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Abraão Guimarães · Advocacia OAB/AM 14.788" },
      {
        name: "description",
        content:
          "Advocacia humanizada com base em pesquisa e ensino. Atendimento jurídico em Manaus/AM com Dr. Abraão Guimarães, autor de 'Quando o Ambiente Adoece'.",
      },
      { property: "og:title", content: "Dr. Abraão Guimarães · Advocacia" },
      { property: "og:description", content: "Advogado · Escritor · Mestre · Professor." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Scale,
    title: "Atuação Jurídica",
    text: "Consultoria e defesa em Direito do Trabalho, Direito Educacional e questões de saúde ocupacional.",
  },
  {
    icon: GraduationCap,
    title: "Mestre & Professor",
    text: "Mestre em Direito Ambiental pela UEA. Atua como professor e coordenador jurídico.",
  },
  {
    icon: BookOpen,
    title: "Escritor",
    text: "Autor de 'Quando o Ambiente Adoece — Burnout e a luta por qualidade de vida'.",
  },
  {
    icon: Award,
    title: "Reconhecimento",
    text: "Título honorário concedido pela Assembleia Legislativa do Amazonas (ALEAM).",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 60%, var(--gold) 0%, transparent 35%)",
        }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
              OAB/AM 14.788
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Direito com <span className="gradient-gold-text">propósito</span>,
              <br />defesa com <span className="gradient-gold-text">excelência</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
              Dr. Abraão Guimarães — advogado, escritor, mestre e professor. Atendimento jurídico humanizado, fundamentado em pesquisa e ensino.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep transition-all hover:shadow-gold"
              >
                Solicitar atendimento
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/5"
              >
                Conhecer trajetória
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-sm border border-gold/40" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/50 md:block" />
            <img
              src={portrait}
              alt="Dr. Abraão Guimarães, advogado OAB/AM 14.788"
              className="relative w-full object-cover"
              style={{ filter: "grayscale(0.05)" }}
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Quem é o Dr. Abraão</div>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
              Uma carreira construída no encontro entre <em className="not-italic gradient-gold-text">advocacia, ensino e pesquisa</em>.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="group bg-background p-8 transition-colors hover:bg-secondary">
                <p.icon size={28} className="text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book preview */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-6 -z-10 rounded-sm bg-navy/5" />
            <img src={livro} alt="Livro Quando o Ambiente Adoece" className="max-h-[520px] drop-shadow-2xl" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Obra publicada</div>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
              Quando o Ambiente Adoece
            </h2>
            <p className="mt-2 font-serif text-xl italic text-muted-foreground">
              Burnout e a luta por qualidade de vida
            </p>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Resultado de pesquisa de mestrado, o livro discute o burnout enquanto doença
              ocupacional e o direito fundamental à sadia qualidade de vida no ambiente de
              trabalho — combinando rigor jurídico e leitura acessível.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/livro"
                className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm text-primary-foreground hover:bg-navy-deep"
              >
                Saber mais sobre o livro <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.amazon.com.br/s?k=Quando+o+Ambiente+Adoece+Abra%C3%A3o+Guimar%C3%A3es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-navy/30 px-6 py-3 text-sm text-navy hover:bg-navy hover:text-primary-foreground"
              >
                Comprar na Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote size={36} className="mx-auto text-gold" />
          <blockquote className="mt-6 font-serif text-2xl leading-snug text-navy md:text-3xl">
            “Descomplicar o Direito é, antes de tudo, aproximá-lo da vida das pessoas.”
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Dr. Abraão Guimarães
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Precisa de orientação jurídica?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Atendimento direto pelo WhatsApp. Conte sua situação e receba o encaminhamento adequado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-medium text-navy-deep hover:shadow-gold"
          >
            Falar com o Dr. Abraão <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
