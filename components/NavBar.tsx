export default function NavBar() {
  return (
    <nav className="fixed w-full z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
              V&A
            </div>
            <span className="text-xl font-medium tracking-tight wordmark">
              V&A <span className="text-brand-secondary">PROFESIONALES</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#servicios" className="nav-link transition-colors">
              Servicios
            </a>
            <a href="#tecnologia" className="nav-link transition-colors">
              Tecnología
            </a>
            <a href="#nosotros" className="nav-link transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="nav-link transition-colors">
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-semibold text-white/80">
              Login Portal
            </a>
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/20"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
