import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  robots: { index: false, follow: false },
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-graphite-900 py-24 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-silver">
        <h1 className="text-3xl font-bold text-white mb-8">Aviso Legal</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">1. Datos identificativos</h2>
          <p className="text-silver-400 leading-relaxed">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
          </p>
          <ul className="text-silver-400 mt-3 space-y-1 list-none pl-0">
            <li><span className="text-silver-300 font-medium">Titular:</span> Juan Carlos Sánchez Herrero</li>
            <li><span className="text-silver-300 font-medium">NIF:</span> 16552329B</li>
            <li><span className="text-silver-300 font-medium">Dirección:</span> C/ Alfonso VI 12, La Rioja</li>
            <li><span className="text-silver-300 font-medium">Teléfono:</span> +34 636 466 175</li>
            <li><span className="text-silver-300 font-medium">Web:</span> vtclogronorioja.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">2. Objeto y ámbito de aplicación</h2>
          <p className="text-silver-400 leading-relaxed">
            El presente Aviso Legal regula el uso del sitio web vtclogronorioja.com, titularidad de
            Juan Carlos Sánchez Herrero, dedicado a la prestación de servicios de transporte privado
            de viajeros (VTC) en La Rioja y resto de España.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">3. Propiedad intelectual</h2>
          <p className="text-silver-400 leading-relaxed">
            Todos los contenidos del sitio web (textos, imágenes, diseño y código fuente) son
            propiedad del titular o cuenta con las licencias correspondientes. Queda prohibida su
            reproducción, distribución o modificación sin autorización expresa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">4. Exclusión de responsabilidad</h2>
          <p className="text-silver-400 leading-relaxed">
            El titular no se responsabiliza de los daños ocasionados por el uso incorrecto del sitio
            web, ni de la disponibilidad técnica del mismo. Los contenidos pueden modificarse sin
            previo aviso.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">5. Legislación aplicable</h2>
          <p className="text-silver-400 leading-relaxed">
            Este aviso legal se rige por la legislación española. Para cualquier controversia,
            las partes se someten a los juzgados y tribunales de La Rioja.
          </p>
        </section>
      </div>
    </main>
  )
}
