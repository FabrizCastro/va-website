import { Bot, Cpu, RefreshCw, Zap } from "lucide-react";

export default function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="py-24 relative overflow-hidden bg-gradient-to-tr from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_80%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-8 rounded-[40px] border-white/10 relative overflow-hidden">
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-orange-600/15 border border-orange-500/25">
                  <div className="w-9 h-9 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                    <Zap className="text-orange-400 w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-semibold text-orange-300 leading-tight">
                    Flujos
                    <br />
                    Automáticos
                  </p>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-blue-600/15 border border-blue-500/25">
                  <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Cpu className="text-blue-400 w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-semibold text-blue-300 leading-tight">
                    Automatización
                    <br />
                    SUNAT
                  </p>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                El "Tech-Stack" de tu éxito
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center font-bold">
                    IA
                  </div>
                  <div>
                    <p className="font-bold text-sm">IA Financial Analysis</p>
                    <p className="text-[10px] text-slate-500">
                      Predicción de tendencias y detección de anomalías.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-bold">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Auto-Sync SUNAT</p>
                    <p className="text-[10px] text-slate-500">
                      Integración directa con facturación y libros electrónicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-slate-900">
              Automatización contable con{" "}
              <span className="text-brand-primary">IA + SUNAT</span>
            </h2>
            <p className="text-lg text-slate-700">
              Integramos procesos tributarios, operativos y financieros en un
              solo flujo digital para que tu equipo trabaje más rápido y con
              menos errores.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-secondary border border-white/10">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Flujos automáticos con IA
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Clasificación inteligente de movimientos, conciliación
                    asistida y sugerencias de acción contable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary border border-white/10">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    Automatización con SUNAT
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Emisión, validación y control de comprobantes con alertas de
                    cumplimiento en tiempo real.
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


