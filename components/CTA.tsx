'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-telegram-600 via-primary-600 to-telegram-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Готов начать экономить время?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Начни с бесплатного тарифа навсегда. Без кредитной карты, без ограничений по времени.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all duration-200"
            >
              <span>Начни сейчас</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
            >
              Посмотреть тарифы
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Бесплатно навсегда</div>
              <div className="text-sm">Начни без ограничений по времени</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3 мин</div>
              <div className="text-sm">Настройка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100% ROI</div>
              <div className="text-sm">Экономия времени и денег</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

