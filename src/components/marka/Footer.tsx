import logo from "@/assets/marka-logo.png";

const Footer = () => {
  return (
    <footer className="bg-wood-deep text-sunlight py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <img src={logo} alt="Marka Móveis" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-sunlight/60 max-w-[40ch] leading-relaxed text-pretty">
              Loja de móveis com curadoria para todos os ambientes da sua casa. Há mais de duas décadas mobiliando lares em São Paulo.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Loja</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li><a href="#categorias" className="hover:text-marka-green transition-colors">Categorias</a></li>
              <li><a href="#visite" className="hover:text-marka-green transition-colors">Visite</a></li>
              <li><a href="#visite" className="hover:text-marka-green transition-colors">Horários</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Categorias</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li><a href="#categorias" className="hover:text-marka-green transition-colors">Sofás</a></li>
              <li><a href="#categorias" className="hover:text-marka-green transition-colors">Mesas</a></li>
              <li><a href="#categorias" className="hover:text-marka-green transition-colors">Dormitórios</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Contato</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li>R. Rio Grande do Sul, 1346 — Centro</li>
              <li>Siqueira Campos · PR</li>
              <li><a href="tel:+5543999904666" className="hover:text-marka-green transition-colors">(43) 99990-4666</a></li>
              <li><a href="mailto:loja@marka.com.br" className="hover:text-marka-green transition-colors">loja@marka.com.br</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sunlight/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-xs text-sunlight/40 tracking-wide">
            © 2025 Marka Móveis. Todos os direitos reservados.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-sunlight/40">
            Móveis para a vida toda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
