import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
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
  title: "V&A PROFESIONALES | Inteligencia Financiera y Contable",
  description:
    "Asesoría contable, tributaria y financiera con automatización, análisis con IA y control total de finanzas empresariales.",
  icons: {
    icon: "/assets/brand/v%26alogo.png",
    shortcut: "/assets/brand/v%26alogo.png",
    apple: "/assets/brand/v%26alogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased bg-brand-dark text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
