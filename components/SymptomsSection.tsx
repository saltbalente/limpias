'use client'

import { AlertTriangle, Heart, Briefcase, Home, Users, Brain } from 'lucide-react'

const symptoms = [
  {
    category: 'Salud',
    icon: <Heart className="text-red-500" size={32} />,
    color: 'from-red-100 to-red-50',
    borderColor: 'border-red-200',
    symptoms: [
      'Enfermedades inexplicables que no mejoran',
      'Dolores de cabeza constantes sin causa médica',
      'Fatiga extrema y agotamiento permanente',
      'Problemas de sueño y pesadillas recurrentes',
      'Pérdida de apetito o cambios drásticos de peso'
    ]
  },
  {
    category: 'Relaciones',
    icon: <Users className="text-pink-500" size={32} />,
    color: 'from-pink-100 to-pink-50',
    borderColor: 'border-pink-200',
    symptoms: [
      'Peleas constantes sin motivo aparente',
      'Alejamiento inexplicable de seres queridos',
      'Problemas en el matrimonio o relación de pareja',
      'Conflictos familiares que antes no existían',
      'Pérdida de amistades de forma repentina'
    ]
  },
  {
    category: 'Trabajo y Dinero',
    icon: <Briefcase className="text-green-600" size={32} />,
    color: 'from-green-100 to-green-50',
    borderColor: 'border-green-200',
    symptoms: [
      'Pérdida repentina de trabajo o clientes',
      'Problemas financieros inexplicables',
      'Negocios que no prosperan sin razón',
      'Deudas que aparecen de la nada',
      'Bloqueos en oportunidades laborales'
    ]
  },
  {
    category: 'Hogar',
    icon: <Home className="text-blue-600" size={32} />,
    color: 'from-blue-100 to-blue-50',
    borderColor: 'border-blue-200',
    symptoms: [
      'Ambiente pesado y tenso en casa',
      'Objetos que se rompen sin explicación',
      'Ruidos extraños durante la noche',
      'Sensación de ser observado',
      'Mascotas que actúan de forma extraña'
    ]
  },
  {
    category: 'Mental y Emocional',
    icon: <Brain className="text-purple-600" size={32} />,
    color: 'from-purple-100 to-purple-50',
    borderColor: 'border-purple-200',
    symptoms: [
      'Depresión repentina sin causa aparente',
      'Ansiedad y ataques de pánico',
      'Pensamientos negativos constantes',
      'Pérdida de motivación y esperanza',
      'Sensación de que todo sale mal'
    ]
  },
  {
    category: 'Señales Físicas',
    icon: <AlertTriangle className="text-orange-600" size={32} />,
    color: 'from-orange-100 to-orange-50',
    borderColor: 'border-orange-200',
    symptoms: [
      'Aparición de marcas extrañas en el cuerpo',
      'Sensación de pinchazos o quemaduras',
      'Olores extraños que solo tú percibes',
      'Objetos que aparecen en tu casa',
      'Sueños con personas desconocidas'
    ]
  }
]

const SymptomsSection = () => {
  return (
    <section id="sintomas" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Imagen decorativa */}
          <div className="absolute -top-5 right-5 opacity-20 hidden lg:block">
            <img src="/images/proteccion-espiritual.jpg" alt="Protección espiritual" className="w-40 h-40 object-cover rounded-full shadow-lg" />
          </div>
          <h2 className="text-4xl md:text-5xl mystic-title text-gradient mb-6">
            ¿Reconoces estos síntomas?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Si experimentas varios de estos síntomas de forma simultánea y sin explicación médica, 
            <span className="font-bold text-spiritual-700"> podrías estar siendo víctima de trabajos de brujería</span>.
          </p>
        </div>

        {/* Warning Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-r-lg">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-3" size={24} />
            <div>
              <h3 className="text-lg mystic-subtitle text-red-800 mb-2">
                ⚠️ IMPORTANTE: Actúa antes de que sea demasiado tarde
              </h3>
              <p className="text-red-700">
                Mientras más tiempo pases sin atender estos síntomas, más fuerte se vuelve la brujería. 
                <span className="font-bold">No esperes a que la situación empeore.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Symptoms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {symptoms.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 border-2 ${category.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full p-3 shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.category}
                </h3>
              </div>
              
              {/* Symptoms List */}
              <ul className="space-y-3">
                {category.symptoms.map((symptom, symptomIndex) => (
                  <li key={symptomIndex} className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold text-lg mt-0.5">•</span>
                    <span className="text-gray-700 leading-relaxed">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-spiritual-600 to-cleansing-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            🚨 ¿Tienes 3 o más de estos síntomas?
          </h3>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Es muy probable que estés siendo víctima de brujería. 
            <span className="font-bold">No permitas que arruine tu vida por más tiempo.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://wa.me/15103624147?text=Hola,%20me%20gustaría%20solicitar%20un%20diagnóstico%20espiritual%20gratuito.%20¿Pueden%20ayudarme?" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-spiritual-700 font-bold py-4 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 shadow-xl inline-block text-center">
              🔮 Solicitar Diagnóstico Gratuito
            </a>
            <a href="tel:+15103624147" className="bg-cleansing-500 hover:bg-cleansing-600 text-white font-bold py-4 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 shadow-xl inline-block text-center">
              📞 Llamar Ahora
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm">
            <span className="flex items-center space-x-2">
              <span>✅</span>
              <span>Consulta 100% confidencial</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✅</span>
              <span>Atención inmediata</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✅</span>
              <span>Sin compromiso</span>
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-bold text-spiritual-700">Recuerda:</span> La brujería no desaparece por sí sola. 
            Mientras más tiempo esperes, más difícil será eliminarla.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SymptomsSection