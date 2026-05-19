import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
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
    default: "V&A Profesionales | Asesoría contable, tributaria y financiera",
    template: "%s | V&A Profesionales",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "es-PE": absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: "V&A Profesionales | Inteligencia financiera y contable",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "V&A Profesionales - Asesoría contable y financiera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V&A Profesionales | Inteligencia financiera y contable",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    serviceType: [
      "Asesoría contable",
      "Asesoría tributaria",
      "Gestión de planillas",
      "Outsourcing contable",
      "Asesoría financiera",
    ],
  };

  return (
    <html lang="es">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} bg-brand-dark font-sans text-slate-50 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
