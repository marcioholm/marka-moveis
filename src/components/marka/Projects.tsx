import bedroom from "@/assets/project-bedroom.jpg";
import closet from "@/assets/project-closet.jpg";
import office from "@/assets/project-office.jpg";
import living from "@/assets/project-living.jpg";

const projects = [
  { img: bedroom, name: "Suíte Helena", location: "Jardins · SP", year: "2025", category: "Dormitório" },
  { img: closet, name: "Closet Aurora", location: "Moema · SP", year: "2024", category: "Closet" },
  { img: office, name: "Biblioteca Tessa", location: "Higienópolis · SP", year: "2024", category: "Home Office" },
  { img: living, name: "Estar Marília", location: "Pinheiros · SP", year: "2025", category: "Sala de Estar" },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Acervo selecionado
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              Projetos que <span className="italic text-foreground/80">sobrevivem ao tempo.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <p className="text-foreground/70 leading-relaxed text-pretty max-w-[42ch]">
              Cada lar Marka é uma resposta única ao território, à luz e ao ritmo de quem o habita. Selecionamos quatro capítulos recentes da nossa biblioteca de projetos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-24">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`group flex flex-col gap-6 ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-shadow-warm">
                <img
                  src={p.img}
                  alt={`Projeto ${p.name} em ${p.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-sunlight/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-marka-purple">
                  {p.category}
                </div>
              </div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl text-marka-purple tracking-tight mb-1">
                    {p.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{p.location}</p>
                </div>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-foreground/40">
                  {p.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
