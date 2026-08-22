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
    <section className="accounting-section relative overflow-hidden bg-[#f7f5ef] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10" data-reveal>
        <h2 className="text-sm font-semibold tracking-widest text-slate-700 uppercase mb-12">
          Organizaciones que han confiado en V&amp;A Profesionales
        </h2>
        <div className="relative overflow-hidden">
          <div className="client-logos-track grid grid-cols-2 items-center gap-4 py-2 sm:grid-cols-4 lg:grid-cols-7">
            {logos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-24 items-center justify-center border border-slate-200 bg-white px-5"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
