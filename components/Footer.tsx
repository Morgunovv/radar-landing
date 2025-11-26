'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Telegram Radar" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Telegram Radar</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Автоматизируй мониторинг Telegram-каналов. Получай только релевантные сообщения по ключевым словам.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/radar_telegram_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-telegram-400 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.433 6.763c-.107.478-.38.594-.77.37l-2.136-1.57-1.03.991c-.116.116-.214.214-.439.214l.155-2.192 3.944-3.566c.172-.153-.037-.238-.265-.088l-4.87 3.067-2.1-.654c-.458-.142-.469-.458.095-.696l8.227-3.17c.381-.148.715.09.595.531z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Возможности</a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">Кому подходит</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Тарифы</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Документация</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@example.com" className="hover:text-white transition-colors">Связаться с нами</a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Статус системы</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Безопасность</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Telegram Radar. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

