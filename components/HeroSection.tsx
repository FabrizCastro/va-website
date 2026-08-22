import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import FinancialControlVisual from "./FinancialControlVisual";

const heroMetrics = [
  { value: "Lima", label: "atención local y nacional" },
  { value: "10+", label: "años de experiencia" },
  { value: "SUNAT", label: "control y seguimiento" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#071a3f] pt-32 text-white lg:pt-36">
      <Image
        src="/assets/brand/hero-contabilidad-premium.webp"
        alt="Oficina financiera contemporánea en Lima"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,22,49,.94)_0%,rgba(7,26,63,.75)_48%,rgba(7,26,63,.36)_100%)]" />
      <div className="hero-aurora absolute -right-32 top-14 h-[32rem] w-[32rem] rounded-full bg-[#b88a38]/15 blur-[110px]" />
      <div className="hero-grid absolute inset-0 opacity-20" />
      <div className="hero-arc absolute -left-48 top-16 h-[38rem] w-[38rem] rounded-full border border-white/[0.055]" />
      <div className="hero-arc hero-arc-delayed absolute -left-24 top-40 h-[28rem] w-[28rem] rounded-full border border-[#d9c49a]/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[.92fr_1.08fr] lg:pb-24">
        <div className="max-w-3xl" data-reveal>
          <div className="inline-flex items-center gap-2 border-l-2 border-[#d9c49a] pl-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-50">
            <ShieldCheck className="h-4 w-4 text-[#d9c49a]" />
            Estudio contable en Lima · Atención en todo el Perú
          </div>

          <h1 className="mt-8 max-w-2xl font-heading text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            Contabilidad clara.
            <span className="mt-1 block italic text-[#d9c49a]">Decisiones firmes.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/86 sm:text-lg">
            Ordenamos la información contable, tributaria y laboral de tu empresa para que cada cierre tenga sustento y cada decisión, contexto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#b88a38] px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-slate-950/20 transition hover:bg-[#9b732e]"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#servicios"
              className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-transparent px-6 py-4 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 border-t border-white/15 pt-6 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-l border-white/20 px-4 py-1 first:border-l-0 first:pl-0"
              >
                <p className="font-heading text-2xl font-extrabold text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-blue-50/78">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0" data-reveal data-reveal-delay="2">
          <FinancialControlVisual />
        </div>
      </div>
    </section>
  );
}
