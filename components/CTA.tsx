'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-telegram-500 to-primary-500"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-telegram-500 to-primary-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-primary-500/20"
        >
          {/* Top icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-telegram-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Готов автоматизировать мониторинг?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Начни с бесплатного тарифа навсегда. Без кредитной карты, без ограничений по времени.
          </p>

          {/* Stats blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-400 mb-1">Бесплатно навсегда</div>
              <div className="text-sm text-gray-400">Без ограничений</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-400 mb-1">3 мин</div>
              <div className="text-sm text-gray-400">Настройка</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">ROI</div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://t.me/radar_telegram_bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors h-11 rounded-md text-lg px-10 py-7 bg-gradient-to-r from-primary-500 to-telegram-500 hover:from-primary-600 hover:to-telegram-600 text-white shadow-lg hover:shadow-xl"
          >
            Начни сейчас
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>

          {/* Bottom info labels */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              🔒 Безопасно
            </span>
            <span className="flex items-center gap-2">
              ⚡ Мгновенный доступ
            </span>
            <span className="flex items-center gap-2">
              💳 Без кредитной карты
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

