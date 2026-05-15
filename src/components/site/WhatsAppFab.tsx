import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/5592982170123?text=Ol%C3%A1%2C%20Dr.%20Abra%C3%A3o.%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico.";

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-elegant transition-transform hover:scale-105"
    >
      <MessageCircle size={20} />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}

export const whatsappUrl = WA_URL;
