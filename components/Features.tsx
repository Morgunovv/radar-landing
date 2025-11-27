'use client'

import { motion } from 'framer-motion'
import { Zap, Target, TrendingUp, Clock, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Скорость = Деньги',
    description: 'Первым узнавай о важных событиях. Автоматическая фильтрация по вашим критериям. 0 задержек - мониторинг в реальном времени.',
    gradient: 'from-primary to-cyan-400'
  },
  {
    icon: Target,
    title: 'Персонализация',
    description: 'Мониторинг только по вашим ключевым словам. Умная фильтрация спама и нерелевантного контента. Настройка приоритетов каналов.',
    gradient: 'from-secondary to-purple-400'
  },
  {
    icon: TrendingUp,
    title: 'ROI',
    description: 'Экономия 10-15 часов в неделю = больше времени на анализ. Не пропускай прибыльные сигналы. Конкурентное преимущество через скорость реакции.',
    gradient: 'from-primary to-blue-400'
  },
  {
    icon: Clock,
    title: 'Автоматизация',
    description: 'Автоматизация 80% рутинной работы. Фокус на стратегии, а не на поиске контента. Масштабирование без найма дополнительных сотрудников.',
    gradient: 'from-cyan-400 to-primary'
  },
  {
    icon: Shield,
    title: 'Приватность',
    description: 'Поддержка мониторинга приватных каналов через личный аккаунт. Безопасное хранение сессий с шифрованием. Полный контроль над данными.',
    gradient: 'from-purple-400 to-secondary'
  },
  {
    icon: Sparkles,
    title: 'Надёжность',
    description: 'Автоматическая обработка ошибок. Retry механизмы для стабильной работы. Мониторинг и логирование всех операций.',
    gradient: 'from-blue-400 to-cyan-400'
  }
]

export function Features() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ключевые преимущества</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Всё, что нужно для эффективного мониторинга Telegram</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
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
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
