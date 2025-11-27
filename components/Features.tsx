'use client'

import { motion } from 'framer-motion'
import { Zap, Target, TrendingUp, Clock, Shield, Sparkles } from 'lucide-react'
import { useRouter } from 'next/router'
import { getTranslation, getCurrentLanguage } from '@/utils/translations'

const featureKeys = ['speed', 'personalization', 'roi', 'automation', 'privacy', 'reliability']

const featureConfig = [
  {
    icon: Zap,
    key: 'speed',
    gradient: 'from-primary to-cyan-400'
  },
  {
    icon: Target,
    key: 'personalization',
    gradient: 'from-secondary to-purple-400'
  },
  {
    icon: TrendingUp,
    key: 'roi',
    gradient: 'from-primary to-blue-400'
  },
  {
    icon: Clock,
    key: 'automation',
    gradient: 'from-cyan-400 to-primary'
  },
  {
    icon: Shield,
    key: 'privacy',
    gradient: 'from-purple-400 to-secondary'
  },
  {
    icon: Sparkles,
    key: 'reliability',
    gradient: 'from-blue-400 to-cyan-400'
  }
]

export function Features() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('features.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureConfig.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: 'var(--gradient-primary)' }}></div>
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{t(`features.items.${feature.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`features.items.${feature.key}.description`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
