'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ru' | 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Импортируем переводы статически
import ruTranslations from '../locales/ru/common.json'
import enTranslations from '../locales/en/common.json'
import esTranslations from '../locales/es/common.json'

const translations: Record<Language, any> = {
  ru: ruTranslations,
  en: enTranslations,
  es: esTranslations
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Определяем язык браузера
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language | null
      if (savedLanguage && ['ru', 'en', 'es'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
      } else {
        const browserLang = navigator.language.split('-')[0]
        if (browserLang === 'en') {
          setLanguageState('en')
        } else if (browserLang === 'es') {
          setLanguageState('es')
        } else {
          setLanguageState('ru')
        }
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string, params?: Record<string, string>): string => {
    if (!isClient) return key
    
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    if (typeof value !== 'string') {
      return key
    }
    
    // Заменяем параметры
    if (params) {
      return Object.entries(params).reduce((str, [param, val]) => {
        return str.replace(`{{${param}}}`, val)
      }, value)
    }
    
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

