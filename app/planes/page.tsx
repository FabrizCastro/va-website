import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import SiteFooter from "@/components/SiteFooter";
import { absoluteUrl, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Planes contables para empresas en Perú",
  description:
    "Planes contables para empresas en Perú: contabilidad, impuestos, planillas, asesoría tributaria, SUNAT y reportes financieros según tu etapa.",
  keywords: [
    "planes contables para empresas",
    "servicios contables precios Perú",
    "outsourcing contable para empresas",
    "plan contable tributario",
    "asesoría contable mensual",
  ],
  alternates: {
    canonical: absoluteUrl("/planes"),
  },
  openGraph: {
    url: absoluteUrl("/planes"),
    title: pageTitle("Planes contables para empresas en Perú"),
    description:
      "Planes de asesoría contable, tributaria y financiera para negocios en crecimiento en Perú.",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Planes contables para empresas en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Planes contables para empresas en Perú"),
    description:
      "Planes de asesoría contable, tributaria y financiera para negocios en crecimiento en Perú.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50">
      <NavBar />
      <main>
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
