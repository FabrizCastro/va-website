import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "es-PE": absoluteUrl("/"),
      es: absoluteUrl("/"),
    },
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
        width: 1200,
        height: 630,
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
    <html lang="es">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} bg-brand-dark font-sans text-slate-50 antialiased`}
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
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
