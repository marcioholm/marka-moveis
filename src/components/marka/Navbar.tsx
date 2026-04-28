import logo from "@/assets/marka-logo.png";

const Navbar = () => {
  return (
    <nav className="relative z-30 flex items-center justify-between px-6 lg:px-10 py-6 lg:py-8">
      <a href="#" className="flex items-center gap-3">
        <img src={logo} alt="Marka Móveis" className="h-10 lg:h-12 w-auto" />
      </a>

      <div className="hidden lg:flex gap-12 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/60">
        <a href="#estudio" className="hover:text-marka-purple transition-colors">O Estúdio</a>
        <a href="#projetos" className="hover:text-marka-purple transition-colors">Projetos</a>
        <a href="#processo" className="hover:text-marka-purple transition-colors">Processo</a>
        <a href="#materialidade" className="hover:text-marka-purple transition-colors">Materialidade</a>
      </div>

      <a
        href="#contato"
        className="text-[11px] font-semibold tracking-[0.15em] uppercase text-marka-purple border-b border-marka-purple/30 pb-1 hover:border-marka-purple transition-colors"
      >
        Agendar Consulta
      </a>
    </nav>
  );
};

export default Navbar;
