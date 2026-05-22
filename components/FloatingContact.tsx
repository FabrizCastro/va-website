"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, vengo de la web de V&A Profesionales y quiero coordinar una asesoría.",
)}`;

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto sm:px-4"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="ml-2 hidden text-sm font-bold sm:inline">WhatsApp</span>
      </a>
      <div className="flex gap-2 self-end">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          aria-label="Llamar a V&A Profesionales"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/88 text-white shadow-lg backdrop-blur transition hover:bg-brand-primary"
        >
          <Phone className="h-4 w-4" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Enviar correo a V&A Profesionales"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/88 text-white shadow-lg backdrop-blur transition hover:bg-brand-primary"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
