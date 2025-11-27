'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Star, Crown, Check, ChevronDown } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    subtitle: 'Попробуй возможности',
    price: 'Бесплатно',
    priceEur: 0,
    period: 'навсегда',
    features: [
      'До 5 каналов мониторинга',
      'До 10 ключевых запросов',
      'Базовая поддержка'
    ],
    icon: Zap,
    gradient: 'from-gray-400 to-gray-600',
    popular: false
  },
  {
    name: 'Light',
    subtitle: 'Для начинающих',
    price: '€3',
    priceEur: 3,
    period: '/ мес',
    periodText: 'в месяц',
    features: [
      'До 50 каналов мониторинга',
      'До 50 ключевых запросов',
      'Мониторинг закрытых каналов',
      'Безлимит групп для пересылки',
      'Копирование старых сообщений',
      'Форвард или копипаст постов'
    ],
    icon: Zap,
    gradient: 'from-blue-400 to-cyan-500',
    popular: false
  },
  {
    name: 'Medium',
    subtitle: 'Самый популярный',
    price: '€5',
    priceEur: 5,
    period: '/ мес',
    periodText: 'в месяц',
    features: [
      'До 100 каналов мониторинга',
      'До 100 ключевых запросов',
      'Мониторинг закрытых каналов',
      'Безлимит групп для пересылки',
      'Копирование старых сообщений',
      'Форвард или копипаст постов',
      'Управление ссылками на источник'
    ],
    icon: Star,
    gradient: 'from-primary to-secondary',
    popular: true
  },
  {
    name: 'Hard',
    subtitle: 'Для профессионалов',
    price: '€9',
    priceEur: 9,
    period: '/ мес',
    periodText: 'в месяц',
    features: [
      'До 200 каналов мониторинга',
      'До 200 ключевых запросов',
      'Мониторинг закрытых каналов',
      'Безлимит групп для пересылки',
      'Копирование старых сообщений',
      'Форвард или копипаст постов',
      'Управление ссылками на источник',
      'Приоритетная поддержка'
    ],
    icon: Crown,
    gradient: 'from-purple-400 to-pink-500',
    popular: false
  },
  {
    name: 'Rock',
    subtitle: 'Максимальная мощность',
    price: '€17',
    priceEur: 17,
    period: '/ мес',
    periodText: 'в месяц',
    features: [
      'До 500 каналов мониторинга',
      'До 200 ключевых запросов',
      'Мониторинг закрытых каналов',
      'Безлимит групп для пересылки',
      'Копирование старых сообщений',
      'Форвард или копипаст постов',
      'Управление ссылками на источник',
      'Приоритетная поддержка',
      'Dedicated support'
    ],
    icon: Crown,
    gradient: 'from-yellow-400 to-orange-500',
    popular: false
  }
]

const currencies = [
  { code: 'EUR', symbol: '€', name: 'EUR' },
  { code: 'USD', symbol: '$', name: 'USD' },
  { code: 'RUR', symbol: '₽', name: 'RUR' },
  { code: 'UAH', symbol: '₴', name: 'UAH' },
  { code: 'CNY', symbol: '¥', name: 'CNY' },
  { code: 'CAD', symbol: 'C$', name: 'CAD' }
]

const currencySymbols: Record<string, string> = {
  EUR: '€',
  USD: '$',
  RUR: '₽',
  UAH: '₴',
  CNY: '¥',
  CAD: 'C$'
}

export function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true)
      try {
        // Используем exchangerate-api.com (бесплатный, не требует API ключа)
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
        const data = await response.json()
        
        const rates: Record<string, number> = { EUR: 1 }
        // Получаем все нужные валюты
        if (data.rates.USD) rates.USD = data.rates.USD
        if (data.rates.UAH) rates.UAH = data.rates.UAH
        if (data.rates.CNY) rates.CNY = data.rates.CNY
        if (data.rates.CAD) rates.CAD = data.rates.CAD
        // RUR это старая валюта, используем RUB
        if (data.rates.RUB) rates.RUR = data.rates.RUB
        
        setExchangeRates(rates)
      } catch (error) {
        console.error('Error fetching exchange rates:', error)
        // Fallback к курсам по умолчанию
        setExchangeRates({ EUR: 1, USD: 1.1, RUR: 100, UAH: 40, CNY: 7.5, CAD: 1.5 })
      } finally {
        setLoading(false)
      }
    }

    fetchExchangeRates()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.currency-dropdown')) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const getPrice = (priceEur: number) => {
    if (priceEur === 0) return 'Бесплатно'
    
    const rate = exchangeRates[selectedCurrency] || 1
    const convertedPrice = Math.round(priceEur * rate)
    
    // Для CAD используем формат: CAD перед числом
    if (selectedCurrency === 'CAD') {
      return `CAD ${convertedPrice}`
    }
    
    const symbol = currencySymbols[selectedCurrency] || selectedCurrency
    return `${symbol}${convertedPrice}`
  }

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Выбери свой план</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">Начни бесплатно. Масштабируйся по мере роста.</p>
          
          {/* Выпадающий список валют */}
          <div className="relative inline-block currency-dropdown">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
            >
              <span className="text-sm font-medium">
                {selectedCurrency === 'CAD' ? 'CAD' : `${currencies.find(c => c.code === selectedCurrency)?.symbol} ${selectedCurrency}`}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setSelectedCurrency(currency.code)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      selectedCurrency === currency.code
                        ? 'bg-primary/20 text-primary'
                        : 'text-primary-foreground hover:bg-muted'
                    }`}
                  >
                    <span className="font-medium">
                      {currency.code === 'CAD' ? (
                        selectedCurrency === currency.code ? (
                          <span className="text-primary">CAD</span>
                        ) : (
                          <span>CAD</span>
                        )
                      ) : (
                        selectedCurrency === currency.code ? (
                          <span className="text-primary">{currency.symbol} {currency.name}</span>
                        ) : (
                          <span>{currency.symbol} {currency.name}</span>
                        )
                      )}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: plan.popular ? 1.08 : 1.05, y: -5 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.3, ease: "easeOut" }
                }}
                className={`relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-card border-2 border-primary shadow-2xl scale-105 lg:scale-110 z-10' 
                    : 'bg-card/50 border border-border/50 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold text-primary-foreground">
                    Популярный
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                  <IconComponent className="w-6 h-6 text-background" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.priceEur === 0 ? (
                      <span className="text-4xl font-bold">Бесплатно</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          {loading ? '...' : getPrice(plan.priceEur)}
                        </span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </>
                    )}
                  </div>
                  {plan.periodText && (
                    <p className="text-sm text-muted-foreground mt-1">{plan.periodText}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => {
                    // Выделяем числа жирным
                    const parts = feature.split(/(\d+)/)
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {parts.map((part, j) => 
                            /^\d+$/.test(part) ? <strong key={j}>{part}</strong> : part
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <a
                  href="https://t.me/radar_telegram_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-card hover:bg-muted text-primary-foreground'
                  }`}
                >
                  {plan.price === 'Бесплатно' ? 'Попробовать' : 'Выбрать план'}
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Бесплатный тариф навсегда • Платные тарифы без привязки карты
        </motion.p>
      </div>
    </section>
  )
}
