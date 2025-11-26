'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      </div>
      
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-telegram-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-telegram-500/20 to-primary-500/20 rounded-full text-sm font-semibold text-telegram-300 border border-telegram-400/30">
              🚀 Автоматизируй мониторинг Telegram-каналов
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Не ищи информацию —{' '}
            <span className="bg-gradient-to-r from-telegram-400 via-primary-400 to-telegram-400 bg-clip-text text-transparent">
              пусть она найдёт тебя
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Мониторь 100+ Telegram-каналов одновременно. Получай только релевантные сообщения по ключевым словам за секунды, а не часы поиска.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-telegram-500 to-primary-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-200"
            >
              <span className="relative z-10 flex items-center">
                Бесплатно навсегда
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transform transition-all duration-200"
            >
              Настроить за 3 минуты
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-sm md:text-base text-gray-300">Каналов одновременно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-sm md:text-base text-gray-300">Времени на поиск</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-300">Релевантности</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-300">Мониторинг</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

