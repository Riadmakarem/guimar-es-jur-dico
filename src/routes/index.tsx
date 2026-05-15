import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Scale, GraduationCap, Award, Quote } from "lucide-react";
import portrait from "@/assets/abraao-portrait.png";
import livro from "@/assets/livro-quando-ambiente-adoece.png";
import { whatsappUrl } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
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
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, color-mix(in oklab, var(--gold) 22%, transparent) 48%, transparent 49%), linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--gold) 14%, transparent) 100%)",
        }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/45 to-background" />
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
      <section className="border-b border-border bg-gradient-to-b from-background via-background to-secondary/35 py-20">
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

      {/* Lattes CV */}
      <section className="bg-gradient-to-b from-secondary/35 via-background to-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="group mx-auto max-w-4xl overflow-hidden rounded-sm border border-border shadow-elegant transition-shadow duration-500 hover:shadow-[0_40px_80px_-20px_color-mix(in_oklab,var(--navy-deep)_55%,transparent)]">
            <div className="relative grid md:grid-cols-[1fr_1.3fr]">
              {/* Gold accent bar */}
              <div className="absolute left-0 top-0 z-10 hidden h-full w-0.5 bg-gradient-to-b from-gold via-gold/60 to-transparent md:block" />

              {/* Left panel */}
              <div className="gradient-navy relative flex flex-col justify-center overflow-hidden p-8 text-primary-foreground md:p-12">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-gold/10" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-gold/5" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.3em] text-gold/80">Currículo Lattes</div>
                  <h3 className="mt-4 font-serif text-3xl leading-snug md:text-4xl">
                    Produção acadêmica e <span className="text-gold">trajetória</span>
                  </h3>
                  <div className="mt-4 h-px w-12 bg-gold/40" />
                  <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
                    Acesse o currículo completo na plataforma Lattes do CNPq e conheça detalhes da formação, publicações, orientações e participações em eventos acadêmicos.
                  </p>
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col justify-center gap-5 bg-card p-8 md:p-12">
                <div className="group/item flex items-center gap-4 rounded-sm transition-all duration-300 hover:translate-x-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10 transition-colors group-hover/item:bg-gold/20">
                    <GraduationCap size={20} className="text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Mestre em Direito Ambiental</div>
                    <div className="text-xs text-muted-foreground">Universidade do Estado do Amazonas (UEA)</div>
                  </div>
                </div>
                <div className="group/item flex items-center gap-4 rounded-sm transition-all duration-300 hover:translate-x-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10 transition-colors group-hover/item:bg-gold/20">
                    <Award size={20} className="text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Professor & Coordenador Jurídico</div>
                    <div className="text-xs text-muted-foreground">Ensino e pesquisa em Direito</div>
                  </div>
                </div>
                <div className="group/item flex items-center gap-4 rounded-sm transition-all duration-300 hover:translate-x-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10 transition-colors group-hover/item:bg-gold/20">
                    <BookOpen size={20} className="text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-card-foreground">Autor de obra jurídica</div>
                    <div className="text-xs text-muted-foreground">"Quando o Ambiente Adoece"</div>
                  </div>
                </div>
                <a
                  href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=1ACDFE60B18461D37FAE58D939BE9D74.buscatextual_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-2 inline-flex w-fit items-center gap-2.5 rounded-sm bg-gold px-6 py-3 text-xs uppercase tracking-[0.15em] text-navy-deep shadow-sm transition-all duration-300 hover:shadow-gold"
                >
                  Ver currículo completo
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book preview */}
      <section className="bg-gradient-to-b from-background via-secondary to-background py-24">
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
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-navy-deep hover:shadow-gold"
              >
                Saber mais sobre o livro <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.amazon.com.br/s?k=Quando+o+Ambiente+Adoece+Abra%C3%A3o+Guimar%C3%A3es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-gold/35 px-6 py-3 text-sm text-navy hover:bg-gold/10"
              >
                Comprar na Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-to-b from-background via-background to-navy-deep/55 py-24">
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
      <section className="gradient-navy relative overflow-hidden py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/70 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
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
