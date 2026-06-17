import { MapPin, MessageCircle } from "lucide-react";

import img01 from "@/assets/showroom/dsc04662.jpg";
import img02 from "@/assets/showroom/dsc04663.jpg";
import img03 from "@/assets/showroom/dsc04664.jpg";
import img04 from "@/assets/showroom/dsc04665.jpg";
import img05 from "@/assets/showroom/dsc04840.jpg";
import img06 from "@/assets/showroom/dsc04841.jpg";
import img07 from "@/assets/showroom/dsc05015.jpg";
import img08 from "@/assets/showroom/dsc05016.jpg";
import img09 from "@/assets/showroom/dsc05017.jpg";
import img10 from "@/assets/showroom/dsc05018.jpg";
import img11 from "@/assets/showroom/dsc05019.jpg";
import img12 from "@/assets/showroom/dsc05020.jpg";
import img13 from "@/assets/showroom/dsc05021.jpg";
import img14 from "@/assets/showroom/dsc05022.jpg";
import img15 from "@/assets/showroom/dsc05023.jpg";
import img16 from "@/assets/showroom/dsc05024.jpg";
import img17 from "@/assets/showroom/dsc05025.jpg";
import img18 from "@/assets/showroom/dsc05026.jpg";
import img19 from "@/assets/showroom/dsc05027.jpg";
import img20 from "@/assets/showroom/dsc05028.jpg";
import img21 from "@/assets/showroom/dsc05029.jpg";
import img22 from "@/assets/showroom/dsc05030.jpg";
import img23 from "@/assets/showroom/dsc05031.jpg";
import img24 from "@/assets/showroom/dsc05032.jpg";
import img25 from "@/assets/showroom/dsc05033.jpg";
import img26 from "@/assets/showroom/dsc05034.jpg";
import img27 from "@/assets/showroom/dsc05035.jpg";
import img28 from "@/assets/showroom/dsc05036.jpg";
import img29 from "@/assets/showroom/dsc05037.jpg";
import img30 from "@/assets/showroom/dsc05038.jpg";
import img31 from "@/assets/showroom/dsc05039.jpg";
import img32 from "@/assets/showroom/dsc05040.jpg";

const photos = [
  img01, img02, img03, img04, img05, img06, img07, img08,
  img09, img10, img11, img12, img13, img14, img15, img16,
  img17, img18, img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30, img31, img32,
];

const ShowroomGallery = () => {
  return (
    <section id="showroom" className="relative bg-sunlight py-24 lg:py-32 px-6 lg:px-10 border-b border-border/60">
      <div className="max-w-[1800px] mx-auto">
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
              Fotos reais <span className="italic text-foreground/80">da nossa loja.</span>
            </h2>
            <p className="mt-6 text-foreground/60 text-lg leading-relaxed max-w-[55ch] text-pretty">
              Todas as imagens abaixo são do nosso showroom físico em Siqueira Campos. Venha conferir pessoalmente, testar o conforto dos móveis e levar a peça certa para sua casa.
            </p>
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
          {photos.map((src, i) => (
            <div key={i} className="break-inside-avoid group overflow-hidden bg-shadow-warm ring-1 ring-inset ring-foreground/5 shadow-editorial">
              <img
                src={src}
                alt={`Showroom Marka Móveis - foto ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-16 pt-6 border-t border-border/60">
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
