"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Building2,
  CalendarCheck,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

const planOptions = [
  "Plan Básico",
  "Plan Intermedio",
  "Plan Avanzado",
  "Otros Planes",
];

const serviceOptions = [
  "Asesoría contable",
  "Asesoría tributaria",
  "Planillas y laboral",
  "Reportes financieros",
  "Automatización contable",
  "Aún no lo tengo claro",
];

const contactPreferences = [
  "WhatsApp",
  "Llamada",
  "Correo",
];

function getSelectedPlanFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const incomingPlan = params.get("plan");
  return incomingPlan && planOptions.includes(incomingPlan)
    ? incomingPlan
    : null;
}

function getSelectedServiceFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const incomingService = params.get("servicio");
  return incomingService && serviceOptions.includes(incomingService)
    ? incomingService
    : null;
}

function isValidEmail(value: string) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function FinalCtaSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState(planOptions[0]);
  const [service, setService] = useState(serviceOptions[0]);
  const [contactPreference, setContactPreference] = useState(contactPreferences[0]);
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  const whatsappNumber = useMemo(
    () => siteConfig.phone.replace(/\D/g, ""),
    [],
  );

  useEffect(() => {
    const incomingPlan = getSelectedPlanFromUrl();
    const incomingService = getSelectedServiceFromUrl();
    if (incomingPlan) setPlan(incomingPlan);
    if (incomingService) setService(incomingService);

    const onPlanSelected = (event: Event) => {
      const selectedPlan = (event as CustomEvent<string>).detail;
      if (planOptions.includes(selectedPlan)) setPlan(selectedPlan);
    };

    const onServiceSelected = (event: Event) => {
      const selectedService = (event as CustomEvent<string>).detail;
      if (serviceOptions.includes(selectedService)) setService(selectedService);
    };

    window.addEventListener("va-plan-selected", onPlanSelected);
    window.addEventListener("va-service-selected", onServiceSelected);
    return () => {
      window.removeEventListener("va-plan-selected", onPlanSelected);
      window.removeEventListener("va-service-selected", onServiceSelected);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#contacto") return;

    const scrollToContact = () => {
      const section = document.getElementById("contacto");
      if (!section) return;

      const navOffset = 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(sectionTop - navOffset, 0),
        behavior: "smooth",
      });
    };

    const timer = window.setTimeout(scrollToContact, 120);
    return () => window.clearTimeout(timer);
  }, []);

  const buildMessage = () => {
    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedDetails = details.trim();

    return [
      "Hola, vengo de la web de V&A Profesionales.",
      `Mi nombre es ${trimmedName || "un interesado"}.`,
      trimmedCompany ? `Empresa: ${trimmedCompany}.` : null,
      `Plan de interés: ${plan}.`,
      `Servicio principal: ${service}.`,
      `Prefiero que me contacten por: ${contactPreference}.`,
      trimmedEmail ? `Correo: ${trimmedEmail}.` : null,
      trimmedPhone ? `Teléfono: ${trimmedPhone}.` : null,
      trimmedDetails ? `Detalle: ${trimmedDetails}` : null,
      "Quiero coordinar una asesoría.",
    ].filter(Boolean).join("\n");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSentMessage("");

    if (!name.trim()) {
      setError("Indica tu nombre para preparar el mensaje.");
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setError("Deja un correo o teléfono para poder responderte.");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Revisa el formato del correo.");
      return;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSentMessage("Abrimos WhatsApp con tu información lista para enviar.");
  };

  const mailSubject = encodeURIComponent("Solicitud de asesoría desde la web");
  const mailBody = encodeURIComponent(buildMessage());
  const whatsappQuickUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola, vengo de la web de V&A Profesionales y quiero coordinar una asesoría.",
  )}`;

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-brand-primary py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/brand/backgroundfinanciero.avif')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,35,86,0.78),rgba(11,35,86,0.74)),radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(249,115,22,0.14),transparent_38%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="pt-2 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-orange-100">
            <CalendarCheck className="h-4 w-4" />
            Contacto directo
          </div>
          <h2 className="mt-5 text-3xl font-extrabold font-heading leading-tight text-white lg:text-5xl">
            Agenda una asesoría con datos claros desde el primer mensaje.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-200 lg:text-lg">
            Completa el formulario y abriremos WhatsApp con un resumen ordenado
            de tu solicitud. También puedes escribir, llamar o enviar un correo
            directamente.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/18"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=${mailSubject}&body=${mailBody}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/18"
            >
              <Mail className="h-4 w-4" />
              Correo
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/18"
            >
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </div>
        </div>

        <form
          className="grid gap-4 rounded-2xl border border-white/16 bg-slate-950/52 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-md sm:grid-cols-2 lg:p-7"
          onSubmit={handleSubmit}
        >
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Nombre
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-white/14 bg-white/8 py-3 pl-11 pr-4 text-white placeholder:text-slate-400 transition-colors focus:border-brand-secondary focus:outline-none"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Empresa
            <div className="relative">
              <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="w-full rounded-xl border border-white/14 bg-white/8 py-3 pl-11 pr-4 text-white placeholder:text-slate-400 transition-colors focus:border-brand-secondary focus:outline-none"
                placeholder="Nombre comercial"
                autoComplete="organization"
              />
            </div>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Correo
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-white/14 bg-white/8 px-4 py-3 text-white placeholder:text-slate-400 transition-colors focus:border-brand-secondary focus:outline-none"
              placeholder="correo@empresa.com"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Teléfono
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-xl border border-white/14 bg-white/8 px-4 py-3 text-white placeholder:text-slate-400 transition-colors focus:border-brand-secondary focus:outline-none"
              placeholder="+51 999 999 999"
              autoComplete="tel"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Plan de interés
            <select
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
              className="w-full rounded-xl border border-white/14 bg-white/8 px-4 py-3 text-white transition-colors focus:border-brand-secondary focus:outline-none"
            >
              {planOptions.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Servicio
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="w-full rounded-xl border border-white/14 bg-white/8 px-4 py-3 text-white transition-colors focus:border-brand-secondary focus:outline-none"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="grid gap-2 text-sm font-semibold text-slate-200 sm:col-span-2">
            <legend>Preferencia de contacto</legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {contactPreferences.map((preference) => (
                <button
                  key={preference}
                  type="button"
                  onClick={() => setContactPreference(preference)}
                  className={`rounded-xl border px-4 py-3 text-sm font-bold transition-colors ${
                    contactPreference === preference
                      ? "border-brand-secondary bg-brand-secondary text-white"
                      : "border-white/14 bg-white/8 text-slate-200 hover:bg-white/14"
                  }`}
                >
                  {preference}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-semibold text-slate-200 sm:col-span-2">
            Cuéntanos brevemente qué necesitas
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              className="min-h-28 w-full resize-y rounded-xl border border-white/14 bg-white/8 px-4 py-3 text-white placeholder:text-slate-400 transition-colors focus:border-brand-secondary focus:outline-none"
              placeholder="Ejemplo: necesito ordenar compras, ventas, planilla y reportes mensuales."
            />
          </label>

          {error ? (
            <p className="rounded-xl border border-red-300/30 bg-red-500/14 px-4 py-3 text-sm font-semibold text-red-100 sm:col-span-2">
              {error}
            </p>
          ) : null}

          {sentMessage ? (
            <p className="rounded-xl border border-emerald-300/30 bg-emerald-500/14 px-4 py-3 text-sm font-semibold text-emerald-100 sm:col-span-2">
              {sentMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-secondary py-4 font-bold text-white shadow-xl shadow-orange-950/20 transition-all hover:bg-orange-600 sm:col-span-2"
          >
            <Send className="h-4 w-4" />
            Preparar mensaje por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
