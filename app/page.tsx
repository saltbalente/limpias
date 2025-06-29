import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSlider from '../components/ServicesSlider'
import ConversionSection from '../components/ConversionSection'
import PromotionCTA from '../components/PromotionCTA'
import SymptomsSection from '../components/SymptomsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* CTA Hero con colores de limpiezas espirituales */}
      <HeroSection />
      
      {/* Slider básico con 5 servicios que se auto deslicen */}
      <ServicesSlider />
      
      {/* Párrafo de alta captación de conversión */}
      <ConversionSection />
      
      {/* CTA ofreciendo promoción */}
      <PromotionCTA />
      
      {/* Contenedor que muestre los síntomas más frecuentes de brujería */}
      <SymptomsSection />
      
      {/* Testimonios sobre las limpias (que se vean como google review) */}
      <TestimonialsSection />
      
      {/* Políticas y condiciones */}
      <Footer />
      
      {/* Botones flotantes fijos */}
      <FloatingButtons />
    </main>
  )
}