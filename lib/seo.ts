export const siteConfig = {
  name: "V&A Profesionales",
  legalName: "V&A Profesionales",
  description:
    "Asesoría contable, tributaria, laboral y financiera en Perú con automatización, reportes gerenciales e inteligencia financiera para empresas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://va-profesionales.com",
  phone: "+51 970 616 942",
  email: "vap.estudiocontable@gmail.com",
  locale: "es_PE",
  logo: "/assets/brand/v%26alogo.png",
  ogImage: "/assets/brand/backgroundfinanciero.avif",
  keywords: [
    "estudio contable en Perú",
    "asesoría tributaria",
    "outsourcing contable",
    "contabilidad para empresas",
    "gestión de planillas",
    "SUNAT",
    "asesoría financiera",
    "automatización contable",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
