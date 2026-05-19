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
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Asesoría contable y tributaria con inteligencia financiera",
  description:
    "Servicios contables, tributarios, laborales y financieros para empresas en Perú. Automatizamos procesos, ordenamos tu información y convertimos tus cifras en decisiones.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: "V&A Profesionales | Asesoría contable y tributaria en Perú",
    description: siteConfig.description,
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
