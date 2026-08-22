"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Check,
  FileSearch,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const services = [
  {
    id: "contabilidad",
    label: "Contabilidad integral",
    title: "Gestión contable mensual",
    contactValue: "Asesoría contable",
    description: "Ordenamos compras, ventas, bancos, préstamos y cuentas para construir cierres mensuales con sustento y trazabilidad.",
    outcome: "Una contabilidad que explica lo ocurrido y prepara la siguiente decisión.",
    image: "/assets/brand/backgroundfinanzas.jpg",
    Icon: Calculator,
    features: ["Libros contables", "Conciliación bancaria", "Análisis de cuentas", "Cierre mensual"],
  },
  {
    id: "tributaria",
    label: "Tributación",
    title: "Control tributario y SUNAT",
    contactValue: "Asesoría tributaria",
    description: "Gestionamos impuestos, PDT, SIRE y obligaciones periódicas con una revisión preventiva de los puntos críticos.",
    outcome: "Menos incertidumbre frente a vencimientos y contingencias tributarias.",
    image: "/assets/brand/backgroundfinanciero.avif",
    Icon: Scale,
    features: ["Liquidación de impuestos", "Presentación de PDT", "SIRE", "Revisión preventiva"],
  },
  {
    id: "laboral",
    label: "Laboral",
    title: "Planillas y obligaciones laborales",
    contactValue: "Planillas y laboral",
    description: "Administramos planillas, boletas, beneficios sociales y declaraciones laborales bajo una cadencia clara.",
    outcome: "Pagos y obligaciones laborales ordenados y previsibles.",
    image: "/assets/brand/backgroundoficina.avif",
    Icon: Users,
    features: ["PLAME", "Boletas de pago", "CTS y gratificaciones", "AFP y ONP"],
  },
  {
    id: "reportes",
    label: "Finanzas",
    title: "Reportes para la gerencia",
    contactValue: "Reportes financieros",
    description: "Convertimos balances, flujos y resultados en una lectura concreta sobre caja, margen, costos y crecimiento.",
    outcome: "Información financiera que puede entenderse y utilizarse.",
    image: "/assets/brand/backgroundfinanzas.jpg",
    Icon: BarChart3,
    features: ["Estados financieros", "Flujo de efectivo", "Indicadores", "Lectura gerencial"],
  },
  {
    id: "control",
    label: "Control interno",
    title: "Revisión de procesos",
    contactValue: "Reportes financieros",
    description: "Analizamos documentación, responsabilidades y puntos de control para detectar riesgos antes de que afecten la operación.",
    outcome: "Procesos más verificables y preparados para crecer.",
    image: "/assets/brand/backgroundoficina.avif",
    Icon: FileSearch,
    features: ["Revisión documental", "Mapa de riesgos", "Puntos de control", "Plan de mejora"],
  },
];

function scrollToContact(serviceName: string) {
  const url = new URL(window.location.href);
  url.hash = "contacto";
  url.searchParams.set("servicio", serviceName);
  window.history.replaceState({}, "", url.toString());
  window.dispatchEvent(new CustomEvent("va-service-selected", { detail: serviceName }));

  const section = document.getElementById("contacto");
  if (!section) {
    window.location.href = `/?servicio=${encodeURIComponent(serviceName)}#contacto`;
    return;
  }
  window.scrollTo({ top: Math.max(section.getBoundingClientRect().top + window.scrollY - 80, 0), behavior: "smooth" });
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];
  const ActiveIcon = active.Icon;

  return (
    <section id="servicios" className="relative overflow-hidden bg-[#f4f0e7] py-24">
      <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-brand-primary lg:block" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#a47b32]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end" data-reveal>
          <div>
            <div className="flex items-center gap-3 text-brand-secondary">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.25em]">Servicios especializados</p>
            </div>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.06] text-brand-primary sm:text-5xl lg:text-6xl">Una firma.<br />Cinco frentes de control.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:pb-1 lg:text-lg">
            Selecciona un área para conocer su alcance. Los servicios se pueden contratar por separado o integrar en una gestión contable completa.
          </p>
        </div>

        <div className="mt-14 grid min-h-[39rem] overflow-hidden border border-slate-300/80 bg-white shadow-[0_35px_90px_-45px_rgba(11,35,86,.42)] lg:grid-cols-[.7fr_1.05fr_1fr]" data-reveal>
          <nav aria-label="Seleccionar servicio" className="flex overflow-x-auto border-b border-slate-200 bg-[#faf8f3] lg:flex-col lg:border-b-0 lg:border-r">
            {services.map((service, index) => {
              const Icon = service.Icon;
              const selected = service.id === active.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={selected}
                  className={`service-nav-item group relative flex min-w-[13rem] flex-1 items-center gap-4 border-r border-slate-200 px-5 py-5 text-left transition lg:min-w-0 lg:border-b lg:border-r-0 ${selected ? "is-active bg-brand-primary text-white" : "text-slate-600 hover:bg-white hover:text-brand-primary"}`}
                >
                  <span className={`text-[10px] font-extrabold tracking-[0.18em] ${selected ? "text-[#d9c49a]" : "text-slate-400"}`}>0{index + 1}</span>
                  <Icon className={`h-5 w-5 shrink-0 ${selected ? "text-[#d9c49a]" : "text-slate-400 group-hover:text-brand-secondary"}`} />
                  <span className="text-sm font-bold">{service.label}</span>
                  {selected ? <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#d9c49a] lg:bottom-auto lg:left-auto lg:right-0 lg:h-full lg:w-0.5" /> : null}
                </button>
              );
            })}
          </nav>

          <div key={`${active.id}-image`} className="service-image-enter relative min-h-[22rem] overflow-hidden bg-brand-primary lg:min-h-full">
            <div className="absolute inset-0 scale-105 bg-cover bg-center transition duration-700 hover:scale-100" style={{ backgroundImage: `url('${active.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a3f] via-[#071a3f]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9c49a]">Resultado esperado</p>
              <p className="mt-3 max-w-md font-heading text-2xl font-bold leading-snug">{active.outcome}</p>
            </div>
          </div>

          <div key={`${active.id}-content`} className="service-panel-enter relative flex flex-col bg-white p-7 sm:p-9 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center bg-[#f4f0e7] text-brand-secondary"><ActiveIcon className="h-5 w-5" /></div>
            <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.22em] text-slate-400">{active.label}</p>
            <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-brand-primary">{active.title}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">{active.description}</p>

            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-slate-200 py-6">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs font-bold leading-5 text-slate-700">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-secondary" />{feature}
                </li>
              ))}
            </ul>

            <button type="button" onClick={() => scrollToContact(active.contactValue)} className="group mt-auto flex items-center justify-between border-b border-brand-primary pb-3 pt-8 text-left text-sm font-extrabold text-brand-primary transition hover:border-brand-secondary hover:text-brand-secondary">
              Consultar este servicio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-300 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:flex-row">
          <span>Atención en Lima y todo el Perú</span>
          <span className="text-brand-secondary">Diagnóstico inicial · Alcance definido · Seguimiento mensual</span>
        </div>
      </div>
    </section>
  );
}
