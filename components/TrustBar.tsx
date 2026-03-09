import {
  Activity,
  Landmark,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function TrustBar() {
  return (
    <div className="border-y border-white/5 bg-brand-dark/50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Asesoría
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <ShieldCheck className="text-blue-500" /> Contable
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Cumplimiento
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-orange-400">
              <Landmark className="text-blue-500" />
              Tributario
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Gestión
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Users className="text-blue-500" /> Laboral
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Estrategia
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Activity className="text-blue-500" /> Financiera
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Procesos
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-brand-primary">
              <RefreshCcw className="text-blue-500" /> Outsourcing
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Automatización
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-brand-primary">
              <Sparkles className="text-blue-500" /> IA AUTOMATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
