'use client'

import { useState, useEffect } from 'react'
import { Gift, Clock, Star, Shield } from 'lucide-react'

const PromotionCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-gradient-to-r from-cleansing-500 via-cleansing-600 to-spiritual-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-cleansing-200 opacity-20 animate-float">
          <Gift size={40} />
        </div>
        <div className="absolute top-20 right-20 text-spiritual-200 opacity-20 animate-float animation-delay-200">
          <Star size={35} />
        </div>
        <div className="absolute bottom-20 left-20 text-cleansing-200 opacity-20 animate-float animation-delay-400">
          <Clock size={30} />
        </div>
        <div className="absolute bottom-10 right-10 text-spiritual-200 opacity-20 animate-float animation-delay-600">
          <Gift size={25} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Promotion Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
          <Gift className="text-white mr-2" size={24} />
          <span className="text-white font-bold text-lg">OFERTA ESPECIAL LIMITADA</span>
        </div>

        {/* Main Offer */}
        <h2 className="text-4xl md:text-6xl mystic-title text-white mb-6">
          🎁 PROMOCIÓN EXCLUSIVA
        </h2>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Offer Details */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl mystic-subtitle text-white mb-6">
                Limpia Completa + Protección
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-cleansing-200">✅</span>
                  <span className="text-white text-lg">Diagnóstico espiritual completo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cleansing-200">✅</span>
                  <span className="text-white text-lg">Limpia de brujería profunda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cleansing-200">✅</span>
                  <span className="text-white text-lg">Baño de protección espiritual</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cleansing-200">✅</span>
                  <span className="text-white text-lg">Amuleto de protección GRATIS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cleansing-200">✅</span>
                  <span className="text-white text-lg">Seguimiento por 30 días</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl text-white/70 line-through">$300</span>
                  <span className="text-5xl font-bold text-cleansing-200">$199</span>
                </div>
                <p className="text-cleansing-200 text-lg font-semibold">¡Ahorra $101 hoy!</p>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white mb-6">
                ⏰ Esta oferta termina en:
              </h4>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-cleansing-200">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white text-sm">HORAS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-cleansing-200">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white text-sm">MINUTOS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-cleansing-200">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white text-sm">SEGUNDOS</div>
                </div>
              </div>
              
              {/* Urgency Message */}
              <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 mb-6">
                <p className="text-white font-bold text-lg">
                  🚨 Solo quedan 3 espacios disponibles hoy
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white hover:bg-gray-100 text-spiritual-700 font-bold py-4 px-8 rounded-xl text-xl transform transition-all duration-300 hover:scale-105 shadow-2xl">
            🎯 RECLAMAR OFERTA AHORA
          </button>
          <button className="bg-cleansing-400 hover:bg-cleansing-500 text-white font-bold py-4 px-8 rounded-xl text-xl transform transition-all duration-300 hover:scale-105 shadow-2xl">
            📞 LLAMAR AHORA
          </button>
        </div>
        
        {/* Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center justify-center space-x-4">
            <Shield className="text-cleansing-200" size={32} />
            <div className="text-left">
              <h5 className="text-xl font-bold text-white">Garantía de Satisfacción 100%</h5>
              <p className="text-cleansing-200">Si no ves resultados en 48 horas, te devolvemos tu dinero</p>
            </div>
          </div>
        </div>
        
        {/* Social Proof */}
        <p className="text-cleansing-200 mt-6 text-lg">
          ⭐ Más de 50 personas aprovecharon esta oferta esta semana
        </p>
      </div>
    </section>
  )
}

export default PromotionCTA