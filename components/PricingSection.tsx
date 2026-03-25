"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import { useState } from "react";

type PlanLevel = {
  name: string;
  description: string;
};

type PricingPlan = {
  name: string;
  summary: string;
  accent: "blue" | "orange" | "mixed";
  levels: PlanLevel[];
  additionalServices: string[];
};

const plans: PricingPlan[] = [
  {
    name: "Plan Básico",
    summary:
      "Base operativa para personas y empresas que necesitan orden contable y cumplimiento recurrente.",
    accent: "blue",
    levels: [
      {
        name: "Nivel Persona",
        description:
          "Enfoque inicial para gestión personal, control documental y cumplimiento tributario básico.",
      },
      {
        name: "Nivel Empresa",
        description:
          "Pensado para negocio formal con mayor seguimiento operativo y estructura administrativa estable.",
      },
    ],
    additionalServices: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
    ],
  },
  {
    name: "Plan Intermedio",
    summary:
      "Nivel de crecimiento para operaciones que ya necesitan más seguimiento, control y criterio consultivo.",
    accent: "orange",
    levels: [
      {
        name: "Nivel Operación en Crecimiento",
        description:
          "Mayor acompañamiento contable y tributario para operaciones con más carga administrativa y seguimiento periódico.",
      },
    ],
    additionalServices: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
      "Asesoría Integral",
    ],
  },
  {
    name: "Plan Avanzado",
    summary:
      "Nivel de expansión para empresas que necesitan más criterio estratégico, visibilidad y control interno.",
    accent: "orange",
    levels: [
      {
        name: "Nivel Alta Exigencia",
        description:
          "Diseñado para operaciones con más movimiento, trazabilidad y necesidad de análisis continuo.",
      },
    ],
    additionalServices: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
      "Asesoría Integral",
    ],
  },
  {
    name: "Otros Planes",
    summary:
      "Soluciones flexibles para casos especiales, estructuras mixtas o requerimientos fuera del alcance estándar.",
    accent: "mixed",
    levels: [
      {
        name: "Nivel Personalizado",
        description:
          "Armamos el alcance según complejidad operativa, frecuencia de atención y necesidades adicionales.",
      },
    ],
    additionalServices: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
      "Asesoría Integral",
    ],
  },
];

const accentClasses = {
  blue: {
    card: "border-brand-primary/70 shadow-[0_16px_40px_-26px_rgba(11,35,86,0.55)]",
    label: "bg-brand-primary text-white",
    levelBox: "bg-blue-100/80 border border-brand-primary/10",
    levelText: "text-brand-primary",
    button: "bg-brand-primary text-white hover:bg-brand-primary/90",
  },
  orange: {
    card: "border-brand-secondary/70 shadow-[0_16px_40px_-26px_rgba(249,115,22,0.5)]",
    label: "bg-brand-secondary text-white",
    levelBox: "bg-orange-100/80 border border-brand-secondary/10",
    levelText: "text-brand-secondary",
    button: "bg-brand-secondary text-white hover:bg-brand-secondary/90",
  },
  mixed: {
    card: "border-fuchsia-500/70 shadow-[0_16px_40px_-26px_rgba(217,70,239,0.4)]",
    label: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white",
    levelBox: "bg-fuchsia-100/70 border border-fuchsia-300/50",
    levelText: "text-brand-primary",
    button:
      "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95",
  },
} as const;

export default function PricingSection() {
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetail = (key: string) => {
    setOpenDetails((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <section
      id="planes"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100 py-24"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold font-heading leading-[1.05] text-brand-primary sm:text-5xl lg:text-6xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Planes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700">
            Estructura de servicios pensada para acompañar desde operaciones
            básicas hasta necesidades empresariales más complejas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const accent = accentClasses[plan.accent];

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[2rem] border bg-white/78 p-5 pt-0 backdrop-blur-sm ${accent.card}`}
              >
                <div className="flex justify-center">
                  <div
                    className={`-mt-px rounded-b-2xl px-6 py-3 text-sm font-extrabold uppercase tracking-wide ${accent.label}`}
                  >
                    {plan.name}
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {plan.levels.map((level) => {
                    const detailKey = `${plan.name}-${level.name}`;
                    const isOpen = openDetails[detailKey] ?? false;

                    return (
                      <div
                        key={level.name}
                        className={`rounded-3xl p-5 text-center ${accent.levelBox}`}
                      >
                        <div
                          className={`text-xs font-bold uppercase tracking-[0.18em] ${accent.levelText}`}
                        >
                          {level.name}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          {level.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleDetail(detailKey)}
                          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:bg-white"
                        >
                          <Eye className="h-4 w-4" />
                          {isOpen ? "Ver menos" : "Ver más"}
                        </button>
                        {isOpen && (
                          <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 p-4 text-left">
                            <p className="text-sm leading-6 text-slate-700">
                              {plan.summary}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-5">
                  <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Servicios adicionales
                  </p>
                  <ul className="mt-5 space-y-4 text-center text-sm font-medium leading-relaxed text-slate-700">
                    {plan.additionalServices.map((service) => (
                      <li
                        key={service}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/?plan=${encodeURIComponent(plan.name)}#contacto`}
                  className={`mt-10 block w-full rounded-2xl py-4 text-center text-sm font-extrabold transition-all ${accent.button}`}
                >
                  Más información
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
