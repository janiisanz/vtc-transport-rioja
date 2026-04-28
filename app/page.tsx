import { Suspense } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'
import { getServices, getTestimonials, getGalleryImages } from '@/lib/queries'

// Skeleton loaders for Suspense boundaries
function ServicesSkeleton() {
  return (
    <section className="py-24 bg-graphite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 bg-graphite-700 rounded animate-pulse mx-auto mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-graphite-800 rounded-2xl h-64 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySkeleton() {
  return (
    <section className="py-24 bg-graphite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-32 bg-graphite-700 rounded animate-pulse mx-auto mb-14" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-graphite-800 rounded-xl aspect-square animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  )
}

// Async data-fetching components
async function ServicesSection() {
  const services = await getServices()
  return <Services services={services} />
}

async function GallerySection() {
  const images = await getGalleryImages()
  return <Gallery images={images} />
}

async function TestimonialsSection() {
  const testimonials = await getTestimonials()
  return <Testimonials testimonials={testimonials} />
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesSection />
      </Suspense>

      <WhyUs />

      <Suspense fallback={<GallerySkeleton />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<div className="py-24 bg-graphite-800" />}>
        <TestimonialsSection />
      </Suspense>

      <BookingForm />

      <Footer />
    </>
  )
}
