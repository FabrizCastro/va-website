"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  FileSearch,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

type Service = {
  id: string;
  eyebrow: string;
  name: string;
  shortName: string;
  contactValue: string;
  summary: string;
  outcome: string;
  image: string;
  accent: "blue" | "orange" | "emerald" | "indigo" | "slate";
  Icon: typeof Calculator;
  features: string[];
};

const services: Service[] = [
  {
    id: "contabilidad",
    eyebrow: "Contabilidad integral",
    name: "Gestión contable dinámica",
    shortName: "Contable",
    contactValue: "Asesoría contable",
    summary:
      "Ordenamos compras, ventas, bancos, préstamos y formatos contables para que cada cierre mensual tenga sustento.",
    outcome: "Cierres más claros y menos reprocesos al declarar.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    accent: "blue",
    Icon: Calculator,
    features: [
      "Libros contables",
      "Conciliación bancaria",
      "Análisis de cuentas",
      "Reconocimiento de ingresos",
    ],
  },
  {
    id: "tributaria",
    eyebrow: "SUNAT & Tax",
    name: "Estrategia tributaria",
    shortName: "Tributaria",
    contactValue: "Asesoría tributaria",
    summary:
      "Gestionamos impuestos, PDTs, SIRE y alertas tributarias para reducir riesgos y evitar decisiones de último minuto.",
    outcome: "Mayor control de vencimientos, obligaciones y contingencias.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    accent: "orange",
    Icon: Scale,
    features: [
      "Liquidación de impuestos",
      "Presentación de PDTs",
      "Libros electrónicos SIRE",
      "Revisión preventiva",
    ],
  },
  {
    id: "laboral",
    eyebrow: "HR & Payroll",
    name: "Gestión laboral",
    shortName: "Laboral",
    contactValue: "Planillas y laboral",
    summary:
      "Mantenemos planillas, boletas, beneficios y trámites laborales bajo control operativo y normativo.",
    outcome: "Planillas ordenadas y pagos laborales más previsibles.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    accent: "emerald",
    Icon: Users,
    features: [
      "PLAME",
      "Boletas y gratificaciones",
      "CTS y beneficios sociales",
      "AFP y ONP",
    ],
  },
  {
    id: "reportes",
    eyebrow: "Finanzas",
    name: "Analítica financiera",
    shortName: "Reportes",
    contactValue: "Reportes financieros",
    summary:
      "Convertimos estados financieros, balances y flujos en reportes gerenciales pensados para decidir.",
    outcome: "Indicadores legibles para margen, caja, costos y crecimiento.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    accent: "indigo",
    Icon: BarChart3,
    features: [
      "Estados financieros",
      "Flujo de efectivo",
      "Tableros de control",
      "Lectura de indicadores",
    ],
  },
  {
    id: "control",
    eyebrow: "Control interno",
    name: "Auditoría y procesos",
    shortName: "Control",
    contactValue: "Reportes financieros",
    summary:
      "Revisamos procesos, documentación y puntos críticos para encontrar riesgos antes de que afecten la operación.",
    outcome: "Procesos más trazables y mejor preparados para crecer.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    accent: "slate",
    Icon: FileSearch,
    features: [
      "Revisión documental",
      "Control de riesgos",
      "Mapa de procesos",
      "Mejoras operativas",
    ],
  },
];

const accentClasses = {
  blue: {
    chip: "border-blue-200 bg-blue-50 text-brand-primary",
    icon: "bg-brand-primary text-white",
    card: "border-blue-200/80 hover:border-brand-primary/45",
    active: "border-brand-primary bg-brand-primary text-white",
    bullet: "text-brand-primary",
  },
  orange: {
    chip: "border-orange-200 bg-orange-50 text-brand-secondary",
    icon: "bg-brand-secondary text-white",
    card: "border-orange-200/80 hover:border-brand-secondary/45",
    active: "border-brand-secondary bg-brand-secondary text-white",
    bullet: "text-brand-secondary",
  },
  emerald: {
    chip: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: "bg-emerald-600 text-white",
    card: "border-emerald-200/80 hover:border-emerald-500/45",
    active: "border-emerald-600 bg-emerald-600 text-white",
    bullet: "text-emerald-600",
  },
  indigo: {
    chip: "border-indigo-200 bg-indigo-50 text-indigo-700",
    icon: "bg-indigo-600 text-white",
    card: "border-indigo-200/80 hover:border-indigo-500/45",
    active: "border-indigo-600 bg-indigo-600 text-white",
    bullet: "text-indigo-600",
  },
  slate: {
    chip: "border-slate-200 bg-slate-100 text-slate-700",
    icon: "bg-slate-800 text-white",
    card: "border-slate-200/80 hover:border-slate-500/45",
    active: "border-slate-800 bg-slate-800 text-white",
    bullet: "text-slate-700",
  },
} as const;

function scrollToContact(serviceName: string) {
  const url = new URL(window.location.href);
  url.hash = "contacto";
  url.searchParams.set("servicio", serviceName);
  window.history.replaceState({}, "", url.toString());
  window.dispatchEvent(
    new CustomEvent("va-service-selected", { detail: serviceName }),
  );

  const section = document.getElementById("contacto");
  if (!section) {
    const homeContactUrl = new URL("/", window.location.origin);
    homeContactUrl.searchParams.set("servicio", serviceName);
    homeContactUrl.hash = "contacto";
    window.location.href = homeContactUrl.toString();
    return;
  }

  const navOffset = 80;
  const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];
  const activeAccent = accentClasses[activeService.accent];
  const ActiveIcon = activeService.Icon;

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-primary shadow-[0_14px_38px_-30px_rgba(15,23,42,0.55)]">
              <ShieldCheck className="h-4 w-4" />
              Servicios especializados
            </div>
            <h2 className="mt-5 text-3xl font-extrabold font-heading leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
              Elige el soporte que tu operación necesita ahora.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Cada servicio está pensado para resolver una parte concreta de la
              gestión: orden contable, cumplimiento, planillas, reportes y
              control operativo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/70 bg-white/80 px-3 py-4 text-center shadow-[0_18px_42px_-34px_rgba(15,23,42,0.42)]">
              <p className="font-heading text-2xl font-extrabold text-brand-primary">
                5
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                frentes
              </p>
            </div>
            <div className="rounded-xl border border-white/70 bg-white/80 px-3 py-4 text-center shadow-[0_18px_42px_-34px_rgba(15,23,42,0.42)]">
              <p className="font-heading text-2xl font-extrabold text-brand-secondary">
                SUNAT
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                control
              </p>
            </div>
            <div className="rounded-xl border border-white/70 bg-white/80 px-3 py-4 text-center shadow-[0_18px_42px_-34px_rgba(15,23,42,0.42)]">
              <p className="font-heading text-2xl font-extrabold text-slate-900">
                48h
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                respuesta
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {services.map((service) => {
            const isActive = service.id === activeService.id;
            const accent = accentClasses[service.accent];

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className={`shrink-0 rounded-full border px-4 py-3 text-sm font-extrabold transition-colors ${
                  isActive
                    ? accent.active
                    : "border-slate-200 bg-white/85 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {service.shortName}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const accent = accentClasses[service.accent];
              const isActive = service.id === activeService.id;
              const Icon = service.Icon;

              return (
                <article
                  key={service.id}
                  className={`group relative min-h-[24rem] overflow-hidden rounded-2xl border bg-white/88 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.38)] transition duration-300 hover:-translate-y-1 ${accent.card} ${
                    isActive ? "ring-2 ring-slate-900/10" : ""
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-32 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/28 to-white/0" />

                  <div className="relative z-10 flex h-full flex-col p-5 pt-24">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] ${accent.chip}`}
                      >
                        {service.eyebrow}
                      </span>
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-slate-950">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.summary}
                    </p>

                    <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${accent.bullet}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        onClick={() => scrollToContact(service.contactValue)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-primary"
                      >
                        Consultar servicio
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="rounded-2xl border border-white/70 bg-white/86 p-5 shadow-[0_20px_55px_-34px_rgba(15,23,42,0.4)] backdrop-blur-sm lg:sticky lg:top-24">
            <div
              className="h-36 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('${activeService.image}')` }}
            />
            <div className="mt-5 flex items-start gap-3">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${activeAccent.icon}`}
              >
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  Servicio seleccionado
                </p>
                <h3 className="mt-1 text-xl font-extrabold leading-tight text-slate-950">
                  {activeService.name}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              {activeService.outcome}
            </p>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                Incluye
              </p>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
                {activeService.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${activeAccent.bullet}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => scrollToContact(activeService.contactValue)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-secondary px-4 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-950/18 transition hover:bg-orange-600"
            >
              Quiero revisar este punto
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
