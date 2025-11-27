'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'var(--gradient-primary)', transform: 'scale(1.12772)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'var(--gradient-primary)', transform: 'scale(1.1533)' }}></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t('hero.title')}
            <br className="mt-2" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
              <span className="absolute inset-0 blur-xl opacity-50" style={{ background: 'var(--gradient-primary)' }}></span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.3 },
                y: { duration: 0.5, delay: 0.3 },
                scale: { duration: 0.3, ease: "easeOut" }
              }}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.channels')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.35 },
                y: { duration: 0.5, delay: 0.35 },
                scale: { duration: 0.3, ease: "easeOut" }
              }}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.time')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.4 },
                y: { duration: 0.5, delay: 0.4 },
                scale: { duration: 0.3, ease: "easeOut" }
              }}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <Zap className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.relevance')}</div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-11 rounded-md text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              {t('hero.cta.setup')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors border bg-background hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              {t('hero.cta.learnMore')}
            </motion.a>
          </motion.div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            {t('hero.footer')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
