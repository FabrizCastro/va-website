import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const whatsappUrl = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, vengo de la web de V&A Profesionales y quiero coordinar una asesoría.",
)}`;

const serviceLinks = [
  ["Outsourcing Contable", "/?servicio=Asesor%C3%ADa%20contable#contacto"],
  ["Asesoría Tributaria", "/?servicio=Asesor%C3%ADa%20tributaria#contacto"],
  ["Gestión de Planillas", "/?servicio=Planillas%20y%20laboral#contacto"],
  ["Auditoría Financiera", "/?servicio=Reportes%20financieros#contacto"],
  ["Dashboards IA", "/?servicio=Automatizaci%C3%B3n%20contable#contacto"],
];

export default function SiteFooter() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <a
                href="/"
                className="brand-logo-text"
                aria-label="V&A Profesionales"
              >
                <span className="brand-logo-top">V&amp;A</span>
                <span className="brand-logo-bottom">PROFESIONALES</span>
              </a>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Liderando la transformación digital contable y financiera en el
              mercado peruano para el mundo.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir por WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Enviar correo"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6">Servicios</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-brand-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6">Compañía</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="/#nosotros" className="hover:text-brand-primary">
                  Sobre V&A
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="hover:text-brand-primary">
                  Henry Valladares
                </a>
              </li>
              <li>
                <a href="/casos-de-exito" className="hover:text-brand-primary">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="/planes" className="hover:text-brand-primary">
                  Planes
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-brand-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Recursos</h5>
            <ul className="text-slate-500 text-sm space-y-4">
              <li>
                <a href="/#proceso" className="hover:text-white transition-colors">
                  Cronograma SUNAT
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors">
                  Calculadora de IGV
                </a>
              </li>
              <li>
                <a href="/#tecnologia" className="hover:text-white transition-colors">
                  Modelos de Estados
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contacto</h5>
            <ul className="text-slate-500 text-sm space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" />{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-500" /> Lima, Perú
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; 2026 V&A PROFESIONALES. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href={`mailto:${siteConfig.email}?subject=Consulta%20sobre%20privacidad`}>
              Privacidad
            </a>
            <a href={`mailto:${siteConfig.email}?subject=Consulta%20sobre%20t%C3%A9rminos`}>
              Términos
            </a>
            <a href="/#tecnologia">SUNAT Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
