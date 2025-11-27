'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Megaphone, Newspaper, ShoppingCart, Users, Repeat } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getTranslation, getCurrentLanguage } from '@/utils/translations'

const useCaseConfig = [
  {
    icon: TrendingUp,
    key: 'crypto',
    gradient: 'from-yellow-400 to-orange-500',
    href: '/cases/crypto-traders'
  },
  {
    icon: Megaphone,
    key: 'marketers',
    gradient: 'from-pink-400 to-purple-500',
    href: '/cases/marketing'
  },
  {
    icon: Newspaper,
    key: 'media',
    gradient: 'from-blue-400 to-cyan-500',
    href: '/cases/media-journalists'
  },
  {
    icon: ShoppingCart,
    key: 'ecommerce',
    gradient: 'from-green-400 to-emerald-500',
    href: '/cases/ecommerce'
  },
  {
    icon: Users,
    key: 'hr',
    gradient: 'from-indigo-400 to-blue-500',
    href: '/cases/hr-recruiters'
  },
  {
    icon: Repeat,
    key: 'resellers',
    gradient: 'from-purple-400 to-pink-500',
    href: '/cases/resellers'
  }
]

export function UseCases() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  
  const getCasePath = (href: string) => {
    // Всегда возвращаем правильный путь к кейсу для текущего языка
    // href уже содержит абсолютный путь типа /cases/crypto-traders
    if (lang === 'ru') {
      return href
    }
    return `/${lang}${href}`
  }
  
  return (
    <section id="usecases" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--gradient-primary)' }}></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--gradient-primary)' }}></div>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('usecases.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('usecases.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseConfig.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <Link key={index} href={getCasePath(useCase.href)}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    scale: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4`}>
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(`usecases.items.${useCase.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`usecases.items.${useCase.key}.description`)}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
