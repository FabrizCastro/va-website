import type { Metadata } from "next";
import ImpactSection from "@/components/ImpactSection";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import SuccessRoadmapSection from "@/components/SuccessRoadmapSection";
import { absoluteUrl, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Casos de éxito contable y metodología",
  description:
    "Casos de éxito contable: metodología para ordenar procesos, controlar obligaciones tributarias SUNAT y crear reportes gerenciales accionables.",
  keywords: [
    "casos de éxito contable",
    "metodología contable",
    "control tributario SUNAT",
    "reportes gerenciales contables",
    "mejora de procesos contables",
  ],
  alternates: {
    canonical: absoluteUrl("/casos-de-exito"),
  },
  openGraph: {
    url: absoluteUrl("/casos-de-exito"),
    title: pageTitle("Casos de éxito contable y metodología"),
    description:
      "Resultados, metodología y acompañamiento contable para empresas en Perú.",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Casos de éxito contable y metodología de trabajo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Casos de éxito contable y metodología"),
    description:
      "Resultados, metodología y acompañamiento contable para empresas en Perú.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function SuccessCasesPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50">
      <NavBar />
      <main>
        <SuccessRoadmapSection />
        <ImpactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
