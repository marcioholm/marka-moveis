import heroImg from "@/assets/hero-kitchen.jpg";
import woodDetail from "@/assets/wood-detail.jpg";

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
                Marcenaria sob medida · desde 2001
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              O refúgio esculpido em <span className="italic text-foreground/80">cada detalhe.</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-[44ch] leading-relaxed text-pretty">
              Móveis planejados que traduzem a sua essência em ambientes atemporais. Madeira selecionada, precisão milimétrica e o calor do feito à mão.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#contato"
              className="bg-marka-purple text-sunlight px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-purple-deep transition-all shadow-button rounded-sm"
            >
              Iniciar Projeto
            </a>
            <a
              href="#projetos"
              className="flex items-center gap-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-marka-green transition-colors group"
            >
              Explorar Acervos
              <span className="text-marka-green group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>

          <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">+24<span className="text-marka-green">.</span></span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Anos de tradição</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">+1.2k</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Lares assinados</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl text-marka-purple">100%</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-foreground/50">Sob medida</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[60vh] lg:h-[78vh] min-h-[520px] w-full flex items-center justify-end">
          <div className="w-[88%] h-[92%] relative bg-shadow-warm z-10 overflow-hidden shadow-editorial ring-1 ring-inset ring-foreground/5">
            <img
              src={heroImg}
              alt="Cozinha planejada Marka com marcenaria em nogueira e bancada de mármore"
              className="w-full h-full object-cover"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sunlight/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
          </div>

          <div className="absolute bottom-6 left-0 lg:-left-4 w-[42%] aspect-[4/5] bg-sunlight p-3 shadow-soft z-20 ring-1 ring-inset ring-marka-purple/10">
            <div className="w-full h-full bg-shadow-warm relative overflow-hidden">
              <img
                src={woodDetail}
                alt="Detalhe da textura natural da madeira nogueira"
                loading="lazy"
                className="w-full h-full object-cover"
                width={800}
                height={1000}
              />
            </div>
          </div>

          <div className="absolute top-[8%] -right-2 lg:-right-10 w-px h-32 bg-marka-purple/20" />
          <div className="absolute top-[8%] right-0 w-8 h-px bg-marka-purple/20" />

          <div className="hidden md:flex absolute -right-4 bottom-[18%] rotate-90 origin-bottom-right items-center gap-3 opacity-60">
            <span className="w-8 h-px bg-foreground" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground">
              Coleção Raízes · 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
