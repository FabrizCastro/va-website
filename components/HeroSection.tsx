import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";
import HeroChart from "./HeroChart";

const heroMetrics = [
  { value: "99%", label: "cumplimiento tributario" },
  { value: "10+", label: "años de experiencia" },
  { value: "48h", label: "alertas y seguimiento" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary pt-32 text-white lg:pt-40">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/brand/backgroundoficina.avif')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,35,86,0.96),rgba(11,35,86,0.86)_46%,rgba(2,6,23,0.64)),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.28),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-50 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-orange-300" />
            Contabilidad 4.0 en Perú
          </div>

          <h1 className="mt-7 max-w-4xl font-heading text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-7xl">
            Convierte tu contabilidad en decisiones financieras claras
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/86 sm:text-lg">
            Asesoría contable, tributaria, laboral y financiera con procesos
            ordenados, automatización y reportes que ayudan a dirigir mejor tu
            empresa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-secondary px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-950/20 transition hover:bg-orange-600"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/10 px-6 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/16"
            >
              Ver servicios
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/12 bg-white/9 px-4 py-4 backdrop-blur"
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

        <div className="relative min-w-0">
          <div className="rounded-2xl border border-white/14 bg-slate-950/55 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-200">
                  Panel gerencial
                </p>
                <h2 className="mt-1 text-lg font-extrabold text-white">
                  Control financiero mensual
                </h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-orange-200">
                <BarChart3 className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-4 py-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-white/[0.06] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/68">
                  Eficiencia
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <p className="font-heading text-3xl font-extrabold">78%</p>
                  <span className="text-xs font-bold text-emerald-300">
                    +12 pts
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.06] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/68">
                  Riesgo tributario
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <p className="font-heading text-3xl font-extrabold text-orange-300">
                    Bajo
                  </p>
                  <span className="text-xs font-bold text-blue-100/70">
                    monitoreo
                  </span>
                </div>
              </div>
            </div>

            <div className="h-56 rounded-xl border border-white/8 bg-slate-950/45 p-4">
              <HeroChart />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["PDT 621 revisado", "Libros electrónicos validados"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-emerald-400/16 bg-emerald-400/8 px-4 py-3 text-xs font-semibold text-emerald-100"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
