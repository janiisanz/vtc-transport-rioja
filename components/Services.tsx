'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Service } from '@/types'

// Fallback icons when WordPress doesn't have custom ones
const ICON_MAP: Record<string, string> = {
  aeropuerto: '✈️',
  larga: '🛣️',
  ejecutivo: '💼',
  eventos: '⭐',
  turismo: '🗺️',
}

const FALLBACK_SERVICES = [
  {
    id: 'f1',
    title: 'Traslados al Aeropuerto',
    excerpt: 'Llegadas y salidas puntuales con seguimiento de vuelo en tiempo real. Sin sorpresas, sin estrés.',
    serviciosMeta: { icono: '✈️', precio: 'A consultar', descripcionCorta: '' },
  },
  {
    id: 'f2',
    title: 'Viajes de Larga Distancia',
    excerpt: 'Viaja cómodamente a cualquier ciudad de España. Asientos premium, cargadores y silencio total.',
    serviciosMeta: { icono: '🛣️', precio: 'A consultar', descripcionCorta: '' },
  },
  {
    id: 'f3',
    title: 'Transporte Ejecutivo',
    excerpt: 'Reuniones, conferencias y visitas de negocios. Discreción, puntualidad y presentación impecable.',
    serviciosMeta: { icono: '💼', precio: 'A consultar', descripcionCorta: '' },
  },
  {
    id: 'f4',
    title: 'Eventos y Viajes VIP',
    excerpt: 'Bodas, galas, cumpleaños. Haz de tu llegada un momento inolvidable en Tesla.',
    serviciosMeta: { icono: '⭐', precio: 'A consultar', descripcionCorta: '' },
  },
  {
    id: 'f5',
    title: 'Turismo Privado',
    excerpt: 'Descubre España a tu ritmo con un guía conductor. Rutas personalizadas sin compromisos.',
    serviciosMeta: { icono: '🗺️', precio: 'A consultar', descripcionCorta: '' },
  },
]

interface Props {
  services: Service[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Services({ services }: Props) {
  const items = services.length > 0 ? services : FALLBACK_SERVICES

  return (
    <section id="servicios" className="py-24 bg-graphite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-silver-400 text-sm tracking-[0.25em] uppercase mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, i) => {
            const slug = 'slug' in service ? (service as Service).slug : ''
            const icon =
              (service as typeof FALLBACK_SERVICES[0]).serviciosMeta?.icono ??
              ICON_MAP[slug?.split('-')[0] ?? ''] ??
              '🚗'
            const price =
              (service as typeof FALLBACK_SERVICES[0]).serviciosMeta?.precio
            const excerpt =
              service.excerpt?.replace(/<[^>]*>/g, '').trim() ?? ''
            const image = (service as Service).featuredImage?.node

            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group relative bg-graphite-800 rounded-2xl overflow-hidden border border-graphite-700 hover:border-silver-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
              >
                {/* Image */}
                {image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={image.sourceUrl}
                      alt={image.altText || service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-800 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Icon + Price */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{icon}</span>
                    {price && (
                      <span className="text-xs font-semibold text-silver-300 bg-graphite-700 px-2.5 py-1 rounded-full border border-graphite-600">
                        {price}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-silver-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-silver-400 text-sm leading-relaxed line-clamp-3">
                    {excerpt}
                  </p>

                  {/* CTA line */}
                  <div className="mt-5 pt-4 border-t border-graphite-700">
                    <a
                      href="#reserva"
                      className="text-sm text-silver-300 hover:text-white font-medium inline-flex items-center gap-1 transition-colors group/link"
                    >
                      Reservar este servicio
                      <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
