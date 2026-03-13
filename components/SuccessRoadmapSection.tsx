"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarDays,
  FileStack,
  Handshake,
  Laptop,
  Link2,
  ScanSearch,
} from "lucide-react";

type RoadmapItem = {
  step: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "orange";
  left: string;
  top: string;
  detailLeft: string;
  detailOffset: string;
  detailSide: "top" | "bottom";
  detailAnchor: "start" | "center" | "end";
};

const roadmap: RoadmapItem[] = [
  {
    step: "01",
    title: "Diagnóstico inicial",
    summary: "Del papel al mapa real de problemas.",
    description:
      "Margales Company operaba con documentos físicos, cierres lentos y baja trazabilidad sobre compras, ventas e impuestos.",
    icon: ScanSearch,
    tone: "blue",
    left: "6%",
    top: "59%",
    detailLeft: "8%",
    detailOffset: "26px",
    detailSide: "bottom",
    detailAnchor: "start",
  },
  {
    step: "02",
    title: "Orden documental",
    summary: "Archivo crítico migrado y clasificado.",
    description:
      "Levantamos información histórica y ordenamos comprobantes en una base digital más usable para el equipo.",
    icon: FileStack,
    tone: "orange",
    left: "22%",
    top: "28%",
    detailLeft: "22%",
    detailOffset: "18px",
    detailSide: "top",
    detailAnchor: "center",
  },
  {
    step: "03",
    title: "Asesorías y reuniones",
    summary: "Cadencia y responsables claros.",
    description:
      "Definimos reuniones, responsables internos y una nueva rutina operativa para evitar retrasos y retrabajos.",
    icon: Handshake,
    tone: "blue",
    left: "38%",
    top: "62%",
    detailLeft: "38%",
    detailOffset: "26px",
    detailSide: "bottom",
    detailAnchor: "center",
  },
  {
    step: "04",
    title: "Cambio de hábitos",
    summary: "Nueva disciplina para el flujo diario.",
    description:
      "El equipo adoptó hábitos más consistentes para envío de información, validación documental y seguimiento tributario.",
    icon: CalendarDays,
    tone: "orange",
    left: "54%",
    top: "24%",
    detailLeft: "54%",
    detailOffset: "18px",
    detailSide: "top",
    detailAnchor: "center",
  },
  {
    step: "05",
    title: "Integración con SUNAT",
    summary: "Más control y menos fricción operativa.",
    description:
      "Conectamos comprobantes, validaciones y obligaciones para trabajar con datos más actualizados y una operación más fluida.",
    icon: Link2,
    tone: "blue",
    left: "70%",
    top: "60%",
    detailLeft: "70%",
    detailOffset: "26px",
    detailSide: "bottom",
    detailAnchor: "center",
  },
  {
    step: "06",
    title: "Operación 100% digital",
    summary: "Reportes, alertas y control continuo.",
    description:
      "Margales Company pasó a una operación digital con reuniones de control, reportes y gestión financiera mucho más ágil.",
    icon: Laptop,
    tone: "orange",
    left: "86%",
    top: "27%",
    detailLeft: "92%",
    detailOffset: "18px",
    detailSide: "top",
    detailAnchor: "end",
  },
];

const outcomes = [
  "Menor dependencia del papel y de revisiones manuales.",
  "Mejor cumplimiento tributario con soporte operativo constante.",
  "Información más rápida para decidir con más seguridad.",
];

function TimelineMarker({
  step,
  tone,
  active,
}: {
  step: string;
  tone: "blue" | "orange";
  active: boolean;
}) {
  const baseClasses =
    tone === "orange"
      ? "border-orange-300 bg-brand-secondary text-white"
      : "border-blue-100 bg-blue-500 text-white";

  return (
    <div className="relative">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border-[5px] text-lg font-extrabold font-heading transition-transform duration-200 ${
          active ? "scale-110" : "scale-100"
        } ${baseClasses}`}
      >
        {step}
      </div>
      <div
        className={`absolute left-1/2 top-[calc(100%-6px)] h-4 w-4 -translate-x-1/2 rotate-45 border-r-[5px] border-b-[5px] ${
          tone === "orange"
            ? "border-orange-300 bg-brand-secondary"
            : "border-blue-100 bg-blue-500"
        }`}
      />
    </div>
  );
}

function getDetailAnchorClass(anchor: RoadmapItem["detailAnchor"]) {
  if (anchor === "start") return "left-0";
  if (anchor === "end") return "right-0";
  return "left-1/2 -translate-x-1/2";
}

export default function SuccessRoadmapSection() {
  const [activeStep, setActiveStep] = useState(roadmap[0].step);
  const activeItem =
    roadmap.find((item) => item.step === activeStep) ?? roadmap[0];

  return (
    <section className="relative overflow-hidden bg-brand-primary py-24">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/brand/backgroundfinanzas.jpg')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(11,35,86,0.78),rgba(11,35,86,0.72)),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(249,115,22,0.14),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-orange-200/90">
            Caso de éxito
          </p>
          <h2 className="mt-4 text-4xl font-extrabold font-heading leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Timeline de transformación de{" "}
            <span className="bg-gradient-to-r from-blue-100 to-orange-300 bg-clip-text text-transparent">
              Margales Company
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/85 sm:text-lg">
            Del papel a una operación digital con asesoría constante, nuevos
            hábitos de trabajo e integración con SUNAT.
          </p>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="grid gap-3 sm:grid-cols-2">
            {roadmap.map((item) => {
              const Icon = item.icon;
              const isActive = item.step === activeStep;
              const chipClasses =
                item.tone === "orange"
                  ? "border-brand-secondary/35 bg-brand-secondary/12 text-orange-200"
                  : "border-blue-300/25 bg-blue-400/10 text-blue-100";

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`rounded-[1.5rem] border p-4 text-left transition-all ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div
                    className={`inline-flex rounded-full border px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] ${chipClasses}`}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    Etapa {item.step}
                  </div>
                  <p className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-blue-100/75">
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-200/90">
              Detalle de la etapa
            </p>
            <h3 className="mt-3 text-2xl font-extrabold font-heading text-white">
              {activeItem.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-blue-50/85">
              {activeItem.description}
            </p>
          </div>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="relative h-[620px] overflow-visible rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 pt-10">
            <svg
              viewBox="0 0 1200 280"
              className="absolute left-0 top-[126px] h-[280px] w-full"
              aria-hidden="true"
            >
              <path
                d="M20 135 C 110 135, 120 220, 210 220 S 300 50, 390 50 S 480 220, 570 220 S 660 50, 750 50 S 840 220, 930 220 S 1020 50, 1110 50 S 1160 135, 1180 135"
                fill="none"
                stroke="#020617"
                strokeWidth="58"
                strokeLinecap="round"
              />
              <path
                d="M20 135 C 110 135, 120 220, 210 220 S 300 50, 390 50 S 480 220, 570 220 S 660 50, 750 50 S 840 220, 930 220 S 1020 50, 1110 50 S 1160 135, 1180 135"
                fill="none"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="12 18"
              />
            </svg>

            {roadmap.map((item) => {
              const Icon = item.icon;
              const isActive = item.step === activeStep;
              const isTop = item.detailSide === "top";
              const chipClasses =
                item.tone === "orange"
                  ? "border-brand-secondary/35 bg-brand-secondary/12 text-orange-200"
                  : "border-blue-300/25 bg-blue-400/10 text-blue-100";

              return (
                <button
                  key={item.step}
                  type="button"
                  onMouseEnter={() => setActiveStep(item.step)}
                  onFocus={() => setActiveStep(item.step)}
                  onClick={() => setActiveStep(item.step)}
                  className="absolute z-10 -translate-x-1/2 text-left"
                  style={{ left: item.left, top: item.top }}
                >
                  <div
                    className={`flex flex-col items-center ${
                      isTop ? "gap-5" : "flex-col-reverse gap-5"
                    }`}
                  >
                    <div className="w-[160px] text-center">
                      <div
                        className={`inline-flex rounded-full border px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] ${chipClasses}`}
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        Etapa {item.step}
                      </div>
                      <p className="mt-3 text-lg font-bold text-white">
                        {item.title}
                      </p>
                    </div>

                    <TimelineMarker
                      step={item.step}
                      tone={item.tone}
                      active={isActive}
                    />
                  </div>
                </button>
              );
            })}

            <div
              className={`absolute z-20 w-[290px] ${getDetailAnchorClass(
                activeItem.detailAnchor,
              )}`}
              style={{
                left:
                  activeItem.detailAnchor === "center"
                    ? activeItem.detailLeft
                    : undefined,
                top:
                  activeItem.detailSide === "top"
                    ? activeItem.detailOffset
                    : undefined,
                bottom:
                  activeItem.detailSide === "bottom"
                    ? activeItem.detailOffset
                    : undefined,
              }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.1] p-5 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.5)] backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200/90">
                  Detalle de la etapa
                </p>
                <h3 className="mt-3 text-2xl font-extrabold font-heading text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-50/85">
                  {activeItem.description}
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100/70">
                    Resumen
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-50/80">
                    {activeItem.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-200/90">
              Resultado del cambio
            </p>
            <h3 className="mt-4 text-2xl font-extrabold font-heading text-white sm:text-3xl">
              De una operación reactiva a una gestión más ordenada, medible y
              digital.
            </h3>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="space-y-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                  <p className="text-sm leading-7 text-blue-50/85">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
