import type { Metadata } from "next";
import ImpactSection from "@/components/ImpactSection";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import SuccessRoadmapSection from "@/components/SuccessRoadmapSection";
import { absoluteUrl, languageAlternates, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Caso de éxito: Margales Company",
  description:
    "Caso de éxito de Margales Company: cómo pasó de documentos físicos y cierres lentos a una operación contable digital, trazable y conectada con SUNAT.",
  keywords: [
    "casos de éxito contable",
    "caso de éxito Margales Company",
    "metodología contable",
    "control tributario SUNAT",
    "reportes gerenciales contables",
    "mejora de procesos contables",
  ],
  alternates: {
    canonical: absoluteUrl("/casos-de-exito"),
    languages: languageAlternates("/casos-de-exito"),
  },
  openGraph: {
    type: "article",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/casos-de-exito"),
    title: pageTitle("Caso de éxito Margales Company"),
    description:
      "La transformación de Margales Company hacia una operación contable digital y trazable.",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: "Caso de éxito contable de Margales Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Caso de éxito Margales Company"),
    description:
      "La transformación de Margales Company hacia una operación contable digital y trazable.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function SuccessCasesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Casos de éxito", item: absoluteUrl("/casos-de-exito") },
    ],
  };

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Caso de éxito: transformación contable de Margales Company",
    description:
      "Proceso de orden documental, digitalización, control SUNAT y seguimiento contable desarrollado para Margales Company.",
    mainEntityOfPage: absoluteUrl("/casos-de-exito"),
    image: absoluteUrl(siteConfig.ogImage),
    inLanguage: "es-PE",
    about: {
      "@type": "Organization",
      name: "Margales Company",
    },
    author: {
      "@id": absoluteUrl("/#organization"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd).replace(/</g, "\\u003c") }}
      />
      <NavBar />
      <main>
        <SuccessRoadmapSection />
        <ImpactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
