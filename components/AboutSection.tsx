import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="accounting-section relative overflow-hidden bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20 lg:items-center">
          <div className="space-y-8" data-reveal="left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.1] text-brand-primary">
              Experiencia contable con criterio empresarial
            </h2>
            <div className="rounded-2xl border border-brand-primary/15 bg-white/75 p-6 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)] backdrop-blur-sm">
              <p className="border-l-4 border-brand-secondary pl-5 text-lg italic leading-8 text-slate-700">
                "Nuestro trabajo es dar orden, sustento y claridad a la información contable para que cada empresa pueda decidir con mayor seguridad."
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <Image
                  src="/assets/people/henry.jpeg"
                  alt="Henry Valladares"
                  width={96}
                  height={96}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-brand-dark"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Henry Valladares
                </h4>
                <p className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                  Fundador y contador público
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="rounded border border-brand-primary/10 bg-white/75 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                    Contador Público
                  </div>
                  <div className="rounded border border-brand-secondary/10 bg-white/75 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                    Asesor tributario
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="rounded-2xl border border-brand-primary/15 bg-white/80 p-6 shadow-[0_18px_50px_-34px_rgba(11,35,86,0.28)]">
                <h5 className="text-3xl font-bold text-brand-primary mb-2">
                  Mensual
                </h5>
                <p className="text-xs text-slate-600 uppercase tracking-widest">
                  Seguimiento contable
                </p>
              </div>
              <div className="rounded-2xl border border-brand-secondary/15 bg-white/80 p-6 shadow-[0_18px_50px_-34px_rgba(249,115,22,0.22)]">
                <h5 className="text-3xl font-bold text-brand-secondary mb-2">
                  10+
                </h5>
                <p className="text-xs text-slate-600 uppercase tracking-widest">
                  Años de experiencia
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6" data-reveal="right">
            <div className="rounded-2xl border border-brand-primary/15 border-l-4 border-l-brand-primary bg-white/80 p-8 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)] backdrop-blur-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Visión del Futuro
              </h4>
              <p className="leading-7 text-slate-700">
                Digitalizamos la contabilidad en Perú para que dejes de ser un
                espectador y te conviertas en el estratega de tu propia empresa.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-secondary/15 border-l-4 border-l-brand-secondary bg-white/80 p-8 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)] backdrop-blur-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Rapidez y Confianza
              </h4>
              <p className="leading-7 text-slate-700">
                Atención personalizada con tiempos de respuesta reducidos
                gracias a nuestros flujos automatizados de trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
