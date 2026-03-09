import { Bot, Cpu, RefreshCw, Zap } from "lucide-react";

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-8 rounded-[40px] border-white/10 relative overflow-hidden">
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <Cpu className="text-blue-400" />
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                  <Zap className="text-orange-400" />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Bot className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6">El "Tech-Stack" de tu éxito</h3>
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
            <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Tecnología contable de <span className="text-brand-primary">vanguardia</span>
            </h2>
            <p className="text-lg text-slate-400">
              No somos un estudio contable tradicional. Implementamos herramientas SaaS que te
              permiten ver el futuro de tu caja hoy mismo.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-secondary border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Automatización con SUNAT</h4>
                  <p className="text-slate-500 text-sm">
                    Integración directa de flujos de comprobantes y validaciones en tiempo real.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Análisis Financiero con IA</h4>
                  <p className="text-slate-500 text-sm">
                    Dashboards gerenciales que detectan patrones de gasto y oportunidades de ahorro.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-emerald-400 border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Reportes en Tiempo Real</h4>
                  <p className="text-slate-500 text-sm">
                    Visualiza tu balance general y flujo de efectivo desde cualquier dispositivo 24/7.
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
