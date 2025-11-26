'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Trial',
    price: 'Бесплатно',
    period: '7 дней',
    description: 'Попробуй все возможности без ограничений',
    features: [
      'До 5 каналов мониторинга',
      'До 10 ключевых слов',
      '1 канал публикации',
      'До 50 сообщений в день',
      'Базовая поддержка'
    ],
    cta: 'Начать бесплатно',
    popular: false,
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Light',
    price: '$29',
    period: 'в месяц',
    description: 'Идеально для старта и небольших проектов',
    features: [
      'До 15 каналов',
      'До 30 ключевых слов',
      'До 2 каналов публикации',
      'Неограниченное количество сообщений',
      'Приоритетная обработка',
      'Email поддержка'
    ],
    cta: 'Выбрать план',
    popular: false,
    color: 'from-telegram-400 to-telegram-600'
  },
  {
    name: 'Medium',
    price: '$99',
    period: 'в месяц',
    description: 'Для профессионалов и растущих проектов',
    features: [
      'До 50 каналов',
      'До 100 ключевых слов',
      'До 5 каналов публикации',
      'API доступ',
      'Приоритетная обработка',
      'Приоритетная поддержка',
      'Расширенная аналитика'
    ],
    cta: 'Выбрать план',
    popular: true,
    color: 'from-primary-400 to-primary-600'
  },
  {
    name: 'Hard',
    price: '$199',
    period: 'в месяц',
    description: 'Для агентств и крупных проектов',
    features: [
      'До 150 каналов',
      'До 300 ключевых слов',
      'До 15 каналов публикации',
      'Полный API доступ',
      'Максимальный приоритет',
      'Dedicated support',
      'Кастомные интеграции'
    ],
    cta: 'Выбрать план',
    popular: false,
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Rock',
    price: '$399',
    period: 'в месяц',
    description: 'Для enterprise и максимального масштаба',
    features: [
      'Безлимит каналов',
      'Безлимит ключевых слов',
      'Безлимит каналов публикации',
      'Полный API + интеграции',
      'Максимальный приоритет',
      'Dedicated account manager',
      'SLA гарантии',
      'Кастомные решения'
    ],
    cta: 'Связаться с нами',
    popular: false,
    color: 'from-yellow-400 to-orange-600'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Простые и прозрачные{' '}
            <span className="bg-gradient-to-r from-telegram-600 to-primary-600 bg-clip-text text-transparent">
              тарифы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери план, который подходит именно тебе. Все планы можно протестировать 7 дней бесплатно.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary-500 to-telegram-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span>⚡</span>
                    Популярный
                  </span>
                </div>
              )}
              
              <div className={`h-full p-6 rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-white shadow-2xl' 
                  : 'border-gray-200 bg-white hover:border-primary-200 hover:shadow-xl'
              } transition-all duration-300 flex flex-col`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Бесплатно' && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                  {plan.period && plan.price !== 'Бесплатно' && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                  <p className="text-gray-600 mt-3 text-sm">{plan.description}</p>
                </div>

                <ul className="flex-grow space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-lg mr-2 flex-shrink-0`}>✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/your_bot_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:-translate-y-0.5`
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Все тарифы можно изменить или отменить в любой момент. Нужен индивидуальный план?{' '}
            <a href="mailto:support@example.com" className="text-primary-600 hover:text-primary-700 font-semibold">
              Свяжитесь с нами
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

