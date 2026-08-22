import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import RevealManager from "@/components/RevealManager";
import { absoluteUrl, languageAlternates, siteConfig } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Estudio contable en Lima y Perú | Asesoría contable y tributaria",
    template: "%s | V&A Profesionales",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: languageAlternates("/"),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: "Estudio contable en Perú | V&A Profesionales",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: "V&A Profesionales - Asesoría contable, tributaria y financiera en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio contable en Perú | V&A Profesionales",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Lima",
  },
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    foundingDate: siteConfig.foundingDate,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: siteConfig.country,
      availableLanguage: ["Spanish"],
    },
    knowsAbout: [
      "Contabilidad empresarial",
      "Tributación peruana",
      "SUNAT",
      "Planillas y legislación laboral peruana",
      "Estados financieros",
    ],
    serviceType: [...siteConfig.services],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios contables, tributarios y financieros",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: "Peru",
        },
      })),
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es-PE",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };

  return (
    <html lang="es-PE">
      <body
        className={`${plusJakartaSans.variable} ${libreBaskerville.variable} bg-white font-sans text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <RevealManager />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
