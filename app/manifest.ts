import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "V&A Profesionales — Estudio contable",
    short_name: "V&A Profesionales",
    description:
      "Asesoría contable, tributaria, laboral y financiera para empresas en Perú.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b2356",
    lang: "es-PE",
    icons: [
      {
        src: "/assets/brand/v%26alogo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
