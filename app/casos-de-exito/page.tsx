import type { Metadata } from "next";
import ImpactSection from "@/components/ImpactSection";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import SuccessRoadmapSection from "@/components/SuccessRoadmapSection";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Casos de éxito y metodología",
  description:
    "Explora cómo V&A Profesionales acompaña a empresas con procesos contables más claros, control tributario y reportes gerenciales accionables.",
  alternates: {
    canonical: absoluteUrl("/casos-de-exito"),
  },
  openGraph: {
    url: absoluteUrl("/casos-de-exito"),
    title: "Casos de éxito | V&A Profesionales",
    description:
      "Resultados, metodología y acompañamiento contable para empresas en Perú.",
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
