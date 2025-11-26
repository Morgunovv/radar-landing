'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    icon: '📈',
    title: 'Крипто-трейдеры',
    description: 'Мониторь 100+ крипто-каналов. Получай сигналы о листингах, пампах и важных новостях первым.',
    benefits: ['Скорость = деньги', 'Не пропускай прибыльные сигналы', 'Экономия 10+ часов в неделю'],
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
  },
  {
    icon: '👥',
    title: 'SMM-агентства',
    description: 'Автоматизируй поиск контента для репостов. Находи тренды и упоминания брендов раньше конкурентов.',
    benefits: ['Автоматический сбор контента', 'Конкурентная разведка', 'Экономия 80% времени'],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
  },
  {
    icon: '📰',
    title: 'Медиа и новости',
    description: 'Будь первым с новостями. Агрегируй информацию из 200+ источников за секунды.',
    benefits: ['Первым публикуй новости', 'Широкий охват источников', 'Автоматизация редакторской работы'],
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-gradient-to-br from-red-50 to-pink-50'
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Находи выгодные предложения и тренды раньше конкурентов. Автоматизируй поиск товаров.',
    benefits: ['Поиск выгодных сделок', 'Тренд-вотчинг', 'Конкурентная разведка'],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
  },
  {
    icon: '💼',
    title: 'HR и рекрутеры',
    description: 'Находи таланты быстрее. Автоматизируй поиск кандидатов и мониторинг рынка труда.',
    benefits: ['Поиск кандидатов', 'Рыночная аналитика', 'Проактивный рекрутинг'],
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50'
  },
  {
    icon: '💰',
    title: 'Реселлеры',
    description: 'Не упускай выгодные сделки. Автоматизируй поиск товаров и услуг для перепродажи.',
    benefits: ['Мгновенные уведомления', 'Максимизация прибыли', 'Персонализация'],
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
  },
  {
    icon: '👤',
    title: 'Блогеры',
    description: 'Находи контент для постов автоматически. Будь в тренде, не тратя часы на поиск.',
    benefits: ['Автоматический сбор контента', 'Тренд-вотчинг', 'Отслеживание упоминаний'],
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50'
  }
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Кому подходит{' '}
            <span className="bg-gradient-to-r from-telegram-600 to-primary-600 bg-clip-text text-transparent">
              Telegram Radar?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Независимо от твоей ниши — если тебе нужно отслеживать Telegram-каналы, мы поможем
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className={`h-full p-6 rounded-2xl border-2 border-transparent hover:border-primary-200 ${useCase.bgColor} transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${useCase.color} p-3 mb-4 transform group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center`}>
                    <span className="text-3xl">{useCase.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

