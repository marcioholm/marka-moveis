import logo from "@/assets/marka-logo.png";

const Footer = () => {
  return (
    <footer className="bg-wood-deep text-sunlight py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <img src={logo} alt="Marka Móveis" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-sunlight/60 max-w-[40ch] leading-relaxed text-pretty">
              Marcenaria planejada com a precisão da arquitetura e o calor do feito à mão. Há mais de duas décadas desenhando lares atemporais.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Estúdio</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li><a href="#estudio" className="hover:text-marka-green transition-colors">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-marka-green transition-colors">Projetos</a></li>
              <li><a href="#processo" className="hover:text-marka-green transition-colors">Processo</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Ambientes</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li><a href="#" className="hover:text-marka-green transition-colors">Cozinhas</a></li>
              <li><a href="#" className="hover:text-marka-green transition-colors">Dormitórios</a></li>
              <li><a href="#" className="hover:text-marka-green transition-colors">Closets</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-marka-green mb-4">Contato</p>
            <ul className="flex flex-col gap-2 text-sunlight/70">
              <li>Rua das Marcenarias, 142</li>
              <li>São Paulo · SP</li>
              <li><a href="mailto:estudio@marka.com.br" className="hover:text-marka-green transition-colors">estudio@marka.com.br</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sunlight/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-xs text-sunlight/40 tracking-wide">
            © 2025 Marka Móveis. Todos os direitos reservados.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-sunlight/40">
            Feito com madeira, luz e tempo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
