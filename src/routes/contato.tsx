import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { whatsappUrl } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · Dr. Abraão Guimarães" },
      {
        name: "description",
        content:
          "Entre em contato com o Dr. Abraão Guimarães. Atendimento jurídico via WhatsApp: (92) 98217-0123.",
      },
      { property: "og:title", content: "Contato · Dr. Abraão Guimarães" },
      { property: "og:description", content: "WhatsApp: (92) 98217-0123" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Contato</div>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl text-navy md:text-6xl">
          Vamos conversar sobre o seu caso.
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/80">
          O atendimento inicial é feito pelo WhatsApp. Ao enviar mensagem, informe
          que veio pelo site e descreva brevemente sua demanda — o Dr. Abraão
          retornará para orientá-lo(a) sobre os próximos passos.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-sm border border-border bg-secondary p-10 transition-all hover:border-gold hover:shadow-elegant"
          >
            <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle size={26} />
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Recomendado</div>
            <h2 className="mt-2 font-serif text-3xl text-navy">Atendimento por WhatsApp</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Resposta rápida, com mensagem pré-preenchida informando que você veio pelo site.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 font-serif text-2xl text-navy">
              <Phone size={20} className="text-gold" />
              (92) 98217-0123
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy">
              Iniciar conversa
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>

          <div className="space-y-6">
            <div className="rounded-sm border border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">E-mail</div>
              </div>
              <div className="mt-2 font-serif text-lg text-navy">contato@abraaoguimaraes.adv.br</div>
            </div>

            <div className="rounded-sm border border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Atendimento</div>
              </div>
              <div className="mt-2 font-serif text-lg text-navy">Manaus · Amazonas</div>
              <div className="text-sm text-muted-foreground">Atendimento presencial e remoto</div>
            </div>

            <div className="rounded-sm border border-border bg-background p-7">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gold" />
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Horário</div>
              </div>
              <div className="mt-2 font-serif text-lg text-navy">Segunda a Sexta · 9h às 18h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
