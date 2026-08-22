"use client";

type PricingPlan = {
  name: string;
  accent: "blue" | "orange" | "mixed";
  badge: string;
  headline: string;
  ideal: string;
  formats?: string[];
  includes: string[];
  recommended?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Plan Básico",
    accent: "blue",
    badge: "Empieza con orden",
    headline: "La base ideal para organizar tu operación y cumplir sin estrés.",
    ideal: "Ideal si recién estás estructurando tus procesos o necesitas una base contable clara.",
    formats: ["Persona", "Empresa"],
    includes: [
      "Compras y ventas",
      "Renta e IGV",
      "Planilla y PLAME",
    ],
  },
  {
    name: "Plan Intermedio",
    accent: "orange",
    badge: "El más elegido",
    headline: "Más seguimiento y mejores decisiones para una operación en crecimiento.",
    ideal: "Ideal si tu negocio ya tiene más movimiento y necesitas mayor control del día a día.",
    formats: ["Persona o Empresa"],
    includes: [
      "Todo lo del plan base",
      "Asesoría integral",
      "Mayor seguimiento tributario",
    ],
    recommended: true,
  },
  {
    name: "Plan Avanzado",
    accent: "orange",
    badge: "Alta exigencia",
    headline: "Una capa más estratégica para empresas que no pueden improvisar.",
    ideal: "Ideal si manejas una operación intensa y necesitas más criterio y cercanía.",
    formats: ["Persona o Empresa"],
    includes: [
      "Cobertura más cercana",
      "Lectura estratégica",
      "Control más fino del riesgo",
    ],
  },
  {
    name: "Otros Planes",
    accent: "mixed",
    badge: "Hecho a medida",
    headline: "Diseñamos una solución propia cuando tu caso no encaja en lo estándar.",
    ideal: "Ideal para estructuras mixtas, casos especiales o necesidades fuera del formato tradicional.",
    includes: [
      "Alcance personalizado",
      "Servicios especiales",
      "Evaluación previa breve",
    ],
  },
];

const accentClasses = {
  blue: {
    card: "border-brand-primary/50 shadow-[0_20px_55px_-34px_rgba(11,35,86,0.42)]",
    badge: "bg-brand-primary text-white",
    title: "text-brand-primary",
    surface: "bg-blue-100/80 border border-blue-200/80",
    button: "bg-brand-primary text-white hover:bg-brand-primary/90",
    dot: "bg-brand-primary",
    icon: "border-brand-primary/20 bg-brand-primary/10 text-brand-primary",
  },
  orange: {
    card: "border-brand-secondary/50 shadow-[0_20px_55px_-34px_rgba(249,115,22,0.35)]",
    badge: "bg-brand-secondary text-white",
    title: "text-brand-secondary",
    surface: "bg-orange-100/80 border border-orange-200/80",
    button: "bg-brand-secondary text-white hover:bg-brand-secondary/90",
    dot: "bg-brand-secondary",
    icon: "border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary",
  },
  mixed: {
    card: "border-fuchsia-400/45 shadow-[0_20px_55px_-34px_rgba(147,51,234,0.34)]",
    badge: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white",
    title: "text-brand-primary",
    surface: "bg-fuchsia-100/75 border border-fuchsia-200/80",
    button:
      "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95",
    dot: "bg-fuchsia-500",
    icon: "border-fuchsia-200/70 bg-white/70 text-brand-primary",
  },
} as const;

function scrollToContact(planName: string) {
  const url = new URL(window.location.href);
  url.hash = "contacto";
  url.searchParams.set("plan", planName);
  window.history.replaceState({}, "", url.toString());
  window.dispatchEvent(
    new CustomEvent("va-plan-selected", { detail: planName }),
  );

  const section = document.getElementById("contacto");
  if (!section) {
    const homeContactUrl = new URL("/", window.location.origin);
    homeContactUrl.searchParams.set("plan", planName);
    homeContactUrl.hash = "contacto";
    window.location.href = homeContactUrl.toString();
    return;
  }

  const navOffset = 80;
  const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}

export default function PricingSection() {
  return (
    <section
      id="planes"
      className="accounting-section relative overflow-hidden bg-[#f7f5ef] py-24"
    >

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary shadow-[0_12px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur-sm">
            Elige con claridad
          </div>
          <h1 className="mt-5 text-4xl font-extrabold font-heading leading-[1.05] text-brand-primary sm:text-5xl lg:text-6xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Planes
            </span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Cada plan responde a un nivel distinto de acompañamiento. Elige el
            que mejor calce con tu etapa actual.
          </p>
        </div>

        <div className="mb-8 grid gap-3 rounded-2xl border border-white/70 bg-white/64 p-3 shadow-[0_20px_55px_-34px_rgba(15,23,42,0.35)] backdrop-blur-sm lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200/80 bg-white/86 px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
              1. Mira tu etapa
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
              Elige según el nivel de orden, seguimiento o estrategia que necesitas hoy.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-white/86 px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
              2. Revisa el alcance
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
              Cada card resume para quién es el plan y qué cubre de forma directa.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-white/86 px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
              3. Avanza a contacto
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
              Al elegir uno, te llevamos a contacto con el plan ya marcado.
            </p>
          </div>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 2xl:grid-cols-4">
          {plans.map((plan) => {
            const accent = accentClasses[plan.accent];

            return (
              <article
                key={plan.name}
                className={`relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-white/88 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${accent.card} ${
                  plan.recommended ? "ring-2 ring-brand-secondary/25" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-wrap items-center gap-2 pr-2">
                    <div
                      className={`inline-flex rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] ${accent.badge}`}
                    >
                      {plan.badge}
                    </div>
                    {plan.recommended ? (
                      <span className="rounded-full border border-orange-300/70 bg-orange-100/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-brand-secondary">
                        Recomendado
                      </span>
                    ) : null}
                  </div>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${accent.icon}`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className={`text-[1.85rem] font-extrabold leading-[1.05] ${accent.title}`}>
                    {plan.name}
                  </h3>
                </div>

                <p className="mt-4 text-[1.05rem] font-bold leading-7 text-slate-900">
                  {plan.headline}
                </p>

                <div className={`mt-5 rounded-xl px-4 py-4 ${accent.surface}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Ideal para
                  </p>
                  <p className="mt-2 text-sm leading-8 text-slate-800">
                    {plan.ideal}
                  </p>
                </div>

                {plan.formats?.length ? (
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Formato
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {plan.formats.map((format) => (
                        <span
                          key={format}
                          className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Incluye
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm font-medium leading-7 text-slate-700">
                    {plan.includes.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 rounded-full ${accent.dot}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToContact(plan.name)}
                  className={`mt-6 w-full rounded-xl py-4 text-center text-sm font-extrabold transition-all ${accent.button}`}
                >
                  Quiero este plan
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
