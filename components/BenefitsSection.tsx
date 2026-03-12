type Benefit = {
  title: string;
  description: string;
  chipClassName: string;
  cardClassName: string;
};

const benefits: Benefit[] = [
  {
    title: "Control tributario sin fricción",
    description:
      "Centralizamos declaraciones, cronogramas y validaciones para que el cumplimiento deje de depender de urgencias de último minuto.",
    chipClassName:
      "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    cardClassName: "border-brand-primary/20 bg-white/80",
  },
  {
    title: "Operación contable más liviana",
    description:
      "Reducimos tareas repetitivas con flujos estandarizados, seguimiento documentado y entregables claros para cada periodo.",
    chipClassName:
      "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20",
    cardClassName: "border-brand-secondary/20 bg-white/80",
  },
  {
    title: "Acompañamiento con criterio de negocio",
    description:
      "No solo registramos información. Traducimos cifras en decisiones prácticas para caja, costos, margen y crecimiento.",
    chipClassName:
      "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    cardClassName: "border-brand-primary/20 bg-white/80",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-brand-primary/70">
            Beneficios
          </p>
          <h2 className="mt-4 text-4xl font-extrabold font-heading leading-[1.05] text-brand-primary sm:text-5xl">
            Ventajas concretas para tu{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              operación diaria
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-700">
            Diseñamos el servicio para bajar carga operativa, mejorar orden
            interno y darte visibilidad real de lo que pasa en tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`rounded-[2rem] border p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm ${benefit.cardClassName}`}
              >
                <div
                  className={`inline-flex rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] ${benefit.chipClassName}`}
                >
                  Beneficio clave
                </div>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/72 p-8 shadow-[0_24px_60px_-32px_rgba(11,35,86,0.35)] backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-brand-primary/15 bg-brand-primary/[0.06] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary/70">
                  Menos retrabajo
                </p>
                <p className="mt-4 text-3xl font-extrabold font-heading text-brand-primary">
                  Procesos más claros
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Documentación, responsables y flujo definido desde el primer
                  mes.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-brand-secondary/15 bg-brand-secondary/[0.08] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-secondary/80">
                  Más orden
                </p>
                <p className="mt-4 text-3xl font-extrabold font-heading text-slate-900">
                  Entregables previsibles
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Reportes, declaraciones y seguimiento bajo una cadencia fija.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                Lo que cambia en la práctica
              </p>
              <ul className="mt-5 space-y-4 text-sm font-medium text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-primary" />
                  <span>Menos dependencia de recordatorios manuales.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-secondary" />
                  <span>Más trazabilidad sobre compras, ventas y planillas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-primary" />
                  <span>Decisiones gerenciales con datos más consistentes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

