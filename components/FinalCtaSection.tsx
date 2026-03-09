export default function FinalCtaSection() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <div className="glass-card p-12 lg:p-20 rounded-[3rem] border border-brand-primary/20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>

          <h2 className="text-4xl lg:text-6xl font-extrabold font-heading mb-8 text-white">
            ¿Listo para dar el siguiente paso <span className="text-brand-primary">financiero</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Únete a las empresas que ya están automatizando su éxito. Agenda una consultoría
            estratégica con Henry Valladares.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <input
              type="email"
              placeholder="Correo corporativo"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary transition-colors text-white"
            />
            <button className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20">
              Solicitar Diagnóstico Gratuito
            </button>
            <p className="text-[10px] text-slate-500 mt-4">
              Al enviar aceptas nuestras políticas de privacidad y tratamiento de datos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
