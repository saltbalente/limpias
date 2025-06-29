'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl mystic-title text-gradient">
              ✨ Limpia Espiritual
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-spiritual-600 transition-colors">
              Servicios
            </a>
            <a href="#sintomas" className="text-gray-700 hover:text-spiritual-600 transition-colors">
              Síntomas
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-spiritual-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-spiritual-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-spiritual-600">
              <Phone size={16} />
              <span className="text-sm font-medium">+1 (510) 362-4147</span>
            </div>
            <div className="flex items-center space-x-2 text-spiritual-600">
              <Mail size={16} />
              <span className="text-sm font-medium">info@limpiaespiritual.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-spiritual-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#servicios"
                className="text-gray-700 hover:text-spiritual-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#sintomas"
                className="text-gray-700 hover:text-spiritual-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Síntomas
              </a>
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-spiritual-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-spiritual-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-spiritual-600 mb-2">
                  <Phone size={16} />
                  <span className="text-sm font-medium">+1 (510) 362-4147</span>
                </div>
                <div className="flex items-center space-x-2 text-spiritual-600">
                  <Mail size={16} />
                  <span className="text-sm font-medium">info@limpiaespiritual.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header