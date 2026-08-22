import {
  BadgeCheck,
  Building2,
  FileCheck2,
  Landmark,
  WalletCards,
} from "lucide-react";

const movements = [
  { label: "Ventas", value: "Conciliado", Icon: WalletCards },
  { label: "Bancos", value: "Validado", Icon: Landmark },
  { label: "SUNAT", value: "Sin alertas", Icon: FileCheck2 },
];

export default function FinancialControlVisual() {
  return (
    <div className="finance-visual relative mx-auto max-w-[34rem]" aria-label="Flujo visual del control contable mensual">
      <div className="finance-orbit finance-orbit-one" aria-hidden="true" />
      <div className="finance-orbit finance-orbit-two" aria-hidden="true" />
      <div className="relative overflow-hidden border border-white/15 bg-[#071a3f]/85 p-5 shadow-[0_40px_100px_-40px_rgba(0,0,0,.75)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#d9c49a]">Control del periodo</p>
            <p className="mt-2 font-heading text-xl font-bold">Visión financiera consolidada</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9c49a]">
            <Building2 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-52 overflow-hidden border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100/55">Evolución del cierre</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Actualizado</span>
            </div>
            <svg viewBox="0 0 360 150" className="mt-5 h-36 w-full overflow-visible" role="img" aria-label="Progreso creciente del cierre mensual">
              <defs>
                <linearGradient id="area-premium" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d9c49a" stopOpacity=".34" />
                  <stop offset="1" stopColor="#d9c49a" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map((y) => <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />)}
              <path d="M0 128 C45 126 55 103 92 105 S148 76 180 84 S230 48 266 58 S315 24 360 18 L360 150 L0 150Z" fill="url(#area-premium)" />
              <path className="flow-chart-line" d="M0 128 C45 126 55 103 92 105 S148 76 180 84 S230 48 266 58 S315 24 360 18" fill="none" stroke="#d9c49a" strokeWidth="3" strokeLinecap="round" />
              <circle className="flow-chart-pulse" cx="360" cy="18" r="5" fill="#d9c49a" />
            </svg>
          </div>

          <div className="grid gap-2">
            {movements.map(({ label, value, Icon }, index) => (
              <div key={label} className="flow-status-card flex items-center gap-3 border border-white/10 bg-white/[0.05] p-3" style={{ animationDelay: `${index * 180}ms` }}>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/[0.07] text-[#d9c49a]"><Icon className="h-4 w-4" /></div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-blue-100/50">{label}</p>
                  <p className="mt-1 truncate text-xs font-bold text-white">{value}</p>
                </div>
                <BadgeCheck className="ml-auto h-4 w-4 shrink-0 text-emerald-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/55">
          <span>Documentos</span><span className="h-px flex-1 bg-white/10 mx-3" /><span>Validación</span><span className="h-px flex-1 bg-white/10 mx-3" /><span className="text-[#d9c49a]">Decisión</span>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-5 hidden border border-white/15 bg-white/95 p-4 text-brand-primary shadow-2xl sm:block">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Próximo hito</p>
        <p className="mt-1 text-sm font-extrabold">Reporte gerencial</p>
      </div>
    </div>
  );
}
