import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Store,
  UserRound,
} from "lucide-react";

const scope = [
  {
    stage: "Inicio",
    title: "Emprendedores",
    description: "Formalización y primeras obligaciones.",
    Icon: UserRound,
    focus: false,
  },
  {
    stage: "Foco principal",
    title: "Microempresas",
    description: "Control mensual, impuestos y planillas.",
    Icon: Store,
    focus: true,
  },
  {
    stage: "Foco principal",
    title: "Pequeñas empresas",
    description: "Contabilidad integral y lectura financiera.",
    Icon: BriefcaseBusiness,
    focus: true,
  },
  {
    stage: "Crecimiento",
    title: "Empresas medianas",
    description: "Procesos, control interno y reportes.",
    Icon: Building2,
    focus: false,
  },
];

export default function WhoWeHelp() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071a3f] py-24 text-white">
      <Image
        src="/assets/brand/alcance-mypes-peru.webp"
        alt="Micro y pequeñas empresas peruanas de comercio, producción y servicios"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,22,49,.98)_0%,rgba(7,26,63,.86)_38%,rgba(7,26,63,.28)_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-15" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div data-reveal="left">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#d9c49a]">Nuestro alcance</p>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.07] sm:text-5xl lg:text-6xl">
              Especialistas en <span className="italic text-[#d9c49a]">MYPEs</span> que quieren crecer con orden.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/70">
              Nuestro trabajo se concentra principalmente en micro y pequeñas empresas peruanas. Entendemos su ritmo, sus recursos y los desafíos que aparecen al formalizarse, contratar y aumentar operaciones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Comercio", "Servicios", "Producción", "Profesionales"].map((sector) => (
                <span key={sector} className="border border-white/15 bg-white/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-50/75">{sector}</span>
              ))}
            </div>
          </div>

          <div className="relative" data-reveal="right">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/55">Etapa de la empresa</p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d9c49a]"><span className="h-2 w-2 rounded-full bg-[#d9c49a] shadow-[0_0_12px_rgba(217,196,154,.8)]" /> Mayor experiencia</div>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
              {scope.map(({ stage, title, description, Icon, focus }, index) => (
                <article key={title} className={`scope-card group relative min-h-52 p-6 backdrop-blur-md transition duration-500 hover:bg-white/[0.14] ${focus ? "bg-[#102d65]/90" : "bg-[#071a3f]/78"}`}>
                  {focus ? <div className="absolute inset-x-0 top-0 h-0.5 bg-[#d9c49a]" /> : null}
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center border ${focus ? "border-[#d9c49a]/35 bg-[#d9c49a]/15 text-[#d9c49a]" : "border-white/15 bg-white/[0.06] text-blue-100"}`}><Icon className="h-5 w-5" /></div>
                    <span className="font-heading text-2xl font-bold text-white/15">0{index + 1}</span>
                  </div>
                  <p className={`mt-6 text-[9px] font-extrabold uppercase tracking-[0.2em] ${focus ? "text-[#d9c49a]" : "text-blue-100/45"}`}>{stage}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-blue-50/60">{description}</p>
                  {focus ? <CheckCircle2 className="absolute bottom-5 right-5 h-4 w-4 text-emerald-300" /> : <ArrowUpRight className="absolute bottom-5 right-5 h-4 w-4 text-white/20 transition group-hover:text-white/60" />}
                </article>
              ))}
            </div>

            <div className="mt-4 border-l-2 border-[#d9c49a] bg-[#071a3f]/85 px-5 py-4 backdrop-blur-md">
              <p className="text-sm font-bold">MYPE no significa servicio básico.</p>
              <p className="mt-1 text-xs leading-6 text-blue-50/60">Significa una asesoría ajustada al volumen, régimen tributario y momento real de la empresa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
