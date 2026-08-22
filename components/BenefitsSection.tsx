import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  CircleDollarSign,
  FileCheck2,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const closeItems = [
  ["Compras y ventas", "Revisado"],
  ["Conciliación bancaria", "Completo"],
  ["Obligaciones del periodo", "Programado"],
];

export default function BenefitsSection() {
  return (
    <section className="accounting-section overflow-hidden bg-[#f7f5ef] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end" data-reveal>
          <div>
            <p className="section-kicker">Lo que cambia</p>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.07] text-brand-primary sm:text-5xl lg:text-6xl">Más control.<br /><span className="italic text-brand-secondary">Menos ruido.</span></h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end lg:text-lg">
            Una buena gestión contable se nota en la operación diaria: pendientes visibles, fechas controladas y números que pueden explicarse.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <article className="benefit-feature relative overflow-hidden bg-brand-primary p-7 text-white shadow-[0_28px_70px_-36px_rgba(11,35,86,.65)] sm:p-9 lg:col-span-7 lg:row-span-2" data-reveal="left">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d9c49a]/30 bg-[#d9c49a]/10 text-[#d9c49a]"><ShieldCheck className="h-5 w-5" /></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-100/45">Beneficio principal</span>
              </div>
              <h3 className="mt-9 max-w-xl font-heading text-3xl font-bold leading-tight sm:text-4xl">Cada cierre tiene un estado visible, no una colección de pendientes ocultos.</h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50/65">Organizamos responsables, validaciones y vencimientos para que sepas qué está listo, qué requiere atención y qué ocurrirá después.</p>

              <div className="mt-10 overflow-hidden border border-white/10 bg-[#071a3f]/70">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3"><CalendarClock className="h-4 w-4 text-[#d9c49a]" /><span className="text-xs font-bold">Estado del cierre mensual</span></div>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> En curso</span>
                </div>
                <div className="divide-y divide-white/10">
                  {closeItems.map(([label, state], index) => (
                    <div key={label} className="flex items-center gap-4 px-5 py-4">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[9px] text-blue-100/55">0{index + 1}</span>
                      <span className="text-xs font-bold text-blue-50/80">{label}</span>
                      <span className="ml-auto flex items-center gap-2 text-[10px] font-bold text-[#d9c49a]"><Check className="h-3 w-3" />{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="premium-card relative overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_22px_55px_-38px_rgba(15,23,42,.35)] lg:col-span-5" data-reveal="right">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center bg-[#f0e7d5] text-brand-secondary"><Gauge className="h-5 w-5" /></div>
              <span className="font-heading text-5xl font-bold text-brand-primary/5">01</span>
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold text-brand-primary">Menos trabajo repetido</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Un flujo definido reduce búsquedas, reprocesos y solicitudes de última hora.</p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5 text-xs font-bold text-brand-secondary">Documentos <ArrowRight className="h-3.5 w-3.5" /> Validación <ArrowRight className="h-3.5 w-3.5" /> Cierre</div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5" data-reveal="right" data-reveal-delay="1">
            <article className="premium-card border border-[#d8c39a]/45 bg-[#efe5d2] p-6">
              <CircleDollarSign className="h-6 w-6 text-brand-secondary" />
              <h3 className="mt-7 font-heading text-xl font-bold text-brand-primary">Caja y margen legibles</h3>
              <p className="mt-3 text-xs leading-6 text-slate-600">Los datos se traducen en señales concretas para la gerencia.</p>
            </article>
            <article className="premium-card border border-blue-200 bg-[#eaf0f8] p-6">
              <FileCheck2 className="h-6 w-6 text-brand-primary" />
              <h3 className="mt-7 font-heading text-xl font-bold text-brand-primary">Sustento disponible</h3>
              <p className="mt-3 text-xs leading-6 text-slate-600">Cada cifra importante conserva su origen y documentación.</p>
            </article>
          </div>
        </div>

        <div className="mt-5 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-4" data-reveal>
          {["Vencimientos controlados", "Compras y ventas conciliadas", "Riesgos detectados", "Indicadores explicados"].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white px-5 py-5 text-xs font-bold text-slate-700"><BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
