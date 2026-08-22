import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import SiteFooter from "@/components/SiteFooter";
import { absoluteUrl, languageAlternates, pageTitle, siteConfig } from "@/lib/seo";

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
    languages: languageAlternates("/planes"),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/planes"),
    title: pageTitle("Planes contables para empresas en Perú"),
    description:
      "Planes de asesoría contable, tributaria y financiera para negocios en crecimiento en Perú.",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Planes contables", item: absoluteUrl("/planes") },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <NavBar />
      <main>
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
