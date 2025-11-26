'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Telegram Radar" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-telegram-600 to-primary-600 bg-clip-text text-transparent">
                Telegram Radar
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Возможности
            </Link>
            <Link href="#use-cases" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Кому подходит
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors font-medium">
              Тарифы
            </Link>
            <a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-telegram-500 to-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Настроить за 3 минуты
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-telegram-500 to-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Начать
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

