'use client'

import Link from 'next/link'
import { Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Send className="w-4 h-4 text-background" />
              </div>
              <span className="text-xl font-bold">Telegram Radar</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Автоматизируй мониторинг Telegram-каналов. Получай только релевантную информацию в реальном времени.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Попробовать</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram бот</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Документация</a>
              </li>
              <li>
                <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Связаться с нами</a>
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
