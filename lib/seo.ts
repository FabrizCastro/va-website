export const siteConfig = {
  name: "V&A Profesionales",
  legalName: "V&A Profesionales",
  description:
    "Estudio contable en Lima especializado en MYPEs. Asesoría contable, tributaria y laboral, planillas, control SUNAT y reportes financieros en Perú.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vaprofesionales.com",
  phone: "+51 970 616 942",
  email: "vap.estudiocontable@gmail.com",
  locale: "es_PE",
  country: "PE",
  city: "Lima",
  region: "Lima",
  foundingDate: "2016",
  logo: "/assets/brand/v%26alogo.png",
  ogImage: "/assets/brand/hero-contabilidad-premium.webp",
  ogImageWidth: 1806,
  ogImageHeight: 871,
  keywords: [
    "estudio contable Lima",
    "estudio contable en Perú",
    "contador para empresas en Perú",
    "contador para MYPEs en Lima",
    "servicios contables para pequeñas empresas",
    "servicios contables para empresas",
    "asesoría contable en Lima",
    "asesoría contable para empresas",
    "asesoría tributaria",
    "asesoría tributaria SUNAT",
    "declaración de impuestos Perú",
    "outsourcing contable",
    "contabilidad para empresas",
    "gestión de planillas",
    "planillas PLAME",
    "SUNAT",
    "SIRE SUNAT",
    "asesoría financiera",
    "reportes gerenciales",
    "control tributario",
    "automatización contable",
    "contador público colegiado Lima",
  ],
  services: [
    "Outsourcing contable",
    "Asesoría contable",
    "Asesoría tributaria",
    "Gestión de planillas",
    "Reportes gerenciales",
    "Automatización contable",
    "Control SUNAT",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function languageAlternates(path = "/") {
  return {
    "es-PE": absoluteUrl(path),
    "x-default": absoluteUrl(path),
  };
}
