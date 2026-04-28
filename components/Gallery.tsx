'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

import type { GalleryImage } from '@/types'

const VIDEO_POSITION = 0

const GALLERY_VIDEO = {
  id: 'gallery-video-1',
  src: '/gallery-video.mp4',
  poster: '/gallery-video-poster.jpg',
}

const STATIC_IMAGES: GalleryImage[] = [
  { id: 'photo-1', sourceUrl: '/photo-1.jpg', altText: 'Tesla Model X trasera', mediaDetails: { width: 828, height: 1104 } },
  { id: 'photo-2', sourceUrl: '/photo-2.jpg', altText: 'Tesla Model X puertas abiertas', mediaDetails: { width: 828, height: 1104 } },
  { id: 'photo-3', sourceUrl: '/photo-3.jpg', altText: 'Tesla Model X vista aérea', mediaDetails: { width: 828, height: 1104 } },
  { id: 'photo-4', sourceUrl: '/photo-4.jpg', altText: 'Interior Tesla Model X', mediaDetails: { width: 828, height: 1104 } },
  { id: 'photo-5', sourceUrl: '/photo-5.jpg', altText: 'Rueda Tesla Model X', mediaDetails: { width: 828, height: 1104 } },
]

function VideoCard({ src, poster, onClick }: { src: string; poster: string; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-graphite-800 col-span-2 row-span-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[3/4]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite-900/0 group-hover:bg-graphite-900/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Play size={28} className="text-white fill-white" />
          </div>
        </div>
        <div className="absolute inset-0 border border-transparent group-hover:border-silver-400/20 rounded-xl transition-colors duration-300" />
      </div>
    </div>
  )
}

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <X size={32} />
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  const current = images[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <X size={32} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
        aria-label="Anterior"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-h-[90vh] max-w-[90vw] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative" style={{ maxHeight: '90vh', maxWidth: '90vw' }}>
          <Image
            src={current.sourceUrl}
            alt={current.altText || 'Tesla VTC'}
            width={current.mediaDetails?.width ?? 828}
            height={current.mediaDetails?.height ?? 1104}
            className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-lg shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
        aria-label="Siguiente"
      >
        <ChevronRight size={32} />
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  )
}

interface Props {
  images: GalleryImage[]
}

export default function Gallery({ images }: Props) {
  const photos = images.length > 0 ? images : STATIC_IMAGES
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)

  type GridItem =
    | { kind: 'image'; data: GalleryImage; photoIndex: number }
    | { kind: 'video' }

  const items: GridItem[] = photos.map((img: GalleryImage, i: number) => ({ kind: 'image' as const, data: img, photoIndex: i }))
  items.splice(VIDEO_POSITION, 0, { kind: 'video' })

  return (
    <section id="galeria" className="py-24 bg-graphite-900">
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
            Nuestro vehículo
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Galería
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => {
            if (item.kind === 'video') {
              return (
                <motion.div
                  key={GALLERY_VIDEO.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="col-span-2 row-span-2"
                >
                  <VideoCard src={GALLERY_VIDEO.src} poster={GALLERY_VIDEO.poster} onClick={() => setVideoOpen(true)} />
                </motion.div>
              )
            }

            return (
              <motion.div
                key={item.data.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-xl bg-graphite-800 cursor-pointer"
                onClick={() => setLightboxIndex(item.photoIndex)}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.data.sourceUrl}
                    alt={item.data.altText || 'Tesla VTC'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-graphite-900/0 group-hover:bg-graphite-900/40 transition-all duration-400 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light tracking-widest text-xs uppercase">
                      Ver imagen
                    </span>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-silver-400/20 rounded-xl transition-colors duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox fotos */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={photos}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Lightbox vídeo */}
      <AnimatePresence>
        {videoOpen && (
          <VideoLightbox
            src={GALLERY_VIDEO.src}
            onClose={() => setVideoOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
