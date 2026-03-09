import { Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center font-bold text-white text-xs">
                V&A
              </div>
              <span className="text-lg font-semibold wordmark">
                V&A <span className="text-brand-secondary">PROFESIONALES</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Liderando la transformación digital contable y financiera en el
              mercado peruano para el mundo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6">Servicios</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Outsourcing Contable
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Asesoría Tributaria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Gestión de Planillas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Auditoría Financiera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Dashboards IA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-6">Compañía</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Sobre V&A
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Henry Valladares
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Blog Financiero
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Recursos</h5>
            <ul className="text-slate-500 text-sm space-y-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cronograma SUNAT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Calculadora de IGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Modelos de Estados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contacto</h5>
            <ul className="text-slate-500 text-sm space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />{" "}
                info@vaprofesionales.pe
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" /> +51 987 654 321
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-500" /> Lima, Perú
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; 2026 V&A PROFESIONALES. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">SUNAT Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
