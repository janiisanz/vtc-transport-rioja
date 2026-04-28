'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '34676623080'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me gustaría obtener más información sobre vuestros servicios de transporte privado La Rioja.'
)

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / bubble */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-graphite-800 border border-graphite-600 rounded-2xl rounded-br-sm p-4 shadow-2xl max-w-xs"
          >
            <p className="text-white font-semibold text-sm mb-1">¿Necesitas ayuda?</p>
            <p className="text-silver-400 text-xs mb-3 leading-relaxed">
              Chatea con nosotros y te damos precio inmediato para tu viaje.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={14} />
              Chatear ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        aria-label="Abrir WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl shadow-[#25D366]/30 flex items-center justify-center transition-colors duration-200"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.button>
    </div>
  )
}
