import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientLogos from "@/components/ClientLogos";
import FinalCtaSection from "@/components/FinalCtaSection";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import NavBar from "@/components/NavBar";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import SiteFooter from "@/components/SiteFooter";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";
import WhoWeHelp from "@/components/WhoWeHelp";

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
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <BenefitsSection />
        <ImpactSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
