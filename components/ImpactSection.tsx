import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileClock,
  Files,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const before = ["Documentos dispersos", "Seguimiento reactivo", "Poca visibilidad del periodo"];
const after = ["Información centralizada", "Rutina mensual definida", "Reportes y alertas con contexto"];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end" data-reveal>
          <div>
            <p className="section-kicker">Impacto operativo</p>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.07] text-brand-primary sm:text-5xl lg:text-6xl">El resultado para Margales fue una forma distinta de trabajar.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end lg:text-lg">Más que digitalizar archivos, el proceso permitió a Margales Company establecer una nueva disciplina para recibir información, revisar obligaciones y conversar sobre resultados.</p>
        </div>

        <div className="mt-14 grid overflow-hidden border border-slate-200 lg:grid-cols-[1fr_auto_1fr]" data-reveal>
          <div className="bg-[#f7f5ef] p-7 sm:p-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-400">Antes</p>
            <h3 className="mt-4 font-heading text-3xl font-bold text-slate-500">Operación reactiva</h3>
            <div className="mt-8 space-y-4">
              {before.map((item) => <div key={item} className="flex items-center gap-3 border-b border-slate-200 pb-4 text-sm font-bold text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-slate-400" />{item}</div>)}
            </div>
          </div>
          <div className="relative flex min-h-20 items-center justify-center border-y border-slate-200 bg-white px-7 lg:border-x lg:border-y-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white shadow-xl"><ArrowRight className="h-5 w-5" /></div>
          </div>
          <div className="relative overflow-hidden bg-brand-primary p-7 text-white sm:p-10">
            <div className="hero-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d9c49a]">Después</p>
              <h3 className="mt-4 font-heading text-3xl font-bold">Gestión con control</h3>
              <div className="mt-8 space-y-4">
                {after.map((item) => <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-bold text-blue-50/80"><BadgeCheck className="h-4 w-4 text-emerald-300" />{item}</div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            [Files, "Trazabilidad", "Los documentos importantes pueden encontrarse y relacionarse con el periodo."],
            [FileClock, "Anticipación", "Los pendientes aparecen antes de convertirse en urgencias tributarias."],
            [Lightbulb, "Decisión", "La información se presenta con observaciones y próximos pasos."],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof Files;
            return <article key={title as string} className="premium-card border border-slate-200 bg-white p-7" data-reveal><ItemIcon className="h-6 w-6 text-brand-secondary" /><h3 className="mt-8 font-heading text-2xl font-bold text-brand-primary">{title as string}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy as string}</p></article>;
          })}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-7 border-t border-slate-200 pt-10 sm:flex-row sm:items-center" data-reveal>
          <div className="flex items-start gap-4"><ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-brand-secondary" /><div><p className="font-heading text-2xl font-bold text-brand-primary">¿Tu operación se parece al punto de partida?</p><p className="mt-2 text-sm text-slate-600">Podemos comenzar con un diagnóstico del estado contable y tributario.</p></div></div>
          <Link href="/#contacto" className="group inline-flex shrink-0 items-center gap-3 bg-brand-primary px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#071a3f]">Solicitar diagnóstico <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </section>
  );
}
