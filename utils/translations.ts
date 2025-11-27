import ruTranslations from '../locales/ru/common.json'
import enTranslations from '../locales/en/common.json'
import esTranslations from '../locales/es/common.json'

export type Language = 'ru' | 'en' | 'es'

const translations: Record<Language, any> = {
  ru: ruTranslations,
  en: enTranslations,
  es: esTranslations
}

export function getTranslation(lang: Language, key: string, params?: Record<string, string>): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
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

export function getCurrentLanguage(pathname: string): Language {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/es')) return 'es'
  return 'ru'
}

