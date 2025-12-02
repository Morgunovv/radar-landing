'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Star, Crown, Check, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/router'
import { getTranslation, getCurrentLanguage } from '@/utils/translations'

const planConfig = [
  {
    name: 'Light',
    key: 'light',
    priceEur: 3,
    features: [50, 50, 'private', 'unlimited', 'copy', 'forward'],
    icon: Zap,
    gradient: 'from-blue-400 to-cyan-500',
    popular: false
  },
  {
    name: 'Medium',
    key: 'medium',
    priceEur: 5,
    features: [100, 100, 'private', 'unlimited', 'copy', 'forward', 'links'],
    icon: Star,
    gradient: 'from-primary to-secondary',
    popular: true
  },
  {
    name: 'Hard',
    key: 'hard',
    priceEur: 9,
    features: [200, 200, 'private', 'unlimited', 'copy', 'forward', 'links', 'priority'],
    icon: Crown,
    gradient: 'from-purple-400 to-pink-500',
    popular: false
  },
  {
    name: 'Rock',
    key: 'rock',
    priceEur: 17,
    features: [500, 200, 'private', 'unlimited', 'copy', 'forward', 'links', 'priority', 'dedicated'],
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
  { code: 'CNY', symbol: '¥', name: 'CNY' }
]

const currencySymbols: Record<string, string> = {
  EUR: '€',
  USD: '$',
  RUR: '₽',
  UAH: '₴',
  CNY: '¥'
}

export function Pricing() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string, params?: Record<string, string>) => getTranslation(lang, key, params)
  
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const [selectedDuration, setSelectedDuration] = useState<1 | 3 | 12>(1)
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false)
  const [isDurationDropdownOpen, setIsDurationDropdownOpen] = useState(false)
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)

  const durationOptions = [
    { months: 1, discount: 0 },
    { months: 3, discount: 10 },
    { months: 12, discount: 30 }
  ]

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
        setIsCurrencyDropdownOpen(false)
      }
      if (!target.closest('.duration-dropdown')) {
        setIsDurationDropdownOpen(false)
      }
    }

    if (isCurrencyDropdownOpen || isDurationDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCurrencyDropdownOpen, isDurationDropdownOpen])

  const formatPrice = (value: number): string => {
    const [integerPart, decimalPart] = value.toFixed(2).split('.')
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
    return decimalPart && decimalPart !== '00' 
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger
  }

  const getPrice = (priceEur: number) => {
    const rate = exchangeRates[selectedCurrency] || 1
    const discount = durationOptions.find(d => d.months === selectedDuration)?.discount || 0
    const discountedPrice = priceEur * (1 - discount / 100)
    const totalPrice = discountedPrice * selectedDuration
    const convertedPrice = totalPrice * rate
    const symbol = currencySymbols[selectedCurrency] || selectedCurrency
    
    // Для 1 месяца округляем до целых, для остальных - до сотых
    if (selectedDuration === 1) {
      return `${symbol}${formatPrice(Math.round(convertedPrice))}`
    }
    return `${symbol}${formatPrice(convertedPrice)}`
  }

  const getPricePerMonth = (priceEur: number) => {
    const rate = exchangeRates[selectedCurrency] || 1
    const discount = durationOptions.find(d => d.months === selectedDuration)?.discount || 0
    const discountedPrice = priceEur * (1 - discount / 100)
    const convertedPrice = discountedPrice * rate
    const symbol = currencySymbols[selectedCurrency] || selectedCurrency
    
    // Для 1 месяца округляем до целых, для остальных - до сотых
    if (selectedDuration === 1) {
      return `${symbol}${formatPrice(Math.round(convertedPrice))}`
    }
    return `${symbol}${formatPrice(convertedPrice)}`
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">{t('pricing.subtitle')}</p>
          
          {/* Выпадающие списки валют и срока */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Выпадающий список валют */}
            <div className="relative inline-block currency-dropdown">
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <span className="text-sm font-medium">
                  {currencies.find(c => c.code === selectedCurrency)?.symbol} {selectedCurrency}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCurrencyDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelectedCurrency(currency.code)
                        setIsCurrencyDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedCurrency === currency.code
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <span className="font-medium">
                        {selectedCurrency === currency.code ? (
                          <span className="text-primary">{currency.symbol} {currency.name}</span>
                        ) : (
                          <span>{currency.symbol} {currency.name}</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Выпадающий список срока */}
            <div className="relative inline-block duration-dropdown">
              <button
                onClick={() => setIsDurationDropdownOpen(!isDurationDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-primary-foreground transition-all duration-300"
              >
                <span className="text-sm font-medium">
                  {t(`pricing.duration.${selectedDuration}`)}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDurationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDurationDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg z-50 overflow-hidden">
                  {durationOptions.map((option) => (
                    <button
                      key={option.months}
                      onClick={() => {
                        setSelectedDuration(option.months as 1 | 3 | 12)
                        setIsDurationDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedDuration === option.months
                          ? 'bg-primary/20 text-primary'
                          : 'text-primary-foreground hover:bg-muted'
                      }`}
                    >
                      <span className="font-medium">
                        {selectedDuration === option.months ? (
                          <span className="text-primary">{t(`pricing.duration.${option.months}`)}</span>
                        ) : (
                          <span>{t(`pricing.duration.${option.months}`)}</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {planConfig.map((plan, index) => {
            const IconComponent = plan.icon
            // Определяем, это каналы или запросы для первого числа
            const firstIsChannels = plan.features[0] > plan.features[1]
            const channelsCount = firstIsChannels ? plan.features[0] : plan.features[1]
            const queriesCount = firstIsChannels ? plan.features[1] : plan.features[0]
            const otherFeatures = plan.features.slice(2) as string[]
            
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
                className={`relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-card border-2 border-primary shadow-2xl scale-105 z-10' 
                    : 'bg-card/50 border border-border/50 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold text-primary-foreground">
                    {t('pricing.popular')}
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                  <IconComponent className="w-6 h-6 text-background" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(`pricing.plans.${plan.key}.subtitle`)}</p>
                
                <div className="mb-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {loading ? '...' : getPrice(plan.priceEur)}
                      </span>
                    </div>
                    {selectedDuration === 1 ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">
                          {loading ? '' : t('pricing.month')}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">
                          {loading ? '' : `${getPricePerMonth(plan.priceEur)} × ${selectedDuration} ${t('pricing.months')}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {t('pricing.plans.features.channels', { count: channelsCount.toString() })}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {t('pricing.plans.features.queries', { count: queriesCount.toString() })}
                    </span>
                  </li>
                  {otherFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {t(`pricing.plans.features.${feature}`)}
                      </span>
                    </li>
                  ))}
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
                  {t('pricing.choosePlan')}
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
          {t('pricing.footer')}
        </motion.p>
      </div>
    </section>
  )
}
