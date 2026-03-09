export default function FinalCtaSection() {
  return (
    <section
      id="contacto"
      className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(251,146,60,0.20),transparent_45%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="glass-card p-8 lg:p-12 rounded-[2rem] border border-brand-primary/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-400/25 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-orange-400/25 rounded-full blur-3xl"></div>

          <h2 className="text-3xl lg:text-4xl font-extrabold font-heading mb-5 text-white">
            ¿Listo para dar el siguiente paso{" "}
            <span className="text-brand-primary">financiero</span>?
          </h2>
          <p className="text-base lg:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya están automatizando su éxito. Agenda una
            consultoría estratégica con Henry Valladares.
          </p>

          <form className="max-w-sm mx-auto space-y-3">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <input
              type="email"
              placeholder="Correo corporativo"
              className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <button className="w-full py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20">
              Solicitar Diagnóstico
            </button>
            <p className="text-[10px] text-slate-500 mt-4">
              Al enviar aceptas nuestras políticas de privacidad y tratamiento
              de datos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
