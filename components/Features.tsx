'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Мгновенные уведомления',
    description: 'Получай важные сообщения первым. Мониторинг в реальном времени без задержек.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🎯',
    title: 'Точная фильтрация',
    description: 'Только релевантный контент по твоим ключевым словам. Умная фильтрация спама.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '⏰',
    title: 'Экономия времени',
    description: 'Автоматизируй рутину. Экономь 10-15 часов в неделю на поиске информации.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '🔒',
    title: 'Безопасность',
    description: 'Шифрование сессий. Твои данные в безопасности. Поддержка приватных каналов.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: '📊',
    title: 'Аналитика и статистика',
    description: 'Отслеживай эффективность. Статистика по каналам и ключевым словам.',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: '🤖',
    title: 'Автоматическая публикация',
    description: 'Публикуй найденный контент в свои каналы автоматически. Один клик — готово.',
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: '🔍',
    title: 'Мощный поиск',
    description: 'Регулярные выражения, точное совпадение, регистр — гибкие настройки поиска.',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    icon: '🔽',
    title: 'Умные фильтры',
    description: 'Фильтрация по количеству реакций, комментариев, дате и другим параметрам.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: '🔔',
    title: 'Персонализация',
    description: 'Настрой всё под себя. Приоритеты каналов, расписание, форматы уведомлений.',
    color: 'from-violet-400 to-purple-500'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-800 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/features-bg.svg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Всё что нужно для{' '}
            <span className="bg-gradient-to-r from-telegram-400 to-primary-400 bg-clip-text text-transparent">
              эффективного мониторинга
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мощные инструменты для автоматизации работы с Telegram-каналами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group"
              >
                <div className="h-full p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl border border-gray-700 hover:border-primary-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 ease-out cursor-pointer">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

