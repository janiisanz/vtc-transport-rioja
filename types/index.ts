// ─── WordPress / WPGraphQL response types ────────────────────────────────────

export interface WPImage {
  sourceUrl: string
  altText: string
  mediaDetails?: {
    width: number
    height: number
  }
}

export interface Service {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: {
    node: WPImage
  }
  serviciosMeta?: {
    icono: string
    precio: string
    descripcionCorta: string
  }
}

export interface ServicesResponse {
  services: {
    nodes: Service[]
  }
}

export interface Testimonial {
  id: string
  title: string
  testimonio: {
    nombreCliente: string
    cargo: string
    valoracion: number
    comentario: string
    avatar?: WPImage
  }
}

export interface TestimonialsResponse {
  testimonios: {
    nodes: Testimonial[]
  }
}

export interface GalleryImage {
  id: string
  sourceUrl: string
  altText: string
  mediaDetails: {
    width: number
    height: number
  }
}

export interface GalleryResponse {
  mediaItems: {
    nodes: GalleryImage[]
  }
}

// ─── Booking form ─────────────────────────────────────────────────────────────

export interface BookingFormData {
  nombre: string
  telefono: string
  recogida: string
  equipaje: 'si' | 'no'
  ninos: 'si' | 'no'
  destino: string
  fecha: string
  hora: string
}
