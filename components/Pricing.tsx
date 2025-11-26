'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Бесплатный',
    price: 'Бесплатно',
    period: 'навсегда',
    description: 'Бесплатный доступ навсегда с базовыми возможностями',
    features: [
      'Мониторинг 5 каналов',
      'До 10 ключевых запросов',
      'Фильтр сообщений'
    ],
    cta: 'Начать бесплатно',
    popular: false,
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Light',
    price: '3€',
    period: 'в месяц',
    description: 'Идеально для старта и небольших проектов',
    features: [
      'Мониторинг до 50 каналов',
      'До 50 ключевых запросов',
      'Мониторинг закрытых чатов, групп и каналов',
      'Неограниченное количество групп и сообщений',
      'Копирование старых сообщений',
      'Отправка с фильтром или без',
      'Форвард или копипаст постов',
      'Добавить/скрыть ссылку на источник'
    ],
    cta: 'Выбрать план',
    popular: false,
    color: 'from-telegram-400 to-telegram-600'
  },
  {
    name: 'Medium',
    price: '5€',
    period: 'в месяц',
    description: 'Для профессионалов и растущих проектов',
    features: [
      'Мониторинг до 100 каналов',
      'До 50 ключевых запросов',
      'Мониторинг закрытых чатов, групп и каналов',
      'Неограниченное количество групп и сообщений',
      'Копирование старых сообщений',
      'Отправка с фильтром или без',
      'Форвард или копипаст постов',
      'Добавить/скрыть ссылку на источник'
    ],
    cta: 'Выбрать план',
    popular: true,
    color: 'from-primary-400 to-primary-600'
  },
  {
    name: 'Hard',
    price: '9€',
    period: 'в месяц',
    description: 'Для агентств и крупных проектов',
    features: [
      'Мониторинг до 200 каналов',
      'До 200 ключевых запросов',
      'Мониторинг закрытых чатов, групп и каналов',
      'Неограниченное количество групп и сообщений',
      'Копирование старых сообщений',
      'Отправка с фильтром или без',
      'Форвард или копипаст постов',
      'Добавить/скрыть ссылку на источник'
    ],
    cta: 'Выбрать план',
    popular: false,
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Rock',
    price: '17€',
    period: 'в месяц',
    description: 'Для enterprise и максимального масштаба',
    features: [
      'Мониторинг до 500 каналов',
      'До 200 ключевых запросов',
      'Мониторинг закрытых чатов, групп и каналов',
      'Неограниченное количество групп и сообщений',
      'Копирование старых сообщений',
      'Отправка с фильтром или без',
      'Форвард или копипаст постов',
      'Добавить/скрыть ссылку на источник'
    ],
    cta: 'Выбрать план',
    popular: false,
    color: 'from-yellow-400 to-orange-600'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-800 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/pricing-bg.svg')] bg-cover bg-center opacity-10"></div>
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
            Простые и прозрачные{' '}
            <span className="bg-gradient-to-r from-telegram-400 to-primary-400 bg-clip-text text-transparent">
              тарифы
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выбери план, который подходит именно тебе. Начни с бесплатного тарифа навсегда.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: plan.popular ? 1.08 : 1.05, y: -5 }}
              transition={{ 
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.3, ease: "easeOut" }
              }}
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
                  ? 'border-primary-400 bg-gradient-to-br from-primary-900/50 to-gray-800 shadow-2xl hover:bg-primary-900/60' 
                  : 'border-gray-700 bg-gray-800 hover:border-primary-500 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-primary-500/20'
              } transition-all duration-300 ease-out cursor-pointer flex flex-col`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.price !== 'Бесплатно' && (
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    )}
                  </div>
                  {plan.period && plan.price === 'Бесплатно' && (
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  )}
                  <p className="text-gray-300 mt-3 text-sm">{plan.description}</p>
                </div>

                <ul className="flex-grow space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-lg mr-2 flex-shrink-0 text-primary-400`}>✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/radar_telegram_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:-translate-y-0.5`
                      : 'bg-gray-700 text-white hover:bg-gray-600'
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
          <p className="text-gray-300">
            Все тарифы можно изменить или отменить в любой момент. Нужен индивидуальный план?{' '}
            <a href="mailto:support@example.com" className="text-primary-400 hover:text-primary-300 font-semibold">
              Свяжитесь с нами
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

