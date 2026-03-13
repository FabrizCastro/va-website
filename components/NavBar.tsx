"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

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
          <Link href="/" className="brand-logo-text" aria-label="V&A Profesionales">
            <span className="brand-logo-top">V&amp;A</span>
            <span className="brand-logo-bottom">PROFESIONALES</span>
          </Link>

          <div className="hidden lg:flex space-x-8 text-sm font-medium text-slate-700">
            <Link href="/#servicios" className="nav-link transition-colors">
              Servicios
            </Link>
            <Link href="/#tecnologia" className="nav-link transition-colors">
              Tecnología
            </Link>
            <Link href="/casos-de-exito" className="nav-link transition-colors">
              Casos de éxito
            </Link>
            <Link href="/planes" className="nav-link transition-colors">
              Planes
            </Link>
            <Link href="/#nosotros" className="nav-link transition-colors">
              Nosotros
            </Link>
            <Link href="/#contacto" className="nav-link transition-colors">
              Contacto
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="hidden sm:block text-sm font-semibold text-slate-700">
              Login Portal
            </Link>
            <Link
              href="/#contacto"
              className="hidden sm:inline-flex px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-[#0B2356]/25"
            >
              Agenda una consulta
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/75 text-slate-800 transition-colors hover:bg-white lg:hidden"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pb-5 lg:hidden">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/92 p-4 shadow-xl">
              <div className="flex flex-col gap-1 text-sm font-semibold text-brand-secondary">
                <Link href="/#servicios" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Servicios
                </Link>
                <Link href="/#tecnologia" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Tecnología
                </Link>
                <Link href="/casos-de-exito" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Casos de éxito
                </Link>
                <Link href="/planes" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Planes
                </Link>
                <Link href="/#nosotros" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Nosotros
                </Link>
                <Link href="/#contacto" className="rounded-xl px-4 py-3 transition-colors hover:bg-slate-100 hover:text-brand-primary" onClick={closeMenu}>
                  Contacto
                </Link>
                <Link href="/#contacto" className="mt-3 inline-flex justify-center rounded-xl bg-brand-primary px-4 py-3 font-bold text-white" onClick={closeMenu}>
                  Agenda una consulta
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
