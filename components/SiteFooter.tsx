import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/seo";

const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, vengo de la web de V&A Profesionales y quiero coordinar una asesoría.",
)}`;

const services = [
  ["Gestión contable", "/?servicio=Asesor%C3%ADa%20contable#contacto"],
  ["Control tributario", "/?servicio=Asesor%C3%ADa%20tributaria#contacto"],
  ["Planillas y laboral", "/?servicio=Planillas%20y%20laboral#contacto"],
  ["Reportes financieros", "/?servicio=Reportes%20financieros#contacto"],
];

const company = [
  ["Nosotros", "/#nosotros"],
  ["Cómo trabajamos", "/#proceso"],
  ["Casos de éxito", "/casos-de-exito"],
  ["Planes", "/planes"],
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#061631] text-white">
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#b88a38]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_.7fr] lg:items-end" data-reveal>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9c49a]">El siguiente cierre puede ser distinto</p>
            <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-7xl">
              Conversemos sobre lo que hoy necesita control.
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-primary-link group flex w-full items-center justify-between bg-[#b88a38] px-6 py-5 text-sm font-extrabold text-white transition hover:bg-[#c89a47] lg:max-w-sm">
              Agendar una conversación
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="text-xs leading-6 text-blue-100/50">Atención directa para empresas en Lima y todo el Perú.</p>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_.7fr_.7fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex flex-col font-heading" aria-label="V&A Profesionales, inicio">
              <span className="text-4xl font-bold tracking-tight">V&amp;A</span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9c49a]">Profesionales</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-blue-50/55">
              Contabilidad, tributación y gestión financiera con orden, criterio y acompañamiento profesional.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 border border-white/10 px-4 py-3 text-xs font-bold text-blue-50/70">
              <Building2 className="h-4 w-4 text-[#d9c49a]" /> Estudio contable en Lima
            </div>
          </div>

          <FooterColumn title="Servicios" links={services} />
          <FooterColumn title="Firma" links={company} />

          <div className="footer-contact-card relative overflow-hidden border border-[#d9c49a]/25 bg-[#d9c49a]/[0.07] p-6">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#d9c49a]/15" />
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#d9c49a]/10" />
            <div className="relative">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#d9c49a]">Contacto directo</p>
              <h3 className="mt-3 font-heading text-2xl font-bold">Habla con nuestro equipo.</h3>
              <p className="mt-3 text-xs leading-6 text-blue-50/55">Cuéntanos en qué etapa está tu empresa y coordinaremos el siguiente paso.</p>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-6 flex items-center gap-3 bg-[#b88a38] px-4 py-4 text-sm font-extrabold transition hover:bg-[#c89a47]">
                <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="group border border-white/10 bg-white/[0.04] p-3 transition hover:border-[#d9c49a]/40">
                  <Phone className="h-4 w-4 text-[#d9c49a]" />
                  <span className="mt-3 block text-[9px] font-bold uppercase tracking-wider text-blue-100/40">Llamar</span>
                  <span className="mt-1 block text-[11px] font-bold">{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="group border border-white/10 bg-white/[0.04] p-3 transition hover:border-[#d9c49a]/40">
                  <Mail className="h-4 w-4 text-[#d9c49a]" />
                  <span className="mt-3 block text-[9px] font-bold uppercase tracking-wider text-blue-100/40">Correo</span>
                  <span className="mt-1 block text-[11px] font-bold">Enviar mensaje</span>
                </a>
              </div>
              <p className="mt-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-50/45"><MapPin className="h-3.5 w-3.5 text-[#d9c49a]" /> Lima · Atención nacional</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 border-t border-white/10 py-7 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} V&amp;A Profesionales</p>
          <div className="flex flex-wrap gap-6">
            <a href={`mailto:${siteConfig.email}?subject=Consulta%20sobre%20privacidad`} className="transition hover:text-white">Privacidad</a>
            <a href={`mailto:${siteConfig.email}?subject=Consulta%20sobre%20t%C3%A9rminos`} className="transition hover:text-white">Términos</a>
            <Link href="/#contacto" className="transition hover:text-white">Contacto</Link>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[18vw] font-bold leading-none text-white/[0.018]">V&amp;A</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-100/40">{title}</p>
      <ul className="mt-6 space-y-4">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold text-blue-50/65 transition hover:text-white">
              <span className="h-px w-0 bg-[#d9c49a] transition-all group-hover:w-4" />{label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
