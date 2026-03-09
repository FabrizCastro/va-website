export default function ClientLogos() {
  const logos = [
    { src: "/assets/client-logos/sermedicod.png", alt: "Sermedicod" },
    { src: "/assets/client-logos/north_bayou.png", alt: "North Bayou" },
    { src: "/assets/client-logos/dm_terapia.png", alt: "DM Terapia" },
    { src: "/assets/client-logos/aniklab.png", alt: "ANIK LAB" },
    { src: "/assets/client-logos/cerebrum.png", alt: "Cerebrum" },
    { src: "/assets/client-logos/pedroluisgallo.png", alt: "Pedro Luis Gallo" },
    { src: "/assets/client-logos/sotto_voce.png", alt: "Sotto Voce" },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-tl from-sky-100 via-blue-50 to-orange-100">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_15%_20%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-sm font-semibold tracking-widest text-slate-700 uppercase mb-12">
          Empresas que confian en V&A PROFESIONALES
        </h2>
        <div className="relative overflow-hidden">
          <div className="client-logos-track flex w-max items-center gap-10 py-2 opacity-100">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                aria-hidden={index >= logos.length}
                className="flex items-center justify-center min-w-[220px] md:min-w-[280px] h-24 md:h-28 px-6 rounded-2xl bg-white/60 border border-slate-200/70"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 md:h-24 w-auto object-contain hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
