import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
