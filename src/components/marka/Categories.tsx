const categories = [
  { num: "01", name: "Cozinhas", desc: "O coração do lar, onde funcionalidade encontra ritual." },
  { num: "02", name: "Dormitórios", desc: "Refúgios silenciosos desenhados para o descanso absoluto." },
  { num: "03", name: "Closets", desc: "Arquitetura íntima para a sua coleção pessoal." },
  { num: "04", name: "Home Office", desc: "Ambientes que sustentam a sua melhor versão." },
  { num: "05", name: "Salas & Estar", desc: "Painéis e racks integrados à arquitetura do espaço." },
  { num: "06", name: "Banheiros", desc: "Marcenaria que resiste ao tempo e à umidade." },
];

const Categories = () => {
  return (
    <section id="estudio" className="relative bg-shadow-warm/40 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Ambientes
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              Cada cômodo, uma <span className="italic text-foreground/80">conversa diferente.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {categories.map((cat) => (
            <article
              key={cat.num}
              className="group relative p-8 lg:p-10 border-b border-border lg:border-r last:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:border-r hover:bg-sunlight transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-foreground/40">
                  {cat.num}
                </span>
                <span className="block w-2 h-2 rounded-full bg-marka-green opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-marka-purple mb-3 tracking-tight">
                {cat.name}
              </h3>
              <p className="text-foreground/60 leading-relaxed text-pretty">{cat.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-marka-purple opacity-0 group-hover:opacity-100 transition-opacity">
                Ver projetos <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
