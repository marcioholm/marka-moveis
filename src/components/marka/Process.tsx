const steps = [
  { num: "01", title: "Escuta", desc: "Conversamos para entender o seu modo de viver, os rituais da casa e as memórias que o espaço deve abrigar." },
  { num: "02", title: "Projeto", desc: "Nosso estúdio desenha cada milímetro em 3D, alinhando arquitetura, ergonomia e materialidade até a aprovação final." },
  { num: "03", title: "Marcenaria", desc: "Fabricação na nossa fábrica própria, com madeira selecionada, ferragens alemãs e controle artesanal de qualidade." },
  { num: "04", title: "Instalação", desc: "Equipe própria realiza a montagem milimétrica no local, com acompanhamento do arquiteto responsável." },
];

const Process = () => {
  return (
    <section id="processo" className="relative bg-marka-purple text-sunlight py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-marka-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Como trabalhamos
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium tracking-tight text-balance">
              Quatro atos para um <span className="italic opacity-80">lar definitivo.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sunlight/10">
          {steps.map((s) => (
            <div key={s.num} className="bg-marka-purple p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl lg:text-6xl text-marka-green">{s.num}</span>
                <span className="block flex-1 h-px bg-sunlight/20" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl tracking-tight">{s.title}</h3>
              <p className="text-sunlight/70 leading-relaxed text-sm text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
