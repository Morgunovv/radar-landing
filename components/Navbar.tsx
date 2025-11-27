'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { getTranslation, getCurrentLanguage, Language } from '@/utils/translations'

const languages = [
  { code: 'ru', name: 'Русский', flag: '/flags/RU.webp', countryCode: 'RU' },
  { code: 'en', name: 'English', flag: '/flags/GB.webp', countryCode: 'GB' },
  { code: 'es', name: 'Español', flag: '/flags/ES.webp', countryCode: 'ES' }
]

export function Navbar() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  
  const getLanguagePath = (langCode: Language) => {
    // Получаем текущий путь без префикса языка
    let currentPath = router.pathname
    
    // Убираем префиксы языков, если они есть
    if (currentPath.startsWith('/en/')) {
      currentPath = currentPath.substring(3) // убираем '/en'
    } else if (currentPath.startsWith('/es/')) {
      currentPath = currentPath.substring(3) // убираем '/es'
    } else if (currentPath === '/en') {
      currentPath = '/'
    } else if (currentPath === '/es') {
      currentPath = '/'
    }
    
    // Если переключаемся на русский, возвращаем путь без префикса
    if (langCode === 'ru') {
      return currentPath
    }
    
    // Для других языков добавляем префикс
    return `/${langCode}${currentPath === '/' ? '' : currentPath}`
  }

  const getHomePath = () => {
    // Всегда возвращаем путь к главной странице для текущего языка
    if (lang === 'ru') {
      return '/'
    }
    return `/${lang}`
  }

  const getFAQPath = () => {
    // Всегда возвращаем правильный путь к FAQ для текущего языка
    if (lang === 'ru') {
      return '/faq'
    }
    return `/${lang}/faq`
  }

  const getUseCasesPath = () => {
    // Всегда возвращаем путь к блоку UseCases (Для кого) на главной странице
    return `${getHomePath()}#usecases`
  }

  const getPricingPath = () => {
    // Всегда возвращаем путь к блоку Pricing на главной странице
    return `${getHomePath()}#pricing`
  }

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

  const currentLanguage = languages.find(l => l.code === lang) || languages[0]

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
            <Link href={getUseCasesPath()} className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.forWhom')}
            </Link>
            <Link href={getPricingPath()} className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.pricing')}
            </Link>
            <Link href={getFAQPath()} className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t('navbar.faq')}
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
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={getLanguagePath(l.code as Language)}
                      onClick={() => setIsLangDropdownOpen(false)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors block ${
                        lang === l.code
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={l.flag} 
                          alt={l.name}
                          className="w-5 h-auto object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                        <span className="font-medium">{l.name}</span>
                      </div>
                    </Link>
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
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={getLanguagePath(l.code as Language)}
                      onClick={() => setIsLangDropdownOpen(false)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors block ${
                        lang === l.code
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img 
                          src={l.flag} 
                          alt={l.name}
                          className="w-5 h-auto object-contain"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                        <span className="font-medium">{l.name}</span>
                      </div>
                    </Link>
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
                    href={getUseCasesPath()}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    {t('navbar.forWhom')}
                  </Link>
                  <Link
                    href={getPricingPath()}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    {t('navbar.pricing')}
                  </Link>
                  <Link
                    href={getFAQPath()}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors font-medium"
                  >
                    {t('navbar.faq')}
                  </Link>
                  <div className="pt-2 mt-2 border-t border-border/50">
                    <a
                      href="https://t.me/radar_telegram_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                    >
                      {t('navbar.start')}
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
