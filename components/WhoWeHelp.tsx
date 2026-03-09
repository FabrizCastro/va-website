import { Briefcase, Building2, User } from "lucide-react";

export default function WhoWeHelp() {
  const cards = [
    { title: "Emprendedores", icon: User, tone: "blue" as const },
    { title: "Personas Naturales", icon: Briefcase, tone: "blue" as const },
    { title: "Microempresas", icon: Building2, tone: "blue" as const },
    { title: "Pymes", icon: Briefcase, tone: "orange" as const, popular: true },
    {
      title: "Empresas Medianas",
      icon: Building2,
      tone: "blue" as const,
      popular: true,
    },
    { title: "Grandes Empresas", icon: Building2, tone: "blue" as const },
  ];

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Soluciones a tu medida</h2>
          <p className="text-slate-400">
            Atendemos todos los niveles de madurez empresarial con un enfoque
            personalizado.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="who-we-help-track flex w-max gap-6 py-2">
            {[...cards, ...cards].map((card, index) => {
              const Icon = card.icon;
              const isOrange = card.tone === "orange";
              return (
                <div
                  key={`${card.title}-${index}`}
                  aria-hidden={index >= cards.length}
                  className={`glass-card min-w-[220px] sm:min-w-[250px] p-8 rounded-3xl transition-all border relative overflow-hidden ${
                    isOrange
                      ? "border-orange-500/30 bg-orange-500/5"
                      : "border-white/5 hover:border-blue-500/50"
                  }`}
                >
                  {card.popular && (
                    <div className="absolute top-0 right-0 p-4 bg-orange-500 text-[10px] font-bold text-white rounded-bl-xl uppercase">
                      Popular
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      isOrange ? "bg-orange-500/20" : "bg-blue-500/20"
                    }`}
                  >
                    <Icon className={isOrange ? "text-orange-400" : "text-blue-400"} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 whitespace-nowrap">{card.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
