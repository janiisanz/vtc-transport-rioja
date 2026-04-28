'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

const FALLBACK: Testimonial[] = [
  {
    id: 't1',
    title: 'Testimonio 1',
    testimonio: {
      nombreCliente: 'Carlos Rodríguez',
      cargo: 'Director Comercial',
      valoracion: 5,
      comentario:
        'Servicio impecable. Puntual, silencioso y con una atención exquisita. Repetiré sin duda para mis viajes de negocios.',
    },
  },
  {
    id: 't2',
    title: 'Testimonio 2',
    testimonio: {
      nombreCliente: 'María Fernández',
      cargo: 'Empresaria',
      valoracion: 5,
      comentario:
        'El Tesla es una pasada. Llegamos al aeropuerto relajados y a tiempo. El conductor fue muy profesional y discreto.',
    },
  },
  {
    id: 't3',
    title: 'Testimonio 3',
    testimonio: {
      nombreCliente: 'Alejandro Torres',
      cargo: 'Consultor Senior',
      valoracion: 5,
      comentario:
        'Viajé Madrid-Barcelona de noche. Silencio absoluto, asientos cómodos. Llegué descansado y listo para la reunión.',
    },
  },
  {
    id: 't4',
    title: 'Testimonio 4',
    testimonio: {
      nombreCliente: 'Laura Sánchez',
      cargo: 'CEO',
      valoracion: 5,
      comentario:
        'Lo contratamos para nuestra boda y fue un detallazo. El coche impecable y el servicio de 10. Totalmente recomendable.',
    },
  },
  {
    id: 't5',
    title: 'Testimonio 5',
    testimonio: {
      nombreCliente: 'Pedro Martínez',
      cargo: 'Arquitecto',
      valoracion: 5,
      comentario:
        'El mejor traslado al aeropuerto que he tenido. App de seguimiento del vuelo, cero esperas. Lujo y sostenibilidad en uno.',
    },
  },
  {
    id: 't6',
    title: 'Testimonio 6',
    testimonio: {
      nombreCliente: 'Ana López',
      cargo: 'Directora de Marketing',
      valoracion: 5,
      comentario:
        'Elegancia, confort y puntualidad. Todo lo que esperaba y más. El viaje se hizo cortísimo de lo bien que íbamos.',
    },
  },
]

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < value ? 'text-amber-400 fill-amber-400' : 'text-graphite-600'}
        />
      ))}
    </div>
  )
}

interface Props {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: Props) {
  const items = testimonials.length > 0 ? testimonials : FALLBACK

  return (
    <section id="testimonios" className="py-24 bg-graphite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-silver-400 text-sm tracking-[0.25em] uppercase mb-3">
            Opiniones reales
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => {
            const { nombreCliente, cargo, valoracion, comentario, avatar } =
              t.testimonio
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                className="group bg-graphite-900 rounded-2xl p-6 border border-graphite-700 hover:border-silver-400/30 transition-all duration-400 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 flex flex-col gap-4"
              >
                {/* Stars */}
                <StarRating value={valoracion} />

                {/* Quote */}
                <blockquote className="text-silver-300 text-sm leading-relaxed flex-1">
                  &ldquo;{comentario}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-graphite-700">
                  {avatar ? (
                    <Image
                      src={avatar.sourceUrl}
                      alt={avatar.altText || nombreCliente}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-graphite-600 to-graphite-700 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {nombreCliente.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-semibold text-sm">{nombreCliente}</p>
                    <p className="text-silver-500 text-xs">{cargo}</p>
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
