'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'

const PHONE = '+34 676 623 080'
const PHONE_HREF = 'tel:+34676623080'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-75"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900/40 via-graphite-900/20 to-graphite-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-900/30 via-transparent to-graphite-900/30" />
      </div>

      {/* Animated lines decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Viajes privados
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-300 via-white to-silver-400">
            premium en Tesla de 7 plazas
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-silver-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Comodidad absoluta, puntualidad garantizada y transporte sostenible.
          Experimenta el lujo silencioso de viajar en Tesla con chofer privado.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reserva"
            className="group relative inline-flex items-center gap-2 bg-white text-graphite-900 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-silver-100 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105"
          >
            Reservar ahora
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 border border-silver-400/40 text-silver-200 px-8 py-4 rounded-full font-medium text-sm tracking-wider uppercase hover:bg-white/10 hover:border-silver-300 transition-all duration-300 backdrop-blur-sm"
          >
            <Phone size={16} />
            {PHONE}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: '+500', label: 'Viajes realizados' },
            { value: '100%', label: 'Clientes satisfechos' },
            { value: '0 CO₂', label: 'Emisiones directas' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-silver-400 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#servicios" aria-label="Scroll down">
          <ChevronDown
            size={28}
            className="text-silver-400 animate-bounce hover:text-white transition-colors"
          />
        </a>
      </motion.div>
    </section>
  )
}
