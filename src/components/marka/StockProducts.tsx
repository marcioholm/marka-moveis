import { MapPin, MessageCircle } from "lucide-react";
import showroomImg from "@/assets/store-showroom.jpg";

interface ShowroomItem {
  title: string;
  desc: string;
  tag: string;
}

const items: ShowroomItem[] = [
  {
    title: "Sala de Estar",
    desc: "Sofás, poltronas e racks em composição — veja como cada peça conversa entre si no ambiente real da loja.",
    tag: "Em Exposição",
  },
  {
    title: "Sala de Jantar",
    desc: "Mesas com cadeiras montadas e decoradas, prontas para você testar o conforto e visualizar no seu espaço.",
    tag: "Em Exposição",
  },
  {
    title: "Dormitórios",
    desc: "Camas, criados-mudos, cômodas e guarda-roupas montados no showroom para você sentir a qualidade de perto.",
    tag: "Em Exposição",
  },
];

const ShowroomGallery = () => {
  return (
    <section id="showroom" className="relative bg-sunlight py-24 lg:py-32 px-6 lg:px-10 border-b border-border/60">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Nosso Showroom
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              Veja os ambientes <span className="italic text-foreground/80">na loja física.</span>
            </h2>
            <p className="mt-6 text-foreground/60 text-lg leading-relaxed max-w-[55ch] text-pretty">
              Todo o nosso mostruário está montado e decorado no showroom. Venha conferir pessoalmente, testar o conforto e levar a peça certa para sua casa.
            </p>
          </div>
        </div>

        {/* Showroom Photo */}
        <div className="relative group overflow-hidden bg-shadow-warm ring-1 ring-inset ring-foreground/5 shadow-editorial mb-16 lg:mb-20">
          <div className="aspect-[21/9] w-full overflow-hidden max-h-[560px]">
            <img
              src={showroomImg}
              alt="Showroom Marka Móveis"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-marka-purple-deep/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                {item.tag}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-marka-purple tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed text-pretty text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/60">
          <a
            href="#visite"
            className="inline-flex items-center justify-center gap-3 bg-marka-purple text-sunlight hover:bg-marka-purple-deep px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-button hover:shadow-none rounded-sm"
          >
            <MapPin className="w-4 h-4" />
            Como Chegar na Loja
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5543999904666&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Marka%20M%C3%B3veis%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20do%20showroom."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-marka-green text-marka-purple-deep px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-green-bright transition-all rounded-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Perguntar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowroomGallery;
