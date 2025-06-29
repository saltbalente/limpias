'use client'

import { Clock, Users, Award, Shield } from 'lucide-react'

const ConversionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-spiritual-900 to-spiritual-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">✨</div>
        <div className="absolute top-20 right-20 text-4xl">🔮</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌟</div>
        <div className="absolute bottom-10 right-10 text-3xl">⭐</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Imagen decorativa */}
        <div className="absolute -top-10 left-10 opacity-15 hidden md:block">
          <img src="/images/energias-espirituales.jpg" alt="Energías espirituales" className="w-32 h-32 object-cover rounded-full" />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mystic-title mb-8 leading-tight">
            ¿Sientes que algo no está bien en tu vida?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-cleansing-200">
              Si has notado cambios inexplicables en tu salud, relaciones o prosperidad, 
              <span className="font-bold text-white"> es posible que estés siendo víctima de trabajos de brujería</span>.
            </p>
            
            <p className="text-spiritual-200">
              No permitas que las energías negativas controlen tu destino. 
              <span className="font-bold text-cleansing-300">Miles de personas han recuperado su paz y prosperidad</span> 
              gracias a nuestros servicios especializados de limpieza espiritual.
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-cleansing-300">
              La diferencia entre seguir sufriendo y recuperar tu bienestar 
              está a solo una llamada de distancia.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-cleansing-300" size={32} />
            </div>
            <div className="text-3xl font-bold text-cleansing-300 mb-2">500+</div>
            <div className="text-sm text-spiritual-200">Clientes Liberados</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="text-cleansing-300" size={32} />
            </div>
            <div className="text-3xl font-bold text-cleansing-300 mb-2">24h</div>
            <div className="text-sm text-spiritual-200">Resultados Visibles</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-cleansing-300" size={32} />
            </div>
            <div className="text-3xl font-bold text-cleansing-300 mb-2">15</div>
            <div className="text-sm text-spiritual-200">Años Experiencia</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-cleansing-300" size={32} />
            </div>
            <div className="text-3xl font-bold text-cleansing-300 mb-2">100%</div>
            <div className="text-sm text-spiritual-200">Efectividad</div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cleansing-300">
            ⚠️ Cada día que esperas, las energías negativas se fortalecen
          </h3>
          
          <p className="text-lg md:text-xl mb-8 text-spiritual-200">
            No dejes que la brujería arruine tu vida por más tiempo. 
            <span className="font-bold text-white">Actúa ahora y recupera el control de tu destino.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/15103624147?text=Hola,%20necesito%20una%20limpia%20espiritual%20urgente.%20¿Pueden%20atenderme%20hoy?" target="_blank" rel="noopener noreferrer" className="bg-cleansing-500 hover:bg-cleansing-600 text-white font-bold py-4 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 shadow-xl inline-block text-center">
              🚨 Solicitar Limpia Urgente
            </a>
            <a href="tel:+15103624147" className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 inline-block text-center">
              📞 Consulta Inmediata
            </a>
          </div>
          
          <p className="text-sm text-spiritual-300 mt-6">
            ✅ Atención 24/7 • ✅ Consulta gratuita • ✅ Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConversionSection