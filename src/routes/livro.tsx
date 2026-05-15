import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";
import livro from "@/assets/livro-quando-ambiente-adoece.png";

export const Route = createFileRoute("/livro")({
  head: () => ({
    meta: [
      { title: "Livro: Quando o Ambiente Adoece · Dr. Abraão Guimarães" },
      {
        name: "description",
        content:
          "'Quando o Ambiente Adoece — Burnout e a luta por qualidade de vida', livro do Dr. Abraão Guimarães. Disponível na Amazon.",
      },
      { property: "og:title", content: "Quando o Ambiente Adoece · Livro" },
      { property: "og:description", content: "Burnout e a luta por qualidade de vida — disponível na Amazon." },
      { property: "og:url", content: "/livro" },
    ],
    links: [{ rel: "canonical", href: "/livro" }],
  }),
  component: LivroPage,
});

const features = [
  { icon: BookOpen, title: "Pesquisa acadêmica", text: "Fruto de pesquisa de mestrado em Direito pela UEA." },
  { icon: Users, title: "Linguagem acessível", text: "Diálogo com profissionais do Direito, gestores, RH e leitores em geral." },
  { icon: Award, title: "Editora Dialética", text: "Publicado por uma das principais editoras jurídicas do país." },
];

function LivroPage() {
  return (
    <>
      <section className="gradient-navy py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-6 -z-10 rounded-sm border border-gold/20" />
            <img src={livro} alt="Livro Quando o Ambiente Adoece" className="max-h-[560px] drop-shadow-2xl" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Obra publicada</div>
            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">
              Quando o <span className="gradient-gold-text">Ambiente Adoece</span>
            </h1>
            <p className="mt-3 font-serif text-xl italic text-primary-foreground/80">
              Burnout & luta por qualidade de vida
            </p>
            <p className="mt-6 max-w-xl text-primary-foreground/75">
              Uma reflexão jurídica e humana sobre o adoecimento no trabalho. O autor analisa
              o burnout como doença ocupacional e defende o direito à sadia qualidade de vida
              como um pilar do trabalho contemporâneo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com.br/s?k=Quando+o+Ambiente+Adoece+Abra%C3%A3o+Guimar%C3%A3es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-medium text-navy-deep hover:shadow-gold"
              >
                Comprar na Amazon <ArrowRight size={16} />
              </a>
              <a
                href="https://www.editoradialetica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-sm hover:bg-white/5"
              >
                Editora Dialética
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-8">
                <f.icon size={28} className="text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-xl text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-5 leading-relaxed text-foreground/85">
            <h2 className="font-serif text-3xl text-navy">Sobre a obra</h2>
            <p>
              A síndrome de burnout passou a integrar oficialmente a lista de doenças
              ocupacionais reconhecidas pela Organização Mundial da Saúde, com efeitos
              diretos no Direito do Trabalho e na Previdência. Mas o que isso significa
              para empregados, empregadores e instituições?
            </p>
            <p>
              <em>Quando o Ambiente Adoece</em> caminha por essa fronteira. A obra
              examina o ambiente laboral como espaço de proteção (ou de adoecimento)
              da pessoa humana e propõe leituras que conciliam produtividade,
              dignidade e saúde mental.
            </p>
            <p>
              Indicado para advogados, gestores de pessoas, profissionais de saúde
              ocupacional, estudantes de Direito e qualquer pessoa interessada em
              compreender o impacto do trabalho na qualidade de vida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
