import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5543999904666"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-marka-green/40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-marka-green text-marka-purple-deep h-14 w-14 group-hover:w-auto group-hover:px-5 rounded-full shadow-button justify-center overflow-hidden transition-[width,padding] duration-300 ease-out">
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="hidden group-hover:inline whitespace-nowrap text-sm font-semibold tracking-wide">
          Fale com a loja
        </span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
