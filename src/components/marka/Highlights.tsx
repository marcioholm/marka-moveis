import { Award, Truck, Store, HeartHandshake } from "lucide-react";

const items = [
  { icon: Award, title: "+25 anos no mercado", desc: "Tradição e confiança em Siqueira Campos." },
  { icon: Store, title: "Loja física", desc: "Veja, sente e leve no mesmo dia." },
  { icon: Truck, title: "Entrega regional", desc: "Levamos até a sua casa com cuidado." },
  { icon: HeartHandshake, title: "Atendimento pessoal", desc: "Equipe que conhece cada peça." },
];

const Highlights = () => {
  return (
    <section className="bg-sunlight border-y border-border/60">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-11 h-11 rounded-sm bg-marka-purple/5 flex items-center justify-center text-marka-purple">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-lg lg:text-xl text-marka-purple leading-tight">{title}</p>
                <p className="text-sm text-foreground/60 mt-1 leading-relaxed text-pretty">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
