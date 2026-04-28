const testimonials = [
  {
    quote: "A Marka entendeu o nosso modo de morar antes mesmo de desenhar a primeira gaveta. O resultado é um apartamento que respira como nós.",
    author: "Helena Vasconcelos",
    role: "Arquiteta · Cliente Jardins",
  },
  {
    quote: "Precisão alemã com calor brasileiro. Cinco anos depois, cada dobradiça ainda funciona como no primeiro dia.",
    author: "Roberto Tessera",
    role: "Cliente Higienópolis",
  },
  {
    quote: "Eles transformaram um closet em uma obra de arquitetura. A iluminação, os encaixes, a madeira — tudo conversa.",
    author: "Marília Andrade",
    role: "Cliente Pinheiros",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center gap-3 mb-12 lg:mb-16">
          <span className="block w-8 h-px bg-marka-green" />
          <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
            Vozes que nos habitam
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <figure key={t.author} className="bg-background p-8 lg:p-12 flex flex-col gap-8">
              <span className="font-display text-6xl text-marka-purple/30 leading-none">"</span>
              <blockquote className="font-display text-xl lg:text-2xl text-foreground/90 leading-snug text-pretty flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-border pt-6">
                <p className="text-marka-purple font-semibold text-sm">{t.author}</p>
                <p className="text-foreground/50 text-xs tracking-wide mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
