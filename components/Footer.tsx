import { Phone, MessageCircle, Instagram } from 'lucide-react'

const CONTACT = {
  phone: '+34 636 466 175',
  phoneHref: 'tel:+34636466175',
  whatsapp: 'https://wa.me/34636466175',
  email: 'hola@teslavtc.es',
  emailHref: 'mailto:hola@teslavtc.es',
  instagram: 'https://instagram.com/teslavtc',
  instagramHandle: '@teslavtc',
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Reservar', href: '#reserva' },
]

export default function Footer() {
  return (
    <footer className="bg-graphite-900 border-t border-graphite-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-widest uppercase mb-3">
              VTC<span className="text-silver-400"> Transport Rioja</span>
            </h3>
            <p className="text-silver-400 text-sm leading-relaxed mb-4 max-w-xs">
              Transporte privado premium en vehículo eléctrico Tesla. Lujo,
              puntualidad y sostenibilidad en cada viaje.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-silver-400 text-xs">Disponible 24h / 7 días</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-silver-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-silver-400 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <Phone size={16} className="flex-shrink-0 group-hover:text-silver-300" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-silver-400 hover:text-[#25D366] text-sm transition-colors duration-200 group"
                >
                  <MessageCircle size={16} className="flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-silver-400 hover:text-white text-sm transition-colors duration-200 group"
                >
                  <Instagram size={16} className="flex-shrink-0" />
                  {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-graphite-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-500">
          <p>© {new Date().getFullYear()} VTC Transport Rioja. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/aviso-legal" className="hover:text-silver-300 transition-colors">Aviso Legal</a>
            <a href="/privacidad" className="hover:text-silver-300 transition-colors">Política de Privacidad</a>
          </div>
          <p>
            Diseñado con precisión · Conducido con pasión ·{' '}
            <span className="text-emerald-400">0 emisiones</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
