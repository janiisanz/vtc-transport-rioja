'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import type { BookingFormData } from '@/types'

const WHATSAPP_NUMBER = '34676623080'

const INITIAL: BookingFormData = {
  nombre: '',
  telefono: '',
  recogida: '',
  equipaje: 'no',
  ninos: 'no',
  destino: '',
  fecha: '',
  hora: '',
}

function buildWhatsAppMessage(data: BookingFormData): string {
  return encodeURIComponent(
    `Nueva reserva VTC Transport Rioja\n\n` +
    `Nombre: ${data.nombre}\n` +
    `Teléfono: ${data.telefono}\n` +
    `Recogida: ${data.recogida}\n` +
    `Equipaje: ${data.equipaje === 'si' ? 'Sí' : 'No'}\n` +
    `Niños: ${data.ninos === 'si' ? 'Sí' : 'No'}\n` +
    `Destino: ${data.destino}\n` +
    `Fecha: ${data.fecha}\n` +
    `Hora: ${data.hora}\n\n` +
    `_Enviado desde vtctransporioja.com_`
  )
}

function RadioGroup({
  name,
  value,
  onChange,
}: {
  name: keyof BookingFormData
  value: string
  onChange: (val: 'si' | 'no') => void
}) {
  return (
    <div className="flex gap-4">
      {(['si', 'no'] as const).map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2.5 rounded-lg border transition-all duration-200 text-sm font-medium ${
            value === opt
              ? 'border-silver-400 bg-white/10 text-white'
              : 'border-graphite-600 bg-graphite-800 text-silver-400 hover:border-graphite-500'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt === 'si' ? 'Sí' : 'No'}
        </label>
      ))}
    </div>
  )
}

const inputCls =
  'w-full bg-graphite-800 border border-graphite-600 rounded-lg px-4 py-3 text-white text-sm placeholder-silver-500 focus:outline-none focus:border-silver-400 focus:bg-graphite-700 transition-all duration-200'

const labelCls = 'block text-silver-300 text-xs font-semibold tracking-wider uppercase mb-2'

export default function BookingForm() {
  const [form, setForm] = useState<BookingFormData>(INITIAL)
  const [sent, setSent] = useState(false)

  const set = (field: keyof BookingFormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = buildWhatsAppMessage(form)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="reserva" className="py-24 bg-graphite-900 relative overflow-hidden">
      {/* Glow decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-silver-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-silver-400 text-sm tracking-[0.25em] uppercase mb-3">
            Solicita tu viaje
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Reservar ahora
          </h2>
          <p className="text-silver-400 text-sm">
            Completa el formulario y te contactamos por WhatsApp en minutos.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-graphite-800 rounded-2xl border border-graphite-700 p-6 sm:p-8 overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Nombre + Teléfono */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Nombre completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => set('nombre', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Teléfono *</label>
                <input
                  type="tel"
                  required
                  placeholder="+34 600 000 000"
                  value={form.telefono}
                  onChange={(e) => set('telefono', e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Lugar de recogida */}
            <div>
              <label className={labelCls}>Lugar de recogida *</label>
              <input
                type="text"
                required
                placeholder="Dirección, aeropuerto, hotel..."
                value={form.recogida}
                onChange={(e) => set('recogida', e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Destino */}
            <div>
              <label className={labelCls}>Destino *</label>
              <input
                type="text"
                required
                placeholder="¿A dónde vas?"
                value={form.destino}
                onChange={(e) => set('destino', e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Fecha */}
            <div>
              <label className={labelCls}>Fecha *</label>
              <input
                type="date"
                required
                value={form.fecha}
                onChange={(e) => set('fecha', e.target.value)}
                className={`${inputCls} max-w-full [color-scheme:dark]`}
              />
            </div>

            {/* Hora */}
            <div>
              <label className={labelCls}>Hora *</label>
              <input
                type="time"
                required
                value={form.hora}
                onChange={(e) => set('hora', e.target.value)}
                className={`${inputCls} max-w-full [color-scheme:dark]`}
              />
            </div>

            {/* Equipaje */}
            <div>
              <label className={labelCls}>¿Llevas equipaje?</label>
              <RadioGroup
                name="equipaje"
                value={form.equipaje}
                onChange={(v) => set('equipaje', v)}
              />
            </div>

            {/* Niños */}
            <div>
              <label className={labelCls}>¿Viajan niños?</label>
              <RadioGroup
                name="ninos"
                value={form.ninos}
                onChange={(v) => set('ninos', v)}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} />
              {sent ? '¡Abriendo WhatsApp!' : 'Enviar por WhatsApp'}
            </button>

            <p className="text-center text-silver-500 text-xs">
              Al enviar, se abrirá WhatsApp con tu solicitud pre-rellenada.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
