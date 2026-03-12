"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md transition-colors duration-300 ${
        isAtTop
          ? "bg-transparent border-b border-transparent"
          : "bg-white/80 border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" className="brand-logo-text" aria-label="V&A Profesionales">
            <span className="brand-logo-top">V&amp;A</span>
            <span className="brand-logo-bottom">PROFESIONALES</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-700">
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
            <a
              href="#"
              className="hidden sm:block text-sm font-semibold text-slate-700"
            >
              Login Portal
            </a>
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-[#0B2356]/25"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

