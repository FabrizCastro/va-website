import {
  Activity,
  Landmark,
  RefreshCcw,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function TrustBar() {
  return (
    <section aria-label="Áreas de especialidad" className="overflow-hidden border-b border-slate-200 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 text-brand-primary md:grid-cols-5">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Asesoría
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <ShieldCheck className="text-brand-secondary" /> Contable
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Cumplimiento
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Landmark className="text-brand-secondary" />
              Tributario
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Gestión
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Users className="text-brand-secondary" /> Laboral
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Estrategia
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <Activity className="text-brand-secondary" /> Financiera
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Procesos
            </span>
            <span className="flex text-xl gap-2 items-center font-heading font-bold">
              <RefreshCcw className="text-brand-secondary" /> Outsourcing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

