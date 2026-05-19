import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import SiteFooter from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Planes contables para empresas",
  description:
    "Conoce los planes de V&A Profesionales para ordenar tu contabilidad, cumplir con SUNAT y recibir acompañamiento financiero según la etapa de tu negocio.",
  alternates: {
    canonical: absoluteUrl("/planes"),
  },
  openGraph: {
    url: absoluteUrl("/planes"),
    title: "Planes contables para empresas | V&A Profesionales",
    description:
      "Planes de asesoría contable, tributaria y financiera para negocios en crecimiento.",
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
