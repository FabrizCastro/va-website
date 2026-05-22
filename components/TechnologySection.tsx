import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  FileSearch,
  RefreshCw,
  Zap,
} from "lucide-react";

const automationSteps = [
  {
    title: "Captura",
    description: "Compras, ventas, bancos y planillas entran a un flujo único.",
    Icon: DatabaseZap,
  },
  {
    title: "IA revisa",
    description: "Clasifica movimientos, detecta patrones y marca anomalías.",
    Icon: Bot,
  },
  {
    title: "SUNAT valida",
    description: "Cruzamos vencimientos, comprobantes y libros electrónicos.",
    Icon: RefreshCw,
  },
  {
    title: "Reporte",
    description: "Recibes alertas, estado del periodo y lectura gerencial.",
    Icon: FileSearch,
  },
];

const signals = [
  {
    label: "Comprobantes observados",
    value: "3",
    tone: "text-orange-500",
  },
  {
    label: "Movimientos conciliados",
    value: "92%",
    tone: "text-emerald-500",
  },
  {
    label: "Riesgo tributario",
    value: "Bajo",
    tone: "text-blue-500",
  },
];

export default function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-gradient-to-tr from-sky-100 via-blue-50 to-orange-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_80%,rgba(56,189,248,0.20),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(251,146,60,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-secondary shadow-[0_14px_38px_-30px_rgba(15,23,42,0.55)]">
              <Zap className="h-4 w-4" />
              Automatización contable
            </div>
            <h2 className="mt-5 text-3xl font-extrabold font-heading leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              IA + SUNAT para trabajar con menos fricción.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Integramos revisión inteligente, control tributario y reportes
              gerenciales para que el cierre mensual sea más ordenado,
              verificable y fácil de seguir.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-200/80 bg-white/82 p-4 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.4)]">
                <Cpu className="h-6 w-6 text-brand-primary" />
                <h3 className="mt-3 text-lg font-extrabold text-slate-950">
                  Clasificación asistida
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  La IA ayuda a ordenar movimientos, detectar inconsistencias y
                  sugerir revisiones.
                </p>
              </div>
              <div className="rounded-xl border border-orange-200/80 bg-white/82 p-4 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.4)]">
                <RefreshCw className="h-6 w-6 text-brand-secondary" />
                <h3 className="mt-3 text-lg font-extrabold text-slate-950">
                  Control SUNAT
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Seguimiento de comprobantes, libros electrónicos, PDTs y
                  vencimientos críticos.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-900/10 bg-slate-950 p-4 text-white shadow-[0_24px_70px_-34px_rgba(2,6,23,0.72)] sm:p-5">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-200">
                  Panel de cierre mensual
                </p>
                <h3 className="mt-1 text-xl font-extrabold">
                  Estado operativo y tributario
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                En control
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-xl border border-white/8 bg-white/[0.06] p-4"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/60">
                    {signal.label}
                  </p>
                  <p className={`mt-3 font-heading text-3xl font-extrabold ${signal.tone}`}>
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {automationSteps.map((step, index) => {
                const Icon = step.Icon;

                return (
                  <div
                    key={step.title}
                    className="grid gap-3 rounded-xl border border-white/8 bg-white/[0.06] p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-100/50">
                          Paso {index + 1}
                        </span>
                        {index === 2 ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-orange-400/12 px-2 py-1 text-[10px] font-bold text-orange-200">
                            <AlertTriangle className="h-3 w-3" />
                            crítico
                          </span>
                        ) : null}
                      </div>
                      <h4 className="mt-1 text-base font-extrabold">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-blue-50/70">
                        {step.description}
                      </p>
                    </div>
                    {index < automationSteps.length - 1 ? (
                      <ArrowRight className="hidden h-5 w-5 text-blue-100/35 sm:block" />
                    ) : (
                      <CheckCircle2 className="hidden h-5 w-5 text-emerald-300 sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
