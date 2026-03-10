export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.1] text-brand-primary mb-4">
              Servicios{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                Especializados
              </span>
            </h2>
            <p className="text-slate-400">
              Cubrimos todo el espectro financiero de tu organización con
              precisión milimétrica.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="service-card glass-card p-6 rounded-3xl col-span-1 md:col-span-2 group !bg-[rgba(11,35,86,0.14)] hover:!bg-[rgba(11,35,86,0.18)] transition-all duration-500 !border !border-[rgba(37,99,235,0.75)] shadow-[inset_0_0_0_1px_rgba(59,130,246,0.35),0_10px_30px_-18px_rgba(37,99,235,0.65)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8"
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
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Contabilidad Integral
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 transition-colors duration-300">
              Gestión Contable Dinámica
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
              <ul className="space-y-2">
                <li>• Libros Contables</li>
                <li>• Conciliación Bancaria</li>
                <li>• Control de Préstamos</li>
              </ul>
              <ul className="space-y-2">
                <li>• Reconocimiento de Ingresos</li>
                <li>• Análisis de Cuentas</li>
                <li>• Formatos Contables</li>
              </ul>
            </div>
          </div>

          <div className="service-card glass-card p-6 rounded-3xl group !bg-[rgba(249,115,22,0.2)] hover:!bg-[rgba(249,115,22,0.26)] transition-all duration-500 !border !border-[rgba(249,115,22,0.78)] shadow-[inset_0_0_0_1px_rgba(251,146,60,0.34),0_10px_30px_-18px_rgba(249,115,22,0.6)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8"
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
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                SUNAT & TAX
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
              Estrategia Tributaria
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Liquidación de Impuestos</li>
              <li>• Presentación de PDTs</li>
              <li>• Libros Electrónicos SIRE</li>
            </ul>
          </div>

          <div className="service-card glass-card p-6 rounded-3xl group !bg-[rgba(16,185,129,0.22)] hover:!bg-[rgba(16,185,129,0.3)] transition-all duration-500 !border !border-[rgba(16,185,129,0.8)] shadow-[inset_0_0_0_1px_rgba(52,211,153,0.34),0_10px_30px_-18px_rgba(16,185,129,0.6)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-8 h-8"
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
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                HR & Payroll
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
              Gestión Laboral
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Planilla de Sueldos PLAME</li>
              <li>• Boletas & Gratificaciones</li>
              <li>• CTS & Beneficios Sociales</li>
              <li>• Trámites AFP / ONP</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="service-card glass-card p-6 rounded-3xl md:col-span-1 !bg-[rgba(249,115,22,0.2)] !border !border-[rgba(249,115,22,0.78)] shadow-[inset_0_0_0_1px_rgba(251,146,60,0.34),0_10px_30px_-18px_rgba(249,115,22,0.6)] hover:!bg-[rgba(249,115,22,0.26)] hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-500"
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
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Estados Financieros, Balances, Flujo de Efectivo y Reportes
              Gerenciales con visualización moderna.
            </p>
            <button className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:underline transition-transform duration-300 hover:translate-x-1">
              Ver ejemplo de reporte
              <svg
                className="w-3 h-3"
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
          </div>
          <div className="service-card glass-card p-6 rounded-3xl md:col-span-2 flex items-center justify-between overflow-hidden relative group !border !border-[rgba(37,99,235,0.75)] !bg-[rgba(11,35,86,0.14)] shadow-[inset_0_0_0_1px_rgba(59,130,246,0.35),0_10px_30px_-18px_rgba(37,99,235,0.65)] hover:!bg-[rgba(11,35,86,0.18)] hover:-translate-y-1 transition-all duration-500">
            <div className="relative z-10 max-w-sm">
              <h3 className="text-xl font-bold mb-2">
                Auditoría & Control Interno
              </h3>
              <p className="text-sm text-slate-600">
                Evaluamos la transparencia y salud de tus procesos para asegurar
                el crecimiento sostenible.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-primary/15 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
            <svg
              className="w-32 h-32 text-blue-700/20 relative z-0"
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
        </div>
      </div>
    </section>
  );
}
