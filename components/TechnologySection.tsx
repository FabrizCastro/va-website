import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  FileBarChart,
  FileStack,
  Fingerprint,
  Landmark,
  ScanLine,
  Users,
} from "lucide-react";

const inputs = [
  { label: "Comprobantes", Icon: FileStack },
  { label: "Movimientos bancarios", Icon: Landmark },
  { label: "Planillas", Icon: Users },
];

const outputs = [
  { label: "Obligaciones SUNAT", Icon: BookOpenCheck },
  { label: "Reporte financiero", Icon: FileBarChart },
  { label: "Alertas prioritarias", Icon: AlertTriangle },
];

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,#f7f5ef_0%,#fff_72%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <p className="section-kicker">Procesos y control</p>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.06] text-brand-primary sm:text-5xl lg:text-6xl">
            La tecnología ordena.<br />El criterio profesional decide.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            La información recorre un flujo controlado, pero cada observación relevante se revisa antes de convertirse en una obligación o recomendación.
          </p>
        </div>

        <div className="technology-board relative mt-16 overflow-hidden border border-[#17366f] bg-[#071a3f] px-5 py-10 text-white shadow-[0_35px_90px_-42px_rgba(7,26,63,.75)] sm:px-9 lg:px-12 lg:py-14" data-reveal>
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
            <div className="space-y-3">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-100/45">01 · Información de entrada</p>
              {inputs.map(({ label, Icon }, index) => (
                <div key={label} className="technology-node flex items-center gap-4 border border-white/10 bg-white/[0.055] p-4" style={{ animationDelay: `${index * 220}ms` }}>
                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.06] text-blue-200"><Icon className="h-4 w-4" /></div>
                  <span className="text-sm font-bold">{label}</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,.9)]" />
                </div>
              ))}
            </div>

            <div className="relative flex min-h-80 items-center justify-center">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-white/10 lg:block">
                <span className="technology-signal absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-[#d9c49a] to-transparent" />
              </div>
              <div className="review-orbit absolute h-72 w-72 rounded-full border border-dashed border-[#d9c49a]/25" />
              <div className="review-orbit review-orbit-reverse absolute h-56 w-56 rounded-full border border-white/10" />
              <div className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#d9c49a]/40 bg-[#0c285c] text-center shadow-[0_0_70px_rgba(184,138,56,.14)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9c49a] text-brand-primary"><Fingerprint className="h-5 w-5" /></div>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d9c49a]">Núcleo de control</p>
                <p className="mt-1 text-sm font-extrabold">Revisión profesional</p>
              </div>
              <div className="absolute left-[12%] top-[18%] flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#071a3f] text-blue-200"><ScanLine className="h-4 w-4" /></div>
              <div className="absolute bottom-[14%] right-[12%] flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#071a3f] text-[#d9c49a]"><Banknote className="h-4 w-4" /></div>
            </div>

            <div className="space-y-3">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9c49a]">03 · Información de salida</p>
              {outputs.map(({ label, Icon }, index) => (
                <div key={label} className="technology-node flex items-center gap-4 border border-[#d9c49a]/15 bg-[#d9c49a]/[0.07] p-4" style={{ animationDelay: `${(index + 3) * 220}ms` }}>
                  <span className="h-2 w-2 rounded-full bg-[#d9c49a] shadow-[0_0_14px_rgba(217,196,154,.8)]" />
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d9c49a]/20 bg-[#d9c49a]/10 text-[#d9c49a]"><Icon className="h-4 w-4" /></div>
                  <span className="text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["Trazabilidad", "Cada dato conserva su origen y sustento."],
              ["Validación", "Las inconsistencias se revisan antes del cierre."],
              ["Visibilidad", "Los resultados llegan con contexto y prioridad."],
            ].map(([title, copy], index) => (
              <div key={title} className="bg-[#0a214e] p-6">
                <div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.2em] text-blue-100/40">0{index + 1}</span><BadgeCheck className="h-4 w-4 text-emerald-300" /></div>
                <h3 className="mt-5 font-heading text-xl font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-blue-50/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
