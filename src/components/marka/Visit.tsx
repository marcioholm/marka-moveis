import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

const Visit = () => {
  return (
    <section id="visite" className="relative bg-marka-purple text-sunlight py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-marka-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Visite a loja
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium tracking-tight text-balance">
              Venha conhecer <span className="italic opacity-80">o nosso showroom.</span>
            </h2>
            <p className="mt-6 text-sunlight/70 leading-relaxed text-pretty max-w-[44ch]">
              Mais de 500 itens em exposição. Equipe pronta para ajudar a montar o seu ambiente. Estacionamento próprio e entrega para toda Grande São Paulo.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-marka-green mt-1 shrink-0" />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-1">Endereço</p>
                <p className="text-sunlight">Av. das Marcenarias, 1420 — Vila Mariana</p>
                <p className="text-sunlight/60 text-sm">São Paulo · SP · CEP 04101-000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-marka-green mt-1 shrink-0" />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-1">Horários</p>
                <p className="text-sunlight">Seg a Sex · 9h às 19h</p>
                <p className="text-sunlight">Sábado · 9h às 17h</p>
                <p className="text-sunlight/50 text-sm">Domingo · fechado</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-marka-green mt-1 shrink-0" />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-1">Contato</p>
                <a href="tel:+551133334444" className="text-sunlight hover:text-marka-green transition-colors block">(11) 3333-4444</a>
                <a href="mailto:loja@marka.com.br" className="text-sunlight/70 hover:text-marka-green transition-colors text-sm">loja@marka.com.br</a>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-marka-green text-marka-purple-deep px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-green-bright transition-all rounded-sm w-fit"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com a loja no WhatsApp
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full h-full min-h-[420px] lg:min-h-[600px] overflow-hidden ring-1 ring-sunlight/10 shadow-editorial">
            <iframe
              title="Mapa da Marka Móveis"
              src="https://www.google.com/maps?q=Av.+Paulista,+S%C3%A3o+Paulo&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
