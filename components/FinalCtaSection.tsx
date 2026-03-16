"use client";

import { FormEvent, useEffect, useState } from "react";

const WHATSAPP_NUMBER = "51970616942";
const planOptions = [
  "Plan Básico",
  "Plan Intermedio",
  "Plan Avanzado",
  "Otros Planes",
];

export default function FinalCtaSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(planOptions[0]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const incomingPlan = params.get("plan");

    if (incomingPlan && planOptions.includes(incomingPlan)) {
      setPlan(incomingPlan);
    }
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const contactName = name.trim() || "un interesado";
    const contactEmail = email.trim() || "No indicó correo";
    const interestedPlan = plan || "Información general";

    const message = [
      `Hola, vengo de la web de V&A Profesionales.`,
      `Mi nombre es ${contactName}.`,
      `Plan de interés: ${interestedPlan}.`,
      `Correo: ${contactEmail}.`,
      `Quiero solicitar más información y coordinar una asesoría.`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      className="py-16 lg:py-20 relative overflow-hidden bg-brand-primary"
    >
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/assets/brand/backgroundfinanciero.avif')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,35,86,0.78),rgba(11,35,86,0.74)),radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(249,115,22,0.14),transparent_38%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="glass-card p-8 lg:p-12 rounded-[2rem] border border-brand-primary/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-400/25 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-orange-400/25 rounded-full blur-3xl"></div>

          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading mb-5 text-white">
            ¿Listo para dar el siguiente paso{" "}
            <span className="text-brand-secondary">financiero</span>?
          </h2>
          <p className="text-base lg:text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están automatizando su éxito. Agenda una
            consultoría estratégica con Henry Valladares.
          </p>

          <form className="max-w-sm mx-auto space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <input
              type="email"
              placeholder="Correo corporativo"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <select
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            >
              {planOptions.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
            <button className="w-full py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20">
              Escribir por WhatsApp
            </button>
            <p className="text-[10px] text-slate-300 mt-4">
              Al enviar, abriremos WhatsApp con un mensaje base y tu plan de interés.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
