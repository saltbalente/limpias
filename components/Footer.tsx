'use client'

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  return (
    <footer className="bg-gradient-to-br from-spiritual-900 to-spiritual-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">✨</span>
              <h3 className="text-2xl font-bold">Limpia Espiritual</h3>
            </div>
            <p className="text-spiritual-200 mb-6 leading-relaxed">
              Especialistas en limpieza espiritual con más de 15 años de experiencia. 
              Ayudamos a eliminar energías negativas, trabajos de brujería y mal de ojo 
              para restaurar la paz y prosperidad en tu vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cleansing-300">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-cleansing-300" size={20} />
                <div>
                  <p className="font-medium">+1 (510) 362-4147</p>
                  <p className="text-spiritual-300 text-sm">Línea directa 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-cleansing-300" size={20} />
                <div>
                  <p className="font-medium">+1 (510) 362-4147</p>
                  <p className="text-spiritual-300 text-sm">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-cleansing-300" size={20} />
                <div>
                  <p className="font-medium">info@limpiaespiritual.com</p>
                  <p className="text-spiritual-300 text-sm">Respuesta en 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-cleansing-300 mt-1" size={20} />
                <div>
                  <p className="font-medium">Ciudad de México</p>
                  <p className="text-spiritual-300 text-sm">Servicio a domicilio disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cleansing-300">Servicios</h4>
            <ul className="space-y-3 text-spiritual-200">
              <li className="hover:text-white transition-colors cursor-pointer">Limpia de Brujería</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpieza de Mal de Ojo</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpia de Hogar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpia de Negocio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Limpia de Pareja</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consulta Espiritual</li>
            </ul>
            
            <div className="mt-8">
              <h5 className="font-bold mb-3 text-cleansing-300 flex items-center">
                <Clock className="mr-2" size={18} />
                Horarios
              </h5>
              <div className="text-spiritual-200 text-sm space-y-1">
                <p>Lunes - Domingo: 24 horas</p>
                <p className="text-cleansing-300 font-medium">Emergencias: Disponible siempre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="border-t border-spiritual-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Privacy Policy */}
            <div>
              <button
                onClick={() => setShowPrivacy(!showPrivacy)}
                className="flex items-center justify-between w-full text-left font-bold text-lg text-cleansing-300 hover:text-cleansing-200 transition-colors"
              >
                Política de Privacidad
                <span className={`transform transition-transform ${showPrivacy ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {showPrivacy && (
                <div className="mt-4 text-spiritual-200 text-sm space-y-3">
                  <p>
                    <strong>Confidencialidad:</strong> Toda la información personal y espiritual 
                    compartida durante nuestros servicios es estrictamente confidencial.
                  </p>
                  <p>
                    <strong>Protección de datos:</strong> No compartimos, vendemos o distribuimos 
                    información personal de nuestros clientes bajo ninguna circunstancia.
                  </p>
                  <p>
                    <strong>Comunicaciones:</strong> Solo utilizamos su información de contacto 
                    para brindar nuestros servicios y seguimiento post-limpia.
                  </p>
                  <p>
                    <strong>Seguridad:</strong> Implementamos medidas de seguridad para proteger 
                    su información personal y espiritual.
                  </p>
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div>
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="flex items-center justify-between w-full text-left font-bold text-lg text-cleansing-300 hover:text-cleansing-200 transition-colors"
              >
                Términos y Condiciones
                <span className={`transform transition-transform ${showTerms ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {showTerms && (
                <div className="mt-4 text-spiritual-200 text-sm space-y-3">
                  <p>
                    <strong>Servicios espirituales:</strong> Nuestros servicios son de naturaleza 
                    espiritual y complementaria. No sustituyen atención médica profesional.
                  </p>
                  <p>
                    <strong>Resultados:</strong> Los resultados pueden variar según cada persona 
                    y situación. Ofrecemos garantía de satisfacción en nuestros servicios.
                  </p>
                  <p>
                    <strong>Pagos:</strong> Los pagos se realizan antes o al momento del servicio. 
                    Aceptamos efectivo, transferencias y tarjetas.
                  </p>
                  <p>
                    <strong>Cancelaciones:</strong> Las cancelaciones deben realizarse con 24 horas 
                    de anticipación para reembolso completo.
                  </p>
                  <p>
                    <strong>Responsabilidad:</strong> El cliente es responsable de proporcionar 
                    información veraz sobre su situación espiritual.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spiritual-700 bg-spiritual-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-spiritual-300 text-sm mb-4 md:mb-0">
              © 2024 Limpia Espiritual. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-spiritual-300">🔒 Sitio 100% Seguro</span>
              <span className="text-spiritual-300">✅ Servicios Verificados</span>
              <span className="text-spiritual-300">⭐ 15 Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-600 text-white text-center py-3">
        <p className="font-bold">
          🚨 EMERGENCIA ESPIRITUAL: Llama ahora +1 (510) 362-4147 - Atención 24/7
        </p>
      </div>
    </footer>
  )
}

export default Footer