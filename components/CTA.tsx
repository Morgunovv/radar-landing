'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/router'
import { getTranslation, getCurrentLanguage } from '@/utils/translations'

export function CTA() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  return (
    <section className="py-24 px-4 relative overflow-visible">
      {/* Background decoration */}
      <div className="absolute -inset-24 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--gradient-primary)', transform: 'scale(1.19159)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--gradient-primary)', transform: 'scale(1.22995)' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/20"
        >
          {/* Top icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
            <Sparkles className="w-8 h-8 text-background" />
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          {/* Stats blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">{t('cta.stats.demoDays')}</div>
              <div className="text-sm text-muted-foreground">{t('cta.stats.demoLabel')}</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">{t('cta.stats.setup')}</div>
              <div className="text-sm text-muted-foreground">{t('cta.stats.setupLabel')}</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">ROI</div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://t.me/radar_telegram_bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-11 rounded-md text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {t('cta.button')}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>

          {/* Bottom info labels */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              🔒 {t('cta.labels.secure')}
            </span>
            <span className="flex items-center gap-2">
              ⚡ {t('cta.labels.instant')}
            </span>
            <span className="flex items-center gap-2">
              💳 {t('cta.labels.noCard')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

