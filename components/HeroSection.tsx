'use client'

import { Sparkles, Shield, Heart } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and image */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-100 via-cleansing-50 to-protection-100"></div>
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <img src="/images/limpia-espiritual-1.jpg" alt="Limpia espiritual" className="w-48 h-48 object-cover rounded-full shadow-2xl" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-spiritual-300 animate-float">
          <Sparkles size={32} />
        </div>
        <div className="absolute top-40 right-20 text-cleansing-300 animate-float animation-delay-200">
          <Shield size={28} />
        </div>
        <div className="absolute bottom-40 left-20 text-protection-300 animate-float animation-delay-400">
          <Heart size={24} />
        </div>
        <div className="absolute bottom-20 right-10 text-spiritual-300 animate-float animation-delay-600">
          <Sparkles size={20} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mystic-title mb-6">
            <span className="text-gradient">Limpia de Brujería</span>
            <br />
            <span className="text-gray-800">Profesional</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mystic-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Elimina energías negativas, trabajos de brujería y mal de ojo con nuestros 
            <span className="font-semibold text-spiritual-700 mystic-subtitle"> servicios especializados de limpieza espiritual</span>
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Sparkles className="text-spiritual-600" size={20} />
              <span className="text-gray-800 font-medium">Resultados Inmediatos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Shield className="text-cleansing-600" size={20} />
              <span className="text-gray-800 font-medium">Protección Duradera</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Heart className="text-protection-600" size={20} />
              <span className="text-gray-800 font-medium">Paz Interior</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/15103624147?text=Hola,%20me%20interesa%20solicitar%20una%20limpia%20espiritual.%20¿Podrían%20ayudarme?" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4 animate-slide-up inline-block text-center">
              🔮 Solicitar Limpia Ahora
            </a>
            <a href="tel:+15103624147" className="btn-secondary text-lg px-8 py-4 animate-slide-up animation-delay-200 inline-block text-center">
              📞 Consulta Gratuita
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">+500 Clientes Satisfechos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">15 Años de Experiencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">100% Confidencial</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection