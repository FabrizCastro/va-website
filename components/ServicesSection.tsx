export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-4xl font-extrabold font-heading leading-[1.1] text-brand-primary sm:text-5xl lg:text-6xl">
              Servicios{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Especializados
              </span>
            </h2>
            <p className="text-slate-700">
              Cubrimos todo el espectro financiero de tu organización con
              precisión milimétrica.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(37,99,235,0.75)] bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-brand-primary/85 via-brand-primary/75 to-brand-primary/65" />
            <div className="relative z-10 inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-primary transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
              Contabilidad Integral
            </div>
            <div className="relative z-10 mt-6 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/12 text-brand-primary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  Gestión Contable Dinámica
                </h3>
                <div className="mt-5 grid gap-4 text-sm text-slate-700 transition-colors duration-500 group-hover:text-blue-50 sm:grid-cols-2">
                  <ul className="space-y-3">
                    <li>&bull; Libros Contables</li>
                    <li>&bull; Conciliación Bancaria</li>
                    <li>&bull; Control de Préstamos</li>
                  </ul>
                  <ul className="space-y-3">
                    <li>&bull; Reconocimiento de Ingresos</li>
                    <li>&bull; Análisis de Cuentas</li>
                    <li>&bull; Formatos Contables</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(249,115,22,0.78)] bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-brand-secondary/85 via-brand-secondary/70 to-brand-primary/70" />
            <div className="relative z-10 inline-flex rounded-full border border-brand-secondary/20 bg-brand-secondary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-secondary transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
              Sunat & Tax
            </div>
            <div className="relative z-10 mt-6 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-secondary/12 text-brand-secondary transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  Estrategia Tributaria
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 transition-colors duration-500 group-hover:text-orange-50">
                  <li>&bull; Liquidación de Impuestos</li>
                  <li>&bull; Presentación de PDTs</li>
                  <li>&bull; Libros Electrónicos SIRE</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(16,185,129,0.8)] bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-emerald-700/80 via-emerald-600/70 to-brand-primary/70" />
            <div className="relative z-10 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-500 transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
              Hr & Payroll
            </div>
            <div className="relative z-10 mt-6 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-500 transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  Gestión Laboral
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 transition-colors duration-500 group-hover:text-emerald-50">
                  <li>&bull; Planilla de Sueldos PLAME</li>
                  <li>&bull; Boletas y Gratificaciones</li>
                  <li>&bull; CTS y Beneficios Sociales</li>
                  <li>&bull; Trámites AFP y ONP</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(249,115,22,0.78)] bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-brand-secondary/85 via-brand-primary/70 to-brand-secondary/60" />
            <div className="relative z-10 inline-flex rounded-full border border-brand-secondary/20 bg-brand-secondary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-secondary transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
              Finanzas
            </div>
            <h3 className="relative z-10 mt-6 flex items-center gap-2 text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
              <svg
                className="h-5 w-5 text-orange-500 transition-colors duration-500 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1zm6 4a1 1 0 011 1v12a1 1 0 11-2 0V8a1 1 0 011-1zM5 8a1 1 0 011 1v11a1 1 0 11-2 0V9a1 1 0 011-1z"
                />
              </svg>
              Analítica Financiera
            </h3>
            <p className="relative z-10 mt-4 text-sm leading-7 text-slate-700 transition-colors duration-500 group-hover:text-orange-50">
              Estados financieros, balances, flujo de efectivo y reportes
              gerenciales con visualización moderna.
            </p>
            <button className="relative z-10 mt-6 flex items-center gap-1 text-xs font-bold text-orange-600 transition-all duration-300 hover:translate-x-1 hover:underline group-hover:text-white">
              Ver ejemplo de reporte
              <svg
                className="h-3 w-3"
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
            </button>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-[rgba(37,99,235,0.75)] bg-white/80 p-7 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-brand-primary/85 via-brand-primary/75 to-slate-900/70" />
            <div className="relative z-10 inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-primary transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
              Control Interno
            </div>
            <div className="relative z-10 mt-6 flex items-center justify-between gap-6">
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  Auditoría & Control Interno
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700 transition-colors duration-500 group-hover:text-blue-50">
                  Evaluamos la transparencia y salud de tus procesos para
                  asegurar el crecimiento sostenible.
                </p>
              </div>
              <svg
                className="h-24 w-24 shrink-0 text-blue-700/20 transition-colors duration-500 group-hover:text-white/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m-7 9h8a2 2 0 002-2V7l-6-4-6 4v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-brand-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-0" />
          </article>
        </div>
      </div>
    </section>
  );
}
