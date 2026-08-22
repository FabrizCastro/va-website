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
import FaqSection, { faqItems } from "@/components/FaqSection";
import { absoluteUrl, languageAlternates, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle("Estudio contable en Lima para MYPEs"),
  },
  description:
    "Estudio contable en Lima especializado en MYPEs: asesoría contable, tributaria y laboral, planillas, control SUNAT y reportes financieros.",
  keywords: [
    "estudio contable Lima",
    "asesoría contable Lima",
    "asesoría tributaria Perú",
    "outsourcing contable Perú",
    "contador para empresas",
    "contador para MYPEs Lima",
    "contabilidad para pequeñas empresas",
    "control SUNAT",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: languageAlternates("/"),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: pageTitle("Estudio contable en Lima para empresas"),
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
