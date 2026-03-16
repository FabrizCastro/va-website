"use client";

import Link from "next/link";
import { useState } from "react";

type BillingCycle = "monthly" | "annual";

type PricingSubplan = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  noteMonthly: string;
  noteAnnual: string;
};

type PricingPlan = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  noteMonthly: string;
  noteAnnual: string;
  accent: "blue" | "orange" | "mixed";
  subplans?: PricingSubplan[];
  features: string[];
};

const plans: PricingPlan[] = [
  {
    name: "Plan Básico",
    monthlyPrice: "S/ 200",
    annualPrice: "S/ 2200",
    noteMonthly: "+ IGV | Subplanes desde S/ 150 hasta S/ 200",
    noteAnnual: "+ IGV | Subplanes anuales desde S/ 120 hasta S/ 180",
    accent: "blue",
    subplans: [
      {
        name: "Plan Persona",
        monthlyPrice: "S/ 150",
        annualPrice: "S/ 1650",
        noteMonthly: "+ IGV | Para gestión personal",
        noteAnnual: "+ IGV | Pago anual preferente",
      },
      {
        name: "Plan Empresa",
        monthlyPrice: "S/ 200",
        annualPrice: "S/ 2200",
        noteMonthly: "+ IGV | Para operación empresarial",
        noteAnnual: "+ IGV | Mejor para negocio formal",
      },
    ],
    features: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
    ],
  },
  {
    name: "Plan Intermedio",
    monthlyPrice: "S/ 250",
    annualPrice: "S/ 3000",
    noteMonthly: "+ IGV | Subplanes desde S/ 250 hasta S/ 300",
    noteAnnual: "+ IGV | Subplanes anuales desde S/ 230 hasta S/ 270",
    accent: "orange",
    subplans: [
      {
        name: "Persona o Empresa",
        monthlyPrice: "S/ 300",
        annualPrice: "S/ 3300",
        noteMonthly: "+ IGV | Ingresos aproximados de S/ 15,000",
        noteAnnual: "+ IGV | Ingresos aproximados de S/ 15,000",
      },
    ],
    features: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
      "Asesoría Integral",
    ],
  },
  {
    name: "Plan Avanzado",
    monthlyPrice: "S/ 450",
    annualPrice: "S/ 420",
    noteMonthly: "+ IGV | Subplanes desde S/ 400 hasta S/ 450",
    noteAnnual: "+ IGV | Subplanes anuales desde S/ 350 hasta S/ 420",
    accent: "orange",
    subplans: [
      {
        name: "Persona o Empresa",
        monthlyPrice: "S/ 450",
        annualPrice: "S/ 5100",
        noteMonthly: "+ IGV | Ingresos aproximados de S/ 30,000",
        noteAnnual: "+ IGV | Ingresos aproximados de S/ 30,000",
      },
    ],
    features: [
      "Registro compras y ventas",
      "Cálculo de Renta e IGV",
      "Elaboración de la Planilla",
      "PDT 621, Plame y AFPNet",
      "Asesoría Integral",
    ],
  },
  {
    name: "Otros Planes",
    monthlyPrice: "S/ ----",
    annualPrice: "S/ ----",
    noteMonthly: "Sujeto a evaluación",
    noteAnnual: "Sujeto a evaluación",
    accent: "mixed",
    features: [
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
    priceBox: "bg-blue-100/80",
    priceText: "text-brand-primary",
    button: "bg-brand-primary text-white hover:bg-brand-primary/90",
  },
  orange: {
    card: "border-brand-secondary/70 shadow-[0_16px_40px_-26px_rgba(249,115,22,0.5)]",
    label: "bg-brand-secondary text-white",
    priceBox: "bg-orange-100/80",
    priceText: "text-brand-secondary",
    button: "bg-brand-secondary text-white hover:bg-brand-secondary/90",
  },
  mixed: {
    card: "border-fuchsia-500/70 shadow-[0_16px_40px_-26px_rgba(217,70,239,0.4)]",
    label: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white",
    priceBox: "bg-fuchsia-100/70 border border-fuchsia-300/50",
    priceText: "text-brand-primary",
    button:
      "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95",
  },
} as const;

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <section
      id="planes"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.05] text-brand-primary">
            Nuestros{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
              Planes
            </span>
          </h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Estructura de servicios pensada para acompañar desde operaciones
            básicas hasta necesidades empresariales más complejas.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-white/70 border border-white/70 p-1 shadow-lg">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                billing === "monthly"
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md"
                  : "text-slate-700 hover:bg-white/70"
              }`}
            >
              Pago mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                billing === "annual"
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md"
                  : "text-slate-700 hover:bg-white/70"
              }`}
            >
              Pago anual
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const accent = accentClasses[plan.accent];
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const note =
              billing === "monthly" ? plan.noteMonthly : plan.noteAnnual;

            return (
              <article
                key={plan.name}
                className={`relative rounded-[2rem] border bg-white/78 backdrop-blur-sm p-5 pt-0 flex flex-col ${accent.card}`}
              >
                <div className="flex justify-center">
                  <div
                    className={`-mt-px px-6 py-3 rounded-b-2xl text-sm font-extrabold uppercase tracking-wide ${accent.label}`}
                  >
                    {plan.name}
                  </div>
                </div>

                {plan.subplans ? (
                  <div className="mt-10 grid gap-4">
                    {plan.subplans.map((subplan) => {
                      const subPrice =
                        billing === "monthly"
                          ? subplan.monthlyPrice
                          : subplan.annualPrice;
                      const subNote =
                        billing === "monthly"
                          ? subplan.noteMonthly
                          : subplan.noteAnnual;

                      return (
                        <div
                          key={subplan.name}
                          className={`rounded-3xl p-5 text-center ${accent.priceBox}`}
                        >
                          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            {subplan.name}
                          </div>
                          <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            A partir de
                          </div>
                          <div
                            className={`mt-2 text-3xl font-extrabold font-heading ${accent.priceText}`}
                          >
                            {subPrice}
                          </div>
                          <p className="mt-2 text-sm text-slate-700">
                            {subNote}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    className={`mt-10 rounded-3xl p-7 text-center ${accent.priceBox}`}
                  >
                    <div
                      className={`text-4xl font-extrabold font-heading ${accent.priceText}`}
                    >
                      {price}
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{note}</p>
                  </div>
                )}

                <ul className="mt-9 space-y-4 text-center text-slate-700 text-sm font-medium leading-relaxed">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

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

