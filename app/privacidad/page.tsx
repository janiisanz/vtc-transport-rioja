import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  robots: { index: false, follow: false },
}

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-graphite-900 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidad</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">1. Responsable del tratamiento</h2>
          <ul className="text-silver-400 space-y-1 list-none pl-0">
            <li><span className="text-silver-300 font-medium">Titular:</span> Juan Carlos Sánchez Herrero</li>
            <li><span className="text-silver-300 font-medium">NIF:</span> 16552329B</li>
            <li><span className="text-silver-300 font-medium">Dirección:</span> C/ Alfonso VI 12, La Rioja</li>
            <li><span className="text-silver-300 font-medium">Teléfono:</span> +34 636 466 175</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">2. Datos que recogemos</h2>
          <p className="text-silver-400 leading-relaxed">
            A través del formulario de reserva recogemos nombre completo y número de teléfono,
            únicamente para gestionar la solicitud de servicio de transporte. Estos datos se
            transmiten directamente a través de WhatsApp y no se almacenan en ningún servidor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">3. Finalidad y base legal</h2>
          <p className="text-silver-400 leading-relaxed">
            Los datos se tratan exclusivamente para atender su solicitud de reserva (Art. 6.1.b
            RGPD — ejecución de un contrato). No se utilizan para fines comerciales ni se ceden
            a terceros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">4. Conservación de datos</h2>
          <p className="text-silver-400 leading-relaxed">
            Dado que los datos se transmiten por WhatsApp y no se almacenan en servidores propios,
            la conservación queda sujeta a la política de privacidad de WhatsApp (Meta Platforms).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">5. Sus derechos</h2>
          <p className="text-silver-400 leading-relaxed">
            Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad
            contactando al teléfono <span className="text-white">+34 636 466 175</span>. Asimismo,
            puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
          <p className="text-silver-400 leading-relaxed">
            Este sitio web no utiliza cookies propias de seguimiento ni analítica. Puede navegar
            sin que se instale ninguna cookie en su dispositivo.
          </p>
        </section>
      </div>
    </main>
  )
}
