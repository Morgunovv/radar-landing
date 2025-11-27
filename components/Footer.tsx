'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="relative z-0">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Telegram Radar" 
                className="w-10 h-10 rounded-xl object-contain pointer-events-none"
                loading="lazy"
              />
              <span className="text-xl font-bold">Telegram Radar</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Автоматизируй мониторинг Telegram-каналов. Получай только релевантную информацию в реальном времени.
            </p>
          </div>

          <div className="relative z-10">
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors relative z-10">Возможности</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors relative z-10">Тарифы</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">Попробовать</a>
              </li>
            </ul>
          </div>

          <div className="relative z-10">
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors relative z-10">FAQ</Link>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">Telegram бот</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">Документация</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors relative z-10">Связаться с нами</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Telegram Radar. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
