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
    <div className="border-y border-white/10 bg-brand-primary py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-white transition-all">
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Asesoría
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <ShieldCheck className="text-orange-300" /> Contable
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Cumplimiento
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-white">
              <Landmark className="text-orange-300" />
              Tributario
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Gestión
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Users className="text-orange-300" /> Laboral
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Estrategia
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Activity className="text-orange-300" /> Financiera
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Procesos
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-white">
              <RefreshCcw className="text-orange-300" /> Outsourcing
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-2">
              Automatización
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold text-white">
              <Sparkles className="text-orange-300" /> IA AUTOMATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

