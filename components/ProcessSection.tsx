import {
  AlertCircle,
  Cpu,
  Database,
  FileText,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import HeroChart from "@/components/HeroChart";

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-20">
          Nuestra <span className="text-blue-500">Metodología</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-orange-500/50 -z-10"></div>

          <div className="glass-panel p-6 rounded-3xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500 mb-4">
              01
            </div>
            <h4 className="font-bold text-sm mb-2">Diagnóstico</h4>
            <p className="text-[10px] text-slate-500">
              Evaluamos tu situación actual y riesgos potenciales.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-500 mb-4">
              02
            </div>
            <h4 className="font-bold text-sm mb-2">Organización</h4>
            <p className="text-[10px] text-slate-500">
              Estructuramos tu data bajo estándares contables.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-500 mb-4">
              03
            </div>
            <h4 className="font-bold text-sm mb-2">Automatización</h4>
            <p className="text-[10px] text-slate-500">
              Implementamos workflows para agilizar procesos.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-500 mb-4">
              04
            </div>
            <h4 className="font-bold text-sm mb-2">Reporting</h4>
            <p className="text-[10px] text-slate-500">
              Control total con tableros de control gerencial.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center font-bold text-white mb-4">
              05
            </div>
            <h4 className="font-bold text-sm mb-2">Acompañamiento</h4>
            <p className="text-[10px] text-slate-500">
              Asesoría estratégica continua para crecer.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="glass-panel p-4 rounded-3xl border-white/20 shadow-2xl animate-float">
            <div className="flex items-center justify-between mb-6 px-2">
              <div>
                <h3 className="font-bold text-slate-100">Panel Gerencial Real-Time</h3>
                <p className="text-xs text-slate-500">V&A Profesionales Intelligence Dashboard</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="glass-panel p-4 rounded-2xl dashboard-card border-white/5 bg-slate-800/40">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Ingresos Mes</p>
                <h4 className="text-xl font-bold text-blue-400">S/ 142.5k</h4>
                <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12.4%
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl dashboard-card border-white/5 bg-slate-800/40">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Gastos Op.</p>
                <h4 className="text-xl font-bold text-orange-400">S/ 48.2k</h4>
                <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" /> -4.1%
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl dashboard-card border-white/5 bg-slate-800/40">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">IGV Estimado</p>
                <h4 className="text-xl font-bold">S/ 25.6k</h4>
                <div className="mt-2 text-[10px] text-slate-500">Cierre 28 Oct</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl dashboard-card border-white/5 bg-slate-800/40">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">EBITDA</p>
                <h4 className="text-xl font-bold text-white">S/ 68.7k</h4>
                <div className="mt-2 text-[10px] text-blue-400">Saludable</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 glass-panel p-4 rounded-2xl border-white/5 bg-slate-900/40 h-64">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold">Flujo de Caja vs Proyección</span>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> Real
                    </span>
                    <span className="flex items-center gap-1 text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span> Proyectado
                    </span>
                  </div>
                </div>
                <HeroChart />
              </div>

              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-2xl border-orange-500/20 bg-orange-500/5">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-bold text-orange-200">Alertas SUNAT</span>
                  </div>
                  <p className="text-[10px] text-orange-100/70">
                    Vencimiento de PDT 621 en 48 horas. Data enviada a revisión.
                  </p>
                </div>
                <div className="glass-panel p-4 rounded-2xl border-blue-500/20 bg-blue-500/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-blue-200">IA Insight</span>
                  </div>
                  <p className="text-[10px] text-blue-100/70">
                    Deducción de gastos optimizable en 15%. Ver reporte analítico.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 glass-panel rounded-2xl border-white/5 overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-white/5 text-slate-400 uppercase">
                  <tr>
                    <th className="px-4 py-2">Transacción</th>
                    <th className="px-4 py-2">Estado</th>
                    <th className="px-4 py-2">Monto</th>
                    <th className="px-4 py-2">Fecha</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <FileText className="w-3 h-3 text-blue-400" /> Factura F001-2983
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Conciliado
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium">S/ 12,400.00</td>
                    <td className="px-4 py-3 text-slate-500">22 Oct, 2023</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Database className="w-3 h-3 text-orange-400" /> Planilla Electrónica
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Enviado PLAME
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium">S/ 45,920.00</td>
                    <td className="px-4 py-3 text-slate-500">Hoy, 09:15 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
