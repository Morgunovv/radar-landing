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
      
      {/* Animated background decorations with gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-telegram-500/30 to-primary-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary-500/30 to-telegram-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-telegram-400/20 via-primary-400/15 to-telegram-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Additional gradient orbs for depth */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-telegram-400/15 to-primary-400/10 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-primary-400/15 to-telegram-400/10 rounded-full mix-blend-screen filter blur-2xl opacity-40 animate-blob animation-delay-3000"></div>
      </div>
      
      {/* Gradient overlay for text area */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50 pointer-events-none"></div>
      
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
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-telegram-500/20 via-primary-500/20 to-telegram-500/20 rounded-full text-sm font-semibold text-white border border-telegram-400/30">
              ⚡ Мониторинг в реальном времени
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight relative">
            <span className="relative z-10 inline-block">
              <span className="text-white">Не ищи информацию — </span>
              <span className="relative inline-block">
                {/* Gradient background glow behind text - blue to purple */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-3xl opacity-70 -z-10 animate-pulse"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 blur-2xl opacity-50 -z-10"></span>
                {/* Gradient text - cyan to purple */}
                <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  пусть она найдёт тебя
                </span>
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Автоматизируй мониторинг Telegram-каналов. Получай только релевантную информацию в реальном времени.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="https://t.me/radar_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-200 overflow-hidden"
            >
              {/* Gradient background - cyan to green */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-500"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/50 via-blue-300/50 to-emerald-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                Настроить за 3 минуты
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg border-2 border-gray-700 hover:border-gray-600 hover:shadow-lg transform transition-all duration-200"
            >
              Узнать больше
            </motion.a>
          </div>
          
          {/* Footer text in Hero */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <span>🔒</span>
              <span>Безопасно</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span>Бесплатно навсегда</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span>Без кредитной карты</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ease-out cursor-pointer group"
            >
              <motion.div 
                className="text-4xl mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >🎯</motion.div>
              <motion.div 
                className="text-base md:text-lg text-gray-300"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >до 500 каналов мониторинга</motion.div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-400/50 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-out cursor-pointer group"
            >
              <motion.div 
                className="text-4xl mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >⏰</motion.div>
              <motion.div 
                className="text-base md:text-lg text-gray-300"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >Фильтры и тонкие настройки</motion.div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-400/50 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-out cursor-pointer group"
            >
              <motion.div 
                className="text-4xl mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >⚡</motion.div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <motion.div 
                className="text-base md:text-lg text-gray-300"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >релевантности</motion.div>
            </motion.div>
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
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

