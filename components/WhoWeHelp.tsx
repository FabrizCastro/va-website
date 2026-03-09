import { Briefcase, Building2, User } from "lucide-react";

export default function WhoWeHelp() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Soluciones a tu medida</h2>
          <p className="text-slate-400">
            Atendemos todos los niveles de madurez empresarial con un enfoque personalizado.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all border border-white/5">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <User className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Emprendedores</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all border border-white/5">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pers. Naturales con Negocio</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all border border-white/5">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Microempresas</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl border-orange-500/30 bg-orange-500/5 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-orange-500 text-[10px] font-bold text-white rounded-bl-xl uppercase">
              Popular
            </div>
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pymes</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-orange-500 text-[10px] font-bold text-white rounded-bl-xl uppercase">
              Popular
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Empresas Medianas</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all border border-white/5">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Grandes Empresas</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
