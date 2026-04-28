import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitação recebida.", {
        description: "Nosso estúdio retornará em até 24h para iniciar a sua consulta.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contato" className="relative bg-shadow-warm/30 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-marka-green" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-marka-green">
                Iniciar projeto
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-medium text-marka-purple tracking-tight text-balance">
              O seu próximo lar começa com uma <span className="italic text-foreground/80">conversa.</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-[42ch] text-pretty">
              Receba uma consulta inicial gratuita com nosso estúdio. Visitamos o seu espaço, escutamos a sua história e desenhamos a primeira proposta sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-border pt-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/40 mb-2">Atelier</p>
              <p className="font-display text-lg text-marka-purple">Rua das Marcenarias, 142 — São Paulo</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/40 mb-2">Contato</p>
                <a href="tel:+551130000000" className="text-foreground/90 hover:text-marka-purple transition-colors block">+55 11 3000-0000</a>
                <a href="mailto:estudio@marka.com.br" className="text-foreground/90 hover:text-marka-purple transition-colors block">estudio@marka.com.br</a>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/40 mb-2">Horário</p>
                <p className="text-foreground/90">Seg — Sex · 9h às 18h</p>
                <p className="text-foreground/90">Sáb · 10h às 14h</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-sunlight p-8 lg:p-12 shadow-soft flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/50">Nome</label>
              <input
                required
                type="text"
                placeholder="Seu nome completo"
                className="border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-marka-purple transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/50">Telefone</label>
              <input
                required
                type="tel"
                placeholder="(11) 90000-0000"
                className="border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-marka-purple transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/50">E-mail</label>
            <input
              required
              type="email"
              placeholder="seu@email.com"
              className="border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-marka-purple transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/50">Ambiente desejado</label>
            <select
              required
              className="border-b border-border bg-transparent py-3 text-foreground focus:outline-none focus:border-marka-purple transition-colors"
            >
              <option value="">Selecione um ambiente</option>
              <option>Cozinha</option>
              <option>Dormitório</option>
              <option>Closet</option>
              <option>Home Office</option>
              <option>Sala de Estar</option>
              <option>Projeto completo</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/50">Conte-nos sobre o seu espaço</label>
            <textarea
              rows={4}
              placeholder="Metragem, estilo, prazo desejado..."
              className="border-b border-border bg-transparent py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-marka-purple transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-marka-purple text-sunlight px-8 py-4 text-sm font-semibold tracking-wide hover:bg-marka-purple-deep transition-all shadow-button rounded-sm self-start disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Solicitar Consulta Gratuita"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
