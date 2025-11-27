'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Megaphone, Newspaper, ShoppingCart, Users, Repeat } from 'lucide-react'
import Link from 'next/link'

const useCases = [
  {
    icon: TrendingUp,
    title: 'Крипто-трейдеры',
    description: 'Мониторь 100+ крипто-каналов одновременно. Получай только релевантные сигналы за секунды.',
    gradient: 'from-yellow-400 to-orange-500',
    href: '/cases/crypto-traders'
  },
  {
    icon: Megaphone,
    title: 'SMM-агентства',
    description: 'Автоматизируй поиск контента для репостов. Находи тренды раньше конкурентов.',
    gradient: 'from-pink-400 to-purple-500',
    href: '/cases/smm-agencies'
  },
  {
    icon: Newspaper,
    title: 'Медиа и журналисты',
    description: 'Будь первым с новостями. Агрегируй информацию из 200+ источников за секунды.',
    gradient: 'from-blue-400 to-cyan-500',
    href: '/cases/media-journalists'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Находи выгодные предложения и тренды раньше конкурентов. Автоматизируй поиск товаров.',
    gradient: 'from-green-400 to-emerald-500',
    href: '/cases/ecommerce'
  },
  {
    icon: Users,
    title: 'HR и рекрутеры',
    description: 'Находи таланты быстрее. Автоматизируй поиск кандидатов и мониторинг рынка труда.',
    gradient: 'from-indigo-400 to-blue-500',
    href: '/cases/hr-recruiters'
  },
  {
    icon: Repeat,
    title: 'Реселлеры',
    description: 'Не упускай выгодные сделки. Автоматизируй поиск товаров и услуг для перепродажи.',
    gradient: 'from-purple-400 to-pink-500',
    href: '/cases/resellers'
  }
]

export function UseCases() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Для кого это?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Решение для профессионалов в разных индустриях</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <Link key={index} href={useCase.href}>
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
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
