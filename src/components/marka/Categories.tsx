import sofa from "@/assets/cat-sofa.jpg";
import dining from "@/assets/cat-dining.jpg";
import bedroom from "@/assets/cat-bedroom.jpg";

const categories = [
  { num: "01", name: "Sofás & Estar", desc: "Conforto para os melhores momentos da casa.", img: sofa },
  { num: "02", name: "Mesas & Jantar", desc: "Ambientes para reunir família e amigos.", img: dining },
  { num: "03", name: "Dormitórios", desc: "Camas, criados-mudos e cômodas para descansar bem.", img: bedroom },
];

const Categories = () => {
  return (
    <section id="categorias" className="relative bg-shadow-warm/40 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Categorias
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              Tudo o que sua casa precisa, <span className="italic text-foreground/80">em um só lugar.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <article
              key={cat.num}
              className="group flex flex-col gap-5 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-shadow-warm rounded-sm">
                <img
                  src={cat.img}
                  alt={`Categoria ${cat.name}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marka-purple-deep/70 via-marka-purple-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-sunlight/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-marka-purple rounded-sm">
                  {cat.num}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sunlight opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">Veja na loja</span>
                  <span className="text-marka-green text-lg">→</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl text-marka-purple mb-1 tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed text-pretty">{cat.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#visite"
            className="bg-marka-green text-marka-purple-deep px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-green-bright transition-all rounded-sm"
          >
            Conhecer na loja
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
