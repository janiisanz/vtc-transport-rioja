'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

const PHONE = '+34 676 623 080'
const PHONE_HREF = 'tel:+34676623080'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#reserva' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-graphite-900/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-xl tracking-widest uppercase">
              VTC<span className="text-silver-300"> Rioja</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-silver-300 hover:text-white text-sm tracking-widest uppercase font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Phone */}
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-silver-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            <Phone size={16} />
            {PHONE}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-silver-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 bg-graphite-900/98 backdrop-blur-md' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-silver-300 hover:text-white text-sm tracking-widest uppercase font-medium py-2 border-b border-graphite-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-silver-300 hover:text-white transition-colors text-sm py-2"
          >
            <Phone size={16} />
            {PHONE}
          </a>
        </div>
      </div>
    </nav>
  )
}
