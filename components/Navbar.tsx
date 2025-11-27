'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Send } from 'lucide-react'

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
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Send className="w-4 h-4 text-background" />
              </div>
              <span className="text-xl md:text-2xl font-bold">Telegram Radar</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Возможности
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Тарифы
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </Link>
            <a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-11 rounded-md text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Настроить за 3 минуты
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-10 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm"
            >
              Начать
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
