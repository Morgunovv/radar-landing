'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Send, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const languages = [
  { code: 'ru', name: 'Русский', flag: '/flags/RU.webp', countryCode: 'RU' },
  { code: 'en', name: 'English', flag: '/flags/GB.webp', countryCode: 'GB' },
  { code: 'es', name: 'Español', flag: '/flags/ES.webp', countryCode: 'ES' }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
    }

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangDropdownOpen])

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

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
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.features')}
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.pricing')}
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.faq')}
            </Link>
            
            {/* Language selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <Image 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name}
                  width={20}
                  height={15}
                  className="w-5 h-auto object-contain"
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
                        <Image 
                          src={lang.flag} 
                          alt={lang.name}
                          width={20}
                          height={15}
                          className="w-5 h-auto object-contain"
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
              {t('navbar.setup')}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* Language selector mobile */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="inline-flex items-center gap-1 px-2 py-1.5 rounded-md bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <Image 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name}
                  width={16}
                  height={12}
                  className="w-4 h-auto object-contain"
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
                        <Image 
                          src={lang.flag} 
                          alt={lang.name}
                          width={20}
                          height={15}
                          className="w-5 h-auto object-contain"
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
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-10 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm"
            >
              {t('navbar.start')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
