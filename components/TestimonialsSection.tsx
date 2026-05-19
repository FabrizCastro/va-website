import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Con V&A logramos ordenar nuestros procesos y tener una lectura mucho más clara de la operación. Hoy tomamos decisiones con información más confiable y oportuna.",
    name: "Fabrizzio",
    role: "GSITel Services",
    initials: "FA",
  },
  {
    quote:
      "Acompañamos a cada empresa con orden, criterio y cercanía. El impacto aparece cuando el cliente empieza a sentirse tranquilo con su información.",
    name: "Karen",
    role: "Equipo V&A Profesionales",
    initials: "KA",
  },
  {
    quote:
      "El valor está en combinar criterio humano con herramientas digitales. Eso nos permite prevenir errores y dar una experiencia más sólida.",
    name: "Krisstal",
    role: "Equipo V&A Profesionales",
    initials: "KR",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-sky-100 via-blue-50 to-orange-100 py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_80%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-primary/70">
            Confianza
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl">
            Clientes y equipo alineados por información más clara
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`rounded-2xl border bg-white/86 p-7 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.28)] backdrop-blur-sm ${
                index === 0
                  ? "border-brand-secondary/28"
                  : "border-brand-primary/16"
              }`}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-brand-secondary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-brand-primary/18" />
              </div>

              <p className="text-base italic leading-8 text-slate-700">
                "{testimonial.quote}"
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-slate-200/80 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary text-sm font-extrabold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
