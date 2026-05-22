import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientLogos from "@/components/ClientLogos";
import FinalCtaSection from "@/components/FinalCtaSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import SiteFooter from "@/components/SiteFooter";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";
import WhoWeHelp from "@/components/WhoWeHelp";
import { absoluteUrl, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Estudio contable en Lima para empresas",
  description:
    "Estudio contable en Lima para empresas: asesoría contable, tributaria, planillas, control SUNAT, automatización y reportes gerenciales en Perú.",
  keywords: [
    "estudio contable Lima",
    "asesoría contable Lima",
    "asesoría tributaria Perú",
    "outsourcing contable Perú",
    "contador para empresas",
    "control SUNAT",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: pageTitle("Estudio contable en Lima para empresas"),
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Servicios contables y tributarios para empresas en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Estudio contable en Lima para empresas"),
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50">
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <ClientLogos />
        <WhoWeHelp />
        <ServicesSection />
        <TechnologySection />
        <BenefitsSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
