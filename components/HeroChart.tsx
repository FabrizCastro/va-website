"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

export default function HeroChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(37, 99, 235, 0.4)");
    gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

    const secondaryGradient = ctx.createLinearGradient(0, 0, 0, 200);
    secondaryGradient.addColorStop(0, "rgba(249, 115, 22, 0.4)");
    secondaryGradient.addColorStop(1, "rgba(249, 115, 22, 0)");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
        datasets: [
          {
            label: "Eficiencia",
            data: [65, 68, 72, 74, 77, 81],
            borderColor: "#2563eb",
            borderWidth: 3,
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: "Carga operativa",
            data: [42, 44, 43, 41, 39, 37],
            borderColor: "#f97316",
            borderWidth: 2,
            backgroundColor: secondaryGradient,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { display: false },
          x: {
            grid: { display: false },
            ticks: { color: "#475569", font: { size: 10 } },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
