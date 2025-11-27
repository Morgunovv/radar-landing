import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { TrendingUp, Zap, Target, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CryptoTraders() {
  return (
    <>
      <Head>
        <title>Крипто-трейдеры — Telegram Radar</title>
        <meta name="description" content="Автоматизируй мониторинг крипто-каналов. Получай сигналы о листингах, пампах и важных новостях первым." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-background relative">
        <div className="relative z-10">
          <Navbar />
          <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="py-16 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              </div>
              <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6">
                    <TrendingUp className="w-12 h-12 text-background" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Крипто-трейдеры</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Мониторь 100+ крипто-каналов одновременно. Получай только релевантные сигналы за секунды.
                  </p>
                  <a
                    href="https://t.me/radar_telegram_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-colors"
                  >
                    Начать мониторинг
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-invert max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Проблемы крипто-трейдеров</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Clock className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Упущенные возможности</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Пока ты просматриваешь каналы вручную, другие трейдеры уже входят в позиции. Каждая минута задержки может стоить прибыли.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Target className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Информационный шум</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Сотни сообщений в день, но только единицы действительно важны. Как найти нужное среди всего этого шума?
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Решение с Telegram Radar</h2>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Zap className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Мониторинг 100+ каналов</h3>
                          <p className="text-muted-foreground">
                            Отслеживай все важные крипто-каналы одновременно: новости о листингах, сигналы от аналитиков, обсуждения в сообществах. Ничего не пропустишь.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Target className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Точная фильтрация сигналов</h3>
                          <p className="text-muted-foreground">
                            Настрой мониторинг по ключевым словам: названия монет, термины "листинг", "памп", "дамп", "аирдроп". Получай только релевантные сообщения.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Clock className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Мгновенные уведомления</h3>
                          <p className="text-muted-foreground">
                            Получай сигналы в реальном времени. Первым узнавай о важных событиях и принимай решения быстрее конкурентов.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Примеры использования</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Мониторинг листингов</h4>
                      <p className="text-muted-foreground text-sm">
                        Настрой ключевые слова: "листинг", "listing", "новый токен". Получай уведомления о новых листингах на биржах за секунды.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Отслеживание сигналов</h4>
                      <p className="text-muted-foreground text-sm">
                        Мониторь каналы аналитиков по ключевым словам: названия монет, "buy", "sell", "target". Не пропусти важные сигналы.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Новости и события</h4>
                      <p className="text-muted-foreground text-sm">
                        Отслеживай новости о партнерствах, обновлениях протоколов, важных событиях в экосистеме криптовалют.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <h2 className="text-2xl font-bold mb-4">Начни прямо сейчас</h2>
                  <p className="text-muted-foreground mb-6">
                    Настрой мониторинг крипто-каналов за 3 минуты. Бесплатный тариф доступен навсегда.
                  </p>
                  <a
                    href="https://t.me/radar_telegram_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-colors"
                  >
                    Настроить мониторинг
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </section>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <Link href="/" className="text-primary hover:underline">
                    ← Вернуться на главную
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

