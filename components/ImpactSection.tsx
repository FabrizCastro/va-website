const impactMetrics = [
  {
    value: "24/7",
    label: "Visibilidad de informacion critica",
    tone: "orange",
  },
  {
    value: "3x",
    label: "Mas rapidez para responder requerimientos",
    tone: "blue",
  },
  {
    value: "-60%",
    label: "Menos seguimiento manual en tareas repetitivas",
    tone: "orange",
  },
];

const impactSteps = [
  "Tableros y reportes con foco en caja, impuestos y obligaciones.",
  "Seguimiento operativo para detectar atrasos antes de que escalen.",
  "Mayor confianza para decidir contrataciones, compras e inversion.",
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_82%_78%,rgba(249,115,22,0.18),transparent_38%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-orange-200/90">
            Impacto
          </p>
          <h2 className="mt-4 text-4xl font-extrabold font-heading leading-[1.05] text-white sm:text-5xl">
            Resultados que se notan en la{" "}
            <span className="text-orange-300">gestion financiera</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-blue-100/85">
            El valor del servicio no esta solo en cumplir. Esta en ordenar la
            operacion, reducir ruido y darte informacion util para mover el
            negocio con mas precision.
          </p>

          <div className="mt-8 space-y-4">
            {impactSteps.map((step) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-secondary" />
                <p className="text-sm leading-7 text-blue-50/90">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {impactMetrics.map((metric) => (
            <article
              key={metric.label}
              className={`rounded-[2rem] border p-7 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.55)] ${
                metric.tone === "orange"
                  ? "border-brand-secondary/35 bg-white/[0.08]"
                  : "border-blue-300/25 bg-white/[0.06]"
              }`}
            >
              <p
                className={`text-4xl font-extrabold font-heading ${
                  metric.tone === "orange" ? "text-orange-300" : "text-white"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-blue-50/80">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
