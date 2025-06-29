import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Limpia de Brujería - Limpieza Espiritual Profesional',
  description: 'Servicios profesionales de limpia de brujería y limpieza espiritual. Elimina energías negativas, mal de ojo y trabajos de brujería con nuestros expertos.',
  keywords: 'limpia de brujería, limpieza de brujería, limpieza espiritual, mal de ojo, energías negativas, trabajos espirituales',
  openGraph: {
    title: 'Limpia de Brujería - Limpieza Espiritual Profesional',
    description: 'Servicios profesionales de limpia de brujería y limpieza espiritual.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  )
}