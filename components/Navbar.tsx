'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'

const languages = [
  { code: 'ru', name: 'Русский', flag: '/flags/RU.webp', countryCode: 'RU' },
  { code: 'en', name: 'English', flag: '/flags/GB.webp', countryCode: 'GB' },
  { code: 'es', name: 'Español', flag: '/flags/ES.webp', countryCode: 'ES' }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'ru' | 'en' | 'es'>('ru')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.language-dropdown')) {
        setIsLangDropdownOpen(false)
      }
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isLangDropdownOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangDropdownOpen, isMobileMenuOpen])

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Telegram Radar" 
                className="w-10 h-10 rounded-xl object-contain"
                loading="eager"
              />
              <span className="text-xl md:text-2xl font-bold">Telegram Radar</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Возможности
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Тарифы
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </Link>
            
            {/* Language selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <img 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name}
                  className="w-5 h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback если изображение не загрузилось
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'ru' | 'en' | 'es')
                        setIsLangDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={lang.flag} 
                          alt={lang.name}
                          className="w-5 h-auto object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-11 rounded-md text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Настроить за 3 минуты
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Language selector mobile */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <img 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name}
                  className="w-4 h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'ru' | 'en' | 'es')
                        setIsLangDropdownOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={lang.flag} 
                          alt={lang.name}
                          className="w-5 h-auto object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Burger menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg z-40 md:hidden">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  <Link
                    href="#features"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    Возможности
                  </Link>
                  <Link
                    href="#pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    Тарифы
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    FAQ
                  </Link>
                  <div className="pt-2 mt-2 border-t border-border/50">
                    <a
                      href="https://t.me/radar_telegram_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                    >
                      Начать
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
