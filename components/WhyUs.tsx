'use client'

import { motion } from 'framer-motion'
import { Zap, Volume2, Clock, Crown, Leaf } from 'lucide-react'

const REASONS = [
  {
    icon: Crown,
    title: 'Vehículo Tesla Premium',
    description:
      'Viaja en un Tesla Model X impecable. Interior de alta gama, asientos de cuero y tecnología de última generación.',
  },
  {
    icon: Volume2,
    title: 'Conducción Silenciosa',
    description:
      'El motor eléctrico de Tesla garantiza un viaje en absoluto silencio. Trabaja, descansa o convesa sin ruidos de motor.',
  },
  {
    icon: Clock,
    title: 'Puntualidad Garantizada',
    description:
      'Seguimiento de vuelos en tiempo real, rutas optimizadas y notificaciones previas. Tu tiempo es sagrado para nosotros.',
  },
  {
    icon: Zap,
    title: 'Servicio Exclusivo',
    description:
      'Chofer profesional, discreto y de confianza. Agua mineral, cargador para tu móvil y atención personalizada.',
  },
  {
    icon: Leaf,
    title: 'Transporte Ecológico',
    description:
      '0 emisiones directas de CO₂. Viaja con la conciencia tranquila: el lujo y la sostenibilidad son compatibles.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-graphite-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-silver-300 blur-3xl" />
        <div className="absolute bottom-1/4 right-32 w-48 h-48 rounded-full bg-silver-300 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-silver-400 text-sm tracking-[0.25em] uppercase mb-3">
              Nuestra diferencia
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Por qué elegir
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-300 to-white">
                VTC Transport Rioja
              </span>
            </h2>
            <p className="text-silver-300 text-lg leading-relaxed mb-8">
              No somos un taxi. Somos una experiencia de viaje premium diseñada
              para quienes valoran el tiempo, el confort y la excelencia.
            </p>

            <a
              href="#reserva"
              className="inline-flex items-center gap-2 bg-white text-graphite-900 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-silver-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Reserva tu viaje →
            </a>
          </motion.div>

          {/* Right: reasons list */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {REASONS.map((reason) => {
              const Icon = reason.icon
              return (
                <motion.li
                  key={reason.title}
                  variants={itemVariants}
                  className="group flex gap-5 p-5 rounded-2xl bg-graphite-900/60 border border-graphite-700 hover:border-silver-400/30 hover:bg-graphite-900 transition-all duration-400"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-graphite-700 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                    <Icon size={22} className="text-silver-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-silver-100 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-silver-400 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
