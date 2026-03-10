export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Liderazgo con visión{" "}
              <span className="text-brand-secondary">estratégica</span>
            </h2>
            <div className="prose prose-invert prose-slate">
              <p className="text-lg text-slate-400 italic border-l-4 border-brand-primary pl-6">
                "En V&A PROFESIONALES, no solo registramos transacciones;
                construimos el soporte financiero que las empresas necesitan
                para escalar sin miedo a las contingencias tributarias."
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                  alt="Henry Valladares"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-brand-dark"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">
                  Henry Valladares
                </h4>
                <p className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                  Fundador & CEO
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">
                    Contador Público
                  </div>
                  <div className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">
                    Estratega Fiscal
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h5 className="text-3xl font-bold text-brand-primary mb-2">
                  99%
                </h5>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Cumplimiento Tributario
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h5 className="text-3xl font-bold text-brand-secondary mb-2">
                  10+
                </h5>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  Años de experiencia
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="glass-card p-8 rounded-3xl border-l-4 border-brand-primary">
              <h4 className="text-xl font-bold text-white mb-3">
                Visión del Futuro
              </h4>
              <p className="text-slate-400">
                Digitalizamos la contabilidad en Perú para que dejes de ser un
                espectador y te conviertas en el estratega de tu propia empresa.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border-l-4 border-brand-secondary">
              <h4 className="text-xl font-bold text-white mb-3">
                Rapidez y Confianza
              </h4>
              <p className="text-slate-400">
                Atención personalizada con tiempos de respuesta reducidos
                gracias a nuestros flujos automatizados de trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
