'use client'

import { Star, MoreHorizontal, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    initial: 'M',
    location: 'Ciudad de México',
    rating: 5,
    date: 'hace 2 semanas',
    review: 'Increíble experiencia. Llevaba meses con problemas de salud que ningún doctor podía explicar. Después de la limpia con el maestro, todo cambió. Mi energía regresó y los dolores desaparecieron completamente. 100% recomendado.',
    helpful: 23,
    verified: true
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    initial: 'C',
    location: 'Guadalajara',
    rating: 5,
    date: 'hace 1 mes',
    review: 'Mi negocio estaba en quiebra sin razón aparente. Clientes que se iban, proveedores que cancelaban contratos. Después de la limpia de negocio, todo se normalizó. En 3 semanas recuperé el 80% de mis clientes. Gracias infinitas.',
    helpful: 31,
    verified: true
  },
  {
    id: 3,
    name: 'Ana Martínez',
    initial: 'A',
    location: 'Monterrey',
    rating: 5,
    date: 'hace 3 días',
    review: 'Estaba desesperada. Mi matrimonio se estaba destruyendo, peleas constantes, mi esposo cambió completamente. La limpia de pareja nos salvó. Ahora estamos mejor que nunca. El maestro es un verdadero profesional.',
    helpful: 18,
    verified: true
  },
  {
    id: 4,
    name: 'Roberto Silva',
    initial: 'R',
    location: 'Puebla',
    rating: 5,
    date: 'hace 1 semana',
    review: 'Tenía pesadillas horribles todas las noches, no podía dormir. Mi casa se sentía pesada, mis hijos lloraban sin razón. Después de la limpia de hogar, la paz regresó. Dormimos tranquilos y el ambiente cambió completamente.',
    helpful: 27,
    verified: true
  },
  {
    id: 5,
    name: 'Lucía Hernández',
    initial: 'L',
    location: 'Tijuana',
    rating: 5,
    date: 'hace 5 días',
    review: 'Llevaba 2 años sin conseguir trabajo, siendo profesional con experiencia. Era como si algo me bloqueara. La limpia cambió todo. A la semana tenía 3 ofertas de trabajo. No puedo creer la diferencia.',
    helpful: 22,
    verified: true
  },
  {
    id: 6,
    name: 'Fernando López',
    initial: 'F',
    location: 'Mérida',
    rating: 5,
    date: 'hace 2 días',
    review: 'Mi ex pareja me había hecho brujería para que regresara con ella. Estaba confundido, deprimido, no era yo mismo. La limpia me liberó completamente. Ahora tengo claridad mental y estoy en una relación sana.',
    helpful: 35,
    verified: true
  }
]

const TestimonialsSection = () => {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([])

  const toggleExpanded = (id: number) => {
    setExpandedReviews(prev => 
      prev.includes(id) 
        ? prev.filter(reviewId => reviewId !== id)
        : [...prev, id]
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mystic-title text-gradient mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Testimonios reales de personas que han transformado sus vidas
          </p>
          
          {/* Featured Images Gallery */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="relative group">
              <img src="https://i.pinimg.com/736x/5b/73/c2/5b73c2bf874298894335362b436a2b58.jpg" alt="Limpia espiritual" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-xl border-4 border-spiritual-200 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-spiritual-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img src="https://i.pinimg.com/736x/73/3b/3a/733b3a15533475631082006d261eb8fc.jpg" alt="Protección espiritual" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-xl border-4 border-cleansing-200 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-cleansing-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img src="https://i.pinimg.com/736x/ae/13/41/ae1341f679f9c928b513a9a7fc18a41c.jpg" alt="Energías espirituales" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-xl border-4 border-protection-200 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-protection-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Google Reviews Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Limpia Espiritual</h3>
                <p className="text-gray-600">Servicios de limpieza espiritual</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-2xl font-bold text-gray-800">4.9</span>
                <div className="flex">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-gray-600 text-sm">Basado en 127 reseñas</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedReviews.includes(testimonial.id)
            const shouldTruncate = testimonial.review.length > 150
            
            return (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                {/* User Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-spiritual-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.initial}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    {testimonial.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        ✓ Verificado
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {shouldTruncate && !isExpanded 
                      ? truncateText(testimonial.review, 150)
                      : testimonial.review
                    }
                  </p>
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2"
                    >
                      {isExpanded ? 'Ver menos' : 'Ver más'}
                    </button>
                  )}
                </div>

                {/* Helpful Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">Útil</span>
                  </button>
                  <span className="text-gray-500 text-sm">{testimonial.helpful} personas encontraron esto útil</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-spiritual-50 to-cleansing-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              ¿Listo para ser el próximo testimonio de éxito?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Únete a las cientos de personas que han transformado su vida con nuestros servicios de limpieza espiritual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/15103624147?text=Hola,%20quiero%20comenzar%20mi%20transformación%20espiritual.%20¿Pueden%20ayudarme?" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 inline-block text-center">
                🌟 Comenzar Mi Transformación
              </a>
              <a href="tel:+15103624147" className="btn-secondary text-lg px-8 py-4 inline-block text-center">
                📞 Consulta Gratuita
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-spiritual-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-spiritual-600 mb-2">4.9</div>
            <div className="text-gray-600">Calificación Promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-spiritual-600 mb-2">98%</div>
            <div className="text-gray-600">Tasa de Éxito</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-spiritual-600 mb-2">15</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection