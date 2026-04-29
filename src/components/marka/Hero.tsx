import heroImg from "@/assets/store-showroom.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-light-bloom rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 px-6 lg:px-10 pt-12 lg:pt-16 pb-20 lg:pb-24 items-center max-w-[1800px] mx-auto w-full">
        <div className="lg:col-span-5 flex flex-col gap-10 lg:pr-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Loja de móveis · São Paulo
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              Móveis para a sua casa, <span className="italic text-foreground/80">prontos para levar.</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-[44ch] leading-relaxed text-pretty">
              Sofás, mesas, camas, racks e decoração com curadoria, qualidade e preço justo. Visite a nossa loja e veja, sente e escolha pessoalmente.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#visite"
              className="bg-marka-purple text-sunlight px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-purple-deep transition-all shadow-button rounded-sm"
            >
              Como chegar
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-marka-green transition-colors group"
            >
              Falar no WhatsApp
              <span className="text-marka-green group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>

          <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">+24<span className="text-marka-green">.</span></span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Anos de loja</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">+500</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Produtos no showroom</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">10x</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Sem juros</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[60vh] lg:h-[78vh] min-h-[520px] w-full">
          <div className="w-full h-full relative bg-shadow-warm overflow-hidden shadow-editorial ring-1 ring-inset ring-foreground/5">
            <img
              src={heroImg}
              alt="Showroom da Marka Móveis com sofás, mesas e luminárias em exposição"
              className="w-full h-full object-cover"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sunlight/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
          </div>

          <div className="hidden md:flex absolute -right-4 bottom-[18%] rotate-90 origin-bottom-right items-center gap-3 opacity-60">
            <span className="w-8 h-px bg-foreground" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground">
              Showroom aberto · Seg a Sáb
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
