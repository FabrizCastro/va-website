import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Cumplimiento sin correr a última hora",
    description:
      "Organizamos vencimientos, declaraciones y validaciones para que cada periodo tenga responsables, fechas y soporte claro.",
    metric: "48h",
    metricLabel: "alertas previas",
    Icon: ShieldCheck,
    accent: "text-brand-primary",
    surface: "border-blue-200/80 bg-blue-50/70",
  },
  {
    title: "Menos tareas repetidas",
    description:
      "Estandarizamos el flujo de compras, ventas, bancos y planillas para reducir reprocesos y consultas innecesarias.",
    metric: "-30%",
    metricLabel: "carga operativa",
    Icon: Clock3,
    accent: "text-brand-secondary",
    surface: "border-orange-200/80 bg-orange-50/70",
  },
  {
    title: "Información útil para decidir",
    description:
      "Convertimos la data contable en señales prácticas sobre caja, margen, costos, riesgo tributario y crecimiento.",
    metric: "1",
    metricLabel: "lectura gerencial",
    Icon: BarChart3,
    accent: "text-indigo-700",
    surface: "border-indigo-200/80 bg-indigo-50/70",
  },
];

const outcomes = [
  "Compras, ventas y bancos con trazabilidad.",
  "Declaraciones y reportes bajo una cadencia fija.",
  "Riesgos tributarios detectados antes del cierre.",
  "Indicadores financieros fáciles de revisar.",
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.20),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-primary shadow-[0_14px_38px_-30px_rgba(15,23,42,0.55)]">
              <TrendingUp className="h-4 w-4" />
              Beneficios
            </div>
            <h2 className="mt-5 text-3xl font-extrabold font-heading leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Beneficios que se sienten en la operación diaria.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              El objetivo no es solo cumplir. Es que tu equipo trabaje con
              menos ruido, mejores datos y decisiones más rápidas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-xl border border-white/70 bg-white/80 px-4 py-4 shadow-[0_16px_38px_-30px_rgba(15,23,42,0.4)]"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-800">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.Icon;

            return (
              <article
                key={benefit.title}
                className={`min-h-[20rem] rounded-2xl border p-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.38)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${benefit.surface}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950 shadow-sm">
                    <Icon className={`h-6 w-6 ${benefit.accent}`} />
                  </div>
                  <div className="text-right">
                    <p className={`font-heading text-3xl font-extrabold ${benefit.accent}`}>
                      {benefit.metric}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      {benefit.metricLabel}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold leading-tight text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200/80 bg-white/82 p-5 shadow-[0_20px_55px_-34px_rgba(15,23,42,0.4)] lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-slate-950">
              De documentos sueltos a gestión controlada.
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Recibimos", "Validamos", "Reportamos"].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-extrabold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-950">
                    {step}
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">
                    {index === 0
                      ? "Comprobantes y data del periodo."
                      : index === 1
                        ? "Cruces, observaciones y pendientes."
                        : "Indicadores y próximos pasos."}
                  </p>
                </div>
                {index < 2 ? (
                  <ArrowRight className="ml-auto hidden h-4 w-4 text-slate-400 sm:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
