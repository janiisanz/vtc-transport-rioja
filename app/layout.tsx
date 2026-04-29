import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = 'https://www.vtctransporioja.com'
const SITE_NAME = 'VTC Transport Rioja'
const DESCRIPTION =
  'Servicio de transporte privado premium en Tesla en La Rioja. Traslados al aeropuerto, viajes de larga distancia, transporte ejecutivo y turismo privado. Lujo, puntualidad y 0 emisiones.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VTC Transport Rioja | Transporte Privado Premium en Tesla de 7 plazas',
    template: '%s | VTC Transport Rioja',
  },
  description: DESCRIPTION,
  keywords: [
    'vtc la rioja',
    'tesla vtc la rioja',
    'transporte privado la rioja',
    'chofer privado logroño',
    'traslado aeropuerto tesla rioja',
    'taxi eléctrico logroño',
    'transporte ejecutivo la rioja',
    'vtc logroño',
    'transfer rioja',
  ],
  authors: [{ name: 'VTC Transport Rioja' }],
  creator: 'VTC Transport Rioja',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'VTC Transport Rioja | Transporte Privado Premium en Tesla de 7 plazas',
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VTC Transport Rioja - Transporte Privado Premium en Tesla de 7 plazas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VTC Transport Rioja | Transporte Privado Premium en Tesla de 7 plazas',
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

// Schema.org LocalBusiness markup
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VTC Transport Rioja',
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: '+34676623080',
  email: 'hola@teslavtc.es',
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: '€€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: {
    '@type': 'State',
    name: 'La Rioja',
  },
  serviceType: [
    'Transporte privado',
    'Traslado aeropuerto',
    'Transporte ejecutivo',
    'Turismo privado',
  ],
  sameAs: ['https://instagram.com/teslavtc'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
