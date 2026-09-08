"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowRight, BarChart3, Calculator, Check, FileSearch, Scale, ShieldCheck, Sparkles, Users } from "lucide-react";
import { services } from "@/lib/services";

const icons = [Calculator, Scale, Users, BarChart3, FileSearch];

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
  window.scrollTo({
    top: Math.max(section.getBoundingClientRect().top + window.scrollY - 80, 0),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
  section.querySelector<HTMLSelectElement>('select[name="servicio"]')?.focus({ preventScroll: true });
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % services.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + services.length) % services.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = services.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    tabs.current[next]?.focus({ preventScroll: true });
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
  }

  return (
    <section id="servicios" aria-labelledby="services-title" className="services-section relative isolate overflow-hidden bg-[#f4f0e7] py-20 sm:py-24">
      <div aria-hidden="true" className="services-halo pointer-events-none absolute -right-40 top-0 h-[35rem] w-[35rem] rounded-full" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end" data-reveal>
          <div>
            <p className="section-kicker flex items-center gap-2"><Sparkles aria-hidden="true" className="h-4 w-4" />Servicios personalizados</p>
            <h2 id="services-title" className="mt-5 font-heading text-4xl font-bold leading-[1.12] text-brand-primary sm:text-5xl lg:text-6xl">
              Tu empresa es única.<br /><span className="italic text-[#8a6729]">Tu contabilidad también.</span>
            </h2>
          </div>
          <div className="lg:pb-2 lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-slate-600">Servicios contables para empresas y MYPEs en Lima y todo el Perú. Integramos contabilidad, tributación y finanzas según lo que tu negocio necesita hoy.</p>
            <p className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-primary"><ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#8a6729]" />Un servicio puntual o un acompañamiento integral.</p>
          </div>
        </div>

        <div className="service-workspace mt-10 rounded-[1.75rem] border border-white bg-white p-2 shadow-[0_30px_80px_-40px_rgba(11,35,86,.35)] sm:mt-12 sm:p-3" data-reveal>
          <div role="tablist" aria-label="Servicios contables personalizados" className="service-tabs flex gap-1 overflow-x-auto rounded-2xl bg-[#f4f3ef] p-1.5">
            {services.map((service, index) => {
              const Icon = icons[index];
              const selected = index === activeIndex;
              return (
                <button key={service.id} ref={(node) => { tabs.current[index] = node; }} id={`tab-${service.id}`} role="tab" type="button" aria-selected={selected} aria-controls={`panel-${service.id}`} tabIndex={selected ? 0 : -1} onClick={() => setActiveIndex(index)} onKeyDown={(event) => navigateTabs(event, index)}
                  className={`service-tab relative flex min-w-max flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-4 py-4 text-sm font-bold ${selected ? "is-active bg-brand-primary text-white shadow-md" : "text-slate-600 hover:bg-white hover:text-brand-primary"}`}>
                  <Icon aria-hidden="true" className={`h-4 w-4 shrink-0 ${selected ? "text-[#e4cea4]" : "text-[#8a6729]"}`} />{service.label}
                </button>
              );
            })}
          </div>

          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={service.id} id={`panel-${service.id}`} role="tabpanel" aria-labelledby={`tab-${service.id}`} hidden={index !== activeIndex} tabIndex={0} className="service-tabpanel mt-3 rounded-2xl focus-visible:outline-offset-4">
                <div className="grid lg:min-h-[33rem] lg:grid-cols-[1.05fr_1fr]">
                  <div className="service-panel-enter flex flex-col px-5 py-7 sm:p-9 lg:p-10">
                    <div className="flex items-center gap-4">
                      <span className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d9c49a]/50 bg-[#f4f0e7] text-[#8a6729]"><Icon aria-hidden="true" className="h-6 w-6" /></span>
                      <span className="text-[10px] font-extrabold uppercase tracking-[.22em] text-slate-500">Área 0{index + 1} / 05</span>
                    </div>
                    <h3 className="mt-6 max-w-md font-heading text-3xl font-bold leading-tight text-brand-primary sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">{service.description}</p>
                    <ul className="my-7 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={feature} className="service-feature flex items-center gap-2.5 text-xs font-semibold leading-5 text-slate-700" style={{ animationDelay: `${featureIndex * 65}ms` }}>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef3ed]"><Check aria-hidden="true" className="h-3 w-3 text-[#42704b]" /></span>{feature}
                        </li>
                      ))}
                    </ul>
                    <button type="button" onClick={() => scrollToContact(service.contactValue)} className="ui-button group mt-auto inline-flex w-fit items-center gap-5 rounded-xl bg-brand-primary px-5 py-4 text-sm font-bold text-white">
                      Consultar este servicio<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  <div className="service-image-enter service-photo group relative min-h-[20rem] overflow-hidden rounded-2xl bg-brand-primary sm:min-h-[24rem]">
                    <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061630] via-[#071a3f]/45 to-[#071a3f]/10" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/25 bg-[#071a3f]/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-[#e4cea4]" />{service.label}</div>
                    <span aria-hidden="true" className="absolute right-6 top-4 font-heading text-7xl text-white/20">0{index + 1}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                      <div className="service-outcome rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:p-6">
                        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#e4cea4]">Lo que gana tu empresa</p>
                        <p className="mt-3 font-heading text-xl font-bold leading-relaxed sm:text-2xl">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-[#d9c49a]/60 bg-[#ece5d7]/60 p-6 sm:flex-row sm:items-center sm:justify-between" data-reveal>
          <div className="flex items-start gap-4">
            <Sparkles aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#8a6729]" />
            <div><h3 className="font-bold text-brand-primary">¿Necesitas combinar varios servicios?</h3><p className="mt-1 text-sm leading-6 text-slate-600">Definimos juntos el alcance y armamos una solución a tu medida.</p></div>
          </div>
          <button type="button" onClick={() => {
            const url = new URL(window.location.href);
            url.searchParams.set("plan", "Otros Planes");
            window.history.replaceState({}, "", url.toString());
            window.dispatchEvent(new CustomEvent("va-plan-selected", { detail: "Otros Planes" }));
            scrollToContact("Aún no lo tengo claro");
          }} className="ui-button inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-brand-primary/20 bg-white px-5 py-3 text-sm font-bold text-brand-primary">Diseñar mi solución<ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}
