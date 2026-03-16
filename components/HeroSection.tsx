import HeroChart from "./HeroChart";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-700 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Contabilidad 4.0 en Perú
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-heading leading-[1.1] text-brand-primary">
              Transformamos tu contabilidad en{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                inteligencia financiera
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-700 max-w-xl leading-relaxed">
              Asesoría contable, tributaria y financiera con automatización,
              análisis con IA y control total de tus finanzas empresariales para
              corporaciones y emprendedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                Agendar consulta
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
              <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/60 hover:bg-white/80 text-slate-900 font-bold rounded-xl border border-slate-300/80 transition-all">
                Conoce nuestros servicios
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?u=1"
                  className="w-10 h-10 rounded-full border-2 border-brand-dark"
                  alt="Client"
                />
                <img
                  src="https://i.pravatar.cc/100?u=2"
                  className="w-10 h-10 rounded-full border-2 border-brand-dark"
                  alt="Client"
                />
                <img
                  src="https://i.pravatar.cc/100?u=3"
                  className="w-10 h-10 rounded-full border-2 border-brand-dark"
                  alt="Client"
                />
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">+10 empresas</p>
                <p className="text-slate-600 text-xs">
                  Confían en V&A Profesionales
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-float min-w-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-[2rem] blur-3xl opacity-30"></div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="p-4 border-b border-white/5 flex items-center justify-between gap-2 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="hidden sm:block text-[10px] font-mono text-slate-500 uppercase tracking-widest truncate">
                  Dashboard V&A - Real Time Data
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                  <span className="text-[10px]">HV</span>
                </div>
              </div>
              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-brand-dark/40 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                    Eficiencia de ingresos
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-xl font-bold text-white">78%</h3>
                    <span className="text-[10px] text-emerald-400">
                      +12 pts
                    </span>
                  </div>
                </div>
                <div className="bg-brand-dark/40 p-4 rounded-xl border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">
                    Carga tributaria
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-xl font-bold text-orange-400">21%</h3>
                    <span className="text-[10px] text-slate-500">
                      IGV / Renta
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2 bg-brand-dark/40 p-4 rounded-xl border border-white/5 h-48 flex flex-col">
                  <div className="flex-1 min-h-0">
                    <HeroChart />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase">
                    Alertas SUNAT
                  </h4>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-orange-500/5 border border-orange-500/20">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <p className="text-[10px] text-orange-200">
                      Presentación PDT 621
                    </p>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-[10px] text-emerald-200">
                      Libros PLE validados
                    </p>
                  </div>
                </div>
                <div className="bg-brand-dark/40 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-slate-800"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-brand-primary"
                        strokeDasharray="219"
                        strokeDashoffset="60"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                      72%
                    </div>
                  </div>
                  <p className="text-[9px] mt-2 text-slate-500 uppercase text-center leading-tight">
                    Efectividad de Flujo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
