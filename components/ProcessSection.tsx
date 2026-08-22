import {
  BadgeCheck,
  BarChart3,
  FileInput,
  FileSearch,
  FolderCheck,
  MessageSquareText,
  ScanSearch,
} from "lucide-react";

const stages = [
  { number: "01", title: "Recibimos y ordenamos", description: "Centralizamos compras, ventas, bancos, planillas y documentos de sustento.", Icon: FileInput, detail: "Información centralizada" },
  { number: "02", title: "Conciliamos", description: "Contrastamos movimientos, comprobantes y saldos para encontrar diferencias.", Icon: ScanSearch, detail: "Cruces y trazabilidad" },
  { number: "03", title: "Revisamos riesgos", description: "Validamos obligaciones, libros electrónicos y puntos críticos ante SUNAT.", Icon: FileSearch, detail: "Revisión profesional" },
  { number: "04", title: "Cerramos el periodo", description: "Preparamos declaraciones y estados con respaldo documental verificable.", Icon: FolderCheck, detail: "Cierre sustentado" },
  { number: "05", title: "Traducimos en decisiones", description: "Presentamos indicadores, observaciones y próximos pasos en lenguaje claro.", Icon: BarChart3, detail: "Lectura gerencial" },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[#071a3f] py-24 text-white">
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#b88a38]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d9c49a]">Arquitectura de servicio</p>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Del documento a la decisión.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-blue-50/70 lg:justify-self-end lg:text-lg">
            Diseñamos un flujo mensual visible y repetible. Cada etapa deja evidencia, responsables y una salida concreta para que tu contabilidad no dependa de improvisaciones.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px bg-white/10 md:block">
            <span className="process-current absolute left-0 top-0 h-24 w-px bg-gradient-to-b from-transparent via-[#d9c49a] to-transparent" />
          </div>

          <div className="space-y-5 md:space-y-0">
            {stages.map(({ number, title, description, Icon, detail }, index) => (
              <article key={number} className="relative grid items-center gap-5 md:min-h-48 md:grid-cols-[1fr_5rem_1fr]" data-reveal={index % 2 === 0 ? "left" : "right"}>
                <div className={`group border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#d9c49a]/40 hover:bg-white/[0.08] ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d9c49a]/25 bg-[#d9c49a]/10 text-[#d9c49a] transition group-hover:bg-[#d9c49a] group-hover:text-[#071a3f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#d9c49a]">PASO {number}</span>
                        <span className="h-px w-8 bg-white/15" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-blue-100/45">{detail}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-2xl font-bold">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-blue-50/65">{description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9c49a]/40 bg-[#071a3f] text-xs font-bold text-[#d9c49a] md:flex">{number}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden border border-white/10 bg-white/[0.045] lg:grid-cols-[1.05fr_.95fr]" data-reveal>
          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3 text-[#d9c49a]">
              <MessageSquareText className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Entrega mensual</span>
            </div>
            <h3 className="mt-5 max-w-xl font-heading text-3xl font-bold leading-tight sm:text-4xl">No entregamos solo números. Entregamos contexto.</h3>
            <p className="mt-5 max-w-xl leading-7 text-blue-50/65">El cierre se presenta con pendientes, riesgos detectados, indicadores relevantes y acciones recomendadas para el siguiente periodo.</p>
          </div>
          <div className="grid border-t border-white/10 sm:grid-cols-3 lg:border-l lg:border-t-0">
            {["Estado del periodo", "Alertas prioritarias", "Próximas acciones"].map((item, index) => (
              <div key={item} className="flex min-h-40 flex-col justify-between border-white/10 p-6 sm:border-l first:sm:border-l-0">
                <BadgeCheck className="h-5 w-5 text-emerald-300" />
                <div>
                  <p className="font-heading text-3xl font-bold text-[#d9c49a]">0{index + 1}</p>
                  <p className="mt-2 text-sm font-bold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
