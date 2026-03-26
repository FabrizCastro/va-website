export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-tr from-sky-100 via-blue-50 to-orange-100">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_80%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold font-heading text-center mb-16 text-slate-900">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-orange-300/60 bg-orange-100/80 shadow-[0_18px_50px_rgba(251,146,60,0.14)] relative backdrop-blur-sm">
            <div className="text-brand-secondary mb-4 flex">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="text-slate-700 italic mb-6">
              "Con V&amp;A logramos ordenar nuestros procesos y tener una lectura mucho más clara de
              la operación. Hoy tomamos decisiones con información más confiable y oportuna."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800"></div>
              <div>
                <p className="font-bold text-sm">Fabrizzio</p>
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                  GSITel Services
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-orange-300/60 bg-orange-100/80 shadow-[0_18px_50px_rgba(251,146,60,0.14)] relative backdrop-blur-sm">
            <div className="text-brand-secondary mb-4 flex">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="text-slate-700 italic mb-6">
              "Trabajar dentro de V&amp;A significa acompañar a cada empresa con más orden, criterio y
              cercanía. El impacto se nota cuando el cliente empieza a sentirse tranquilo con su información."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800"></div>
              <div>
                <p className="font-bold text-sm">Karen</p>
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                  Miembro del equipo, V&amp;A Profesionales
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-orange-300/60 bg-orange-100/80 shadow-[0_18px_50px_rgba(251,146,60,0.14)] relative backdrop-blur-sm">
            <div className="text-brand-secondary mb-4 flex">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="text-slate-700 italic mb-6">
              "El valor de V&amp;A está en combinar criterio humano con herramientas digitales. Eso nos
              permite responder mejor, prevenir errores y dar una experiencia más sólida al cliente."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800"></div>
              <div>
                <p className="font-bold text-sm">Krisstal</p>
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">
                  Miembro del equipo, V&amp;A Profesionales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

