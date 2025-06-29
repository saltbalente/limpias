'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Limpia de Brujería Completa',
    description: 'Eliminación total de trabajos de brujería, hechizos y maldiciones que afectan tu vida.',
    icon: '🔮',
    price: '$150',
    features: ['Diagnóstico espiritual', 'Limpia con hierbas sagradas', 'Protección post-limpia']
  },
  {
    id: 2,
    title: 'Limpieza de Mal de Ojo',
    description: 'Remoción específica del mal de ojo y energías envidiosas dirigidas hacia ti.',
    icon: '👁️',
    price: '$80',
    features: ['Detección de mal de ojo', 'Limpia con huevo', 'Baño de protección']
  },
  {
    id: 3,
    title: 'Limpia de Hogar',
    description: 'Purificación completa de tu hogar para eliminar energías negativas acumuladas.',
    icon: '🏠',
    price: '$200',
    features: ['Limpia de todos los espacios', 'Sahumerio protector', 'Bendición del hogar']
  },
  {
    id: 4,
    title: 'Limpia de Negocio',
    description: 'Atrae prosperidad y elimina bloqueos energéticos en tu negocio o trabajo.',
    icon: '💼',
    price: '$250',
    features: ['Limpia del local', 'Ritual de prosperidad', 'Protección contra envidias']
  },
  {
    id: 5,
    title: 'Limpia de Pareja',
    description: 'Fortalece la relación y elimina interferencias externas en tu vida amorosa.',
    icon: '💕',
    price: '$180',
    features: ['Limpia para ambos', 'Ritual de unión', 'Protección de la relación']
  }
]

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mystic-title text-gradient mb-6">
            Nuestros Servicios de Limpia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios especializados para cada tipo de situación espiritual que necesites resolver
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-spiritual-50 to-cleansing-50 p-8 md:p-12 rounded-2xl mx-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Service Content */}
                      <div className="space-y-6">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h3 className="text-3xl md:text-4xl mystic-subtitle text-gray-800">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <span className="text-spiritual-600">✓</span>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl font-bold text-spiritual-600">
                            {service.price}
                          </span>
                          <a href="https://wa.me/15103624147?text=Hola,%20me%20interesa%20solicitar%20el%20servicio%20de%20limpia%20espiritual.%20¿Pueden%20darme%20más%20información?" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center">
                            Solicitar Ahora
                          </a>
                        </div>
                      </div>
                      
                      {/* Service Visual */}
                      <div className="flex justify-center">
                        <div className="w-64 h-64 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                          <span className="text-8xl">{service.icon}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-spiritual-600" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-spiritual-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-spiritual-600 scale-125'
                    : 'bg-gray-300 hover:bg-spiritual-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproducir'} presentación automática
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSlider