import Image from "next/image";
import {
  ArrowDown,
  BadgeCheck,
  Building2,
  CalendarDays,
  FileStack,
  Handshake,
  Laptop,
  Link2,
  ScanSearch,
} from "lucide-react";

const roadmap = [
  { step: "01", title: "Diagnóstico inicial", summary: "Margales Company operaba con documentos físicos, cierres lentos y baja trazabilidad sobre compras, ventas e impuestos. El primer paso fue convertir esa realidad en un mapa claro de problemas y prioridades.", Icon: ScanSearch },
  { step: "02", title: "Orden documental", summary: "Se levantó la información histórica y se clasificaron los comprobantes dentro de una base digital más utilizable para el equipo y para cada revisión contable.", Icon: FileStack },
  { step: "03", title: "Responsables y reuniones", summary: "Se establecieron reuniones periódicas, responsables internos y una nueva rutina operativa para evitar retrasos, consultas repetidas y retrabajos.", Icon: Handshake },
  { step: "04", title: "Cambio de hábitos", summary: "El equipo de Margales adoptó una disciplina consistente para enviar información, validar documentos y realizar seguimiento a los pendientes tributarios.", Icon: CalendarDays },
  { step: "05", title: "Integración con SUNAT", summary: "Los comprobantes, libros electrónicos, validaciones y obligaciones comenzaron a revisarse como partes de un mismo flujo de control.", Icon: Link2 },
  { step: "06", title: "Operación contable digital", summary: "Margales Company pasó a trabajar con reuniones de control, reportes, alertas y una gestión financiera más ágil, reduciendo la dependencia del archivo físico.", Icon: Laptop },
];

export default function SuccessRoadmapSection() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#071a3f] pb-28 pt-36 text-white lg:pb-36 lg:pt-44">
        <Image src="/assets/brand/backgroundfinanzas.jpg" alt="Análisis contable y financiero empresarial" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,22,49,.98)_0%,rgba(7,26,63,.91)_48%,rgba(7,26,63,.58)_100%)]" />
        <div className="hero-grid absolute inset-0 -z-10 opacity-20" />
        <div className="absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-[#b88a38]/15 blur-[110px]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div data-reveal>
              <div className="flex items-center gap-3 text-[#d9c49a]">
                <BadgeCheck className="h-4 w-4" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em]">Caso de éxito real · Transformación contable</p>
              </div>
              <h1 className="mt-6 max-w-4xl font-bold leading-[1.02]">
                <span className="case-company-lockup inline-flex flex-col border-l-2 border-[#d9c49a] bg-white/[0.055] px-5 py-4 backdrop-blur-sm sm:px-7">
                  <span className="mb-3 flex items-center gap-2 font-sans text-[9px] font-extrabold uppercase tracking-[0.26em] text-[#d9c49a]">
                    <Building2 className="h-3.5 w-3.5" /> Empresa del caso
                  </span>
                  <span className="font-sans text-5xl font-extrabold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                    Margales <span className="font-medium text-blue-100/70">Company</span>
                  </span>
                </span>
                <span className="mt-6 block max-w-3xl font-heading text-3xl italic text-[#d9c49a] sm:text-4xl lg:text-5xl">Del papel a una operación contable digital.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/70 sm:text-lg">
                Conoce cómo V&amp;A Profesionales acompañó su transición desde una operación basada en documentos físicos hacia un proceso contable ordenado, trazable y digital.
              </p>
            </div>
            <div className="border-l border-white/15 pl-6 lg:mb-2" data-reveal="right">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-100/40">La transformación</p>
              <div className="mt-5 space-y-4">
                {["Información centralizada", "Responsables definidos", "Control tributario integrado"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-blue-50/80"><BadgeCheck className="h-4 w-4 text-emerald-300" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f5ef] pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative -top-12 grid overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_-42px_rgba(11,35,86,.38)] sm:grid-cols-3" data-reveal>
            {[
              ["Empresa", "Margales Company"],
              ["Punto de partida", "Documentos físicos y cierres lentos"],
              ["Resultado", "Operación contable digital y trazable"],
            ].map(([label, value], index) => (
              <div key={label} className="border-slate-200 p-6 sm:border-l first:sm:border-l-0 lg:p-8">
                <div className="flex items-center justify-between"><p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-brand-secondary">{label}</p><span className="font-heading text-2xl font-bold text-brand-primary/10">0{index + 1}</span></div>
                <p className="mt-5 font-heading text-xl font-bold leading-snug text-brand-primary">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28 lg:self-start" data-reveal="left">
              <p className="section-kicker">La implementación</p>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-brand-primary sm:text-5xl">Así transformamos la operación de Margales.</h2>
              <p className="mt-5 leading-8 text-slate-600">El cambio no ocurrió con una sola herramienta. Estas fueron las seis acciones concretas desarrolladas junto con su equipo.</p>
              <div className="mt-8 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-secondary">Recorre el proceso <ArrowDown className="h-4 w-4 success-arrow" /></div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[1.4rem] top-8 w-px bg-slate-300 sm:left-[2.15rem]" />
              <div className="success-progress absolute left-[1.4rem] top-8 h-32 w-px bg-gradient-to-b from-transparent via-[#a47b32] to-transparent sm:left-[2.15rem]" />
              <div className="space-y-4">
                {roadmap.map(({ step, title, summary, Icon }, index) => (
                  <article key={step} className="group relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[4.5rem_1fr]" data-reveal="right" data-reveal-delay={String((index % 3) + 1)}>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d9c49a]/55 bg-[#f7f5ef] text-[10px] font-extrabold text-brand-secondary sm:h-[4.3rem] sm:w-[4.3rem]">{step}</div>
                    <div className="border border-slate-200 bg-white p-6 transition duration-500 group-hover:-translate-y-1 group-hover:border-[#d9c49a]/55 group-hover:shadow-[0_20px_50px_-38px_rgba(11,35,86,.4)] sm:p-7">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f0e7d5] text-brand-secondary"><Icon className="h-5 w-5" /></div>
                        <div><h3 className="font-heading text-2xl font-bold text-brand-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p></div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
