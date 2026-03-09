export default function ClientLogos() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-12">
          Empresas que confían en V&A PROFESIONALES
        </h2>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-40">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Logo_de_Interbank.png"
            alt="Interbank"
            className="h-8 md:h-12 hover:opacity-100 transition-opacity invert"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Logo_Scotiabank.svg/1200px-Logo_Scotiabank.svg.png"
            alt="Scotiabank"
            className="h-8 md:h-10 hover:opacity-100 transition-opacity invert"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Alicorp_logo.svg/1200px-Alicorp_logo.svg.png"
            alt="Alicorp"
            className="h-8 md:h-10 hover:opacity-100 transition-opacity invert"
          />
          <div className="text-2xl font-black text-slate-300">CONSTRUCTORA X</div>
          <div className="text-2xl font-black text-slate-300">RETAIL PERÚ</div>
        </div>
      </div>
    </section>
  );
}
