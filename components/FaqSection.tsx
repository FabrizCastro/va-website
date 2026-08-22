import { HelpCircle } from "lucide-react";

export const faqItems = [
  {
    question: "¿Qué incluye el servicio contable mensual?",
    answer:
      "Registro y revisión de operaciones, conciliaciones, libros contables, determinación de impuestos, declaraciones y seguimiento mensual de pendientes. El alcance final se define según el régimen y el volumen de cada empresa.",
  },
  {
    question: "¿Atienden empresas fuera de Lima?",
    answer:
      "Sí. Atendemos empresas de todo el Perú mediante procesos digitales, intercambio seguro de documentación y reuniones periódicas de seguimiento.",
  },
  {
    question: "¿Pueden revisar la situación tributaria de mi empresa?",
    answer:
      "Sí. Revisamos declaraciones, libros electrónicos, comprobantes y obligaciones ante SUNAT para identificar pendientes y riesgos que requieran atención.",
  },
  {
    question: "¿Trabajan con emprendedores y empresas constituidas?",
    answer:
      "Sí. El servicio se adapta a personas con negocio, microempresas, pymes y empresas con operaciones de mayor complejidad.",
  },
];

export default function FaqSection() {
  return (
    <section className="accounting-section bg-[#f7f5ef] py-20" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-reveal="left">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2 id="faq-title" className="mt-4 font-heading text-3xl font-bold leading-tight text-brand-primary sm:text-4xl">
            Información clara antes de confiar tu contabilidad.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Resolvemos las dudas más habituales sobre nuestro servicio contable para empresas en Lima y todo el Perú.
          </p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200" data-reveal="right">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center gap-4 font-bold text-slate-900">
                <HelpCircle className="h-5 w-5 shrink-0 text-[#a47b32]" />
                <span>{item.question}</span>
                <span className="ml-auto text-xl font-normal text-slate-400 group-open:rotate-45">+</span>
              </summary>
              <p className="ml-9 mt-3 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
