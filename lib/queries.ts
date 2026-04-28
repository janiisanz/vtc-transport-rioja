import { fetchGraphQL } from './graphql'
import type {
  ServicesResponse,
  TestimonialsResponse,
  GalleryResponse,
  Service,
  Testimonial,
  GalleryImage,
} from '@/types'

// ─── Services ────────────────────────────────────────────────────────────────

const SERVICES_QUERY = `
  query GetServices {
    services(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        serviciosMeta {
          icono
          precio
          descripcionCorta
        }
      }
    }
  }
`

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS_QUERY = `
  query GetTestimonials {
    testimonios(first: 6) {
      nodes {
        id
        title
        testimonio {
          nombreCliente
          cargo
          valoracion
          comentario
          avatar {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`

// ─── Gallery ──────────────────────────────────────────────────────────────────

const GALLERY_QUERY = `
  query GetGallery {
    mediaItems(
      first: 12
      where: { categoryName: "galeria-tesla" }
    ) {
      nodes {
        id
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
  }
`

// ─── Fetchers ────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  try {
    const data = await fetchGraphQL<ServicesResponse>(SERVICES_QUERY)
    return data.services.nodes
  } catch {
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await fetchGraphQL<TestimonialsResponse>(TESTIMONIALS_QUERY)
    return data.testimonios.nodes
  } catch {
    return []
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const data = await fetchGraphQL<GalleryResponse>(GALLERY_QUERY)
    return data.mediaItems.nodes
  } catch {
    return []
  }
}
