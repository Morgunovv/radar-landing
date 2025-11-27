'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { getTranslation, getCurrentLanguage, Language } from '@/utils/translations'

export function Footer() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string, params?: Record<string, string>) => getTranslation(lang, key, params)
  
  const getLanguagePath = (langCode: Language) => {
    if (langCode === 'ru') return ''
    return `/${langCode}`
  }
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="relative z-0">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Telegram Radar" 
                className="w-10 h-10 rounded-xl object-contain pointer-events-none"
                loading="lazy"
              />
              <span className="text-xl font-bold">Telegram Radar</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div className="relative z-10">
            <h4 className="font-semibold mb-4">{t('footer.product.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${getLanguagePath(lang)}#features`} className="hover:text-primary transition-colors relative z-10">{t('footer.product.features')}</Link>
              </li>
              <li>
                <Link href={`${getLanguagePath(lang)}#pricing`} className="hover:text-primary transition-colors relative z-10">{t('footer.product.pricing')}</Link>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">{t('footer.product.try')}</a>
              </li>
            </ul>
          </div>

          <div className="relative z-10">
            <h4 className="font-semibold mb-4">{t('footer.support.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${getLanguagePath(lang)}/faq`} className="hover:text-primary transition-colors relative z-10">{t('footer.support.faq')}</Link>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">{t('footer.support.bot')}</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">{t('footer.support.docs')}</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">{t('footer.support.contact')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t('footer.copyright', { year: new Date().getFullYear().toString() })}</p>
          <div className="flex gap-6">
            <Link href={`${getLanguagePath(lang)}/privacy-policy`} className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
            <Link href={`${getLanguagePath(lang)}/terms`} className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
