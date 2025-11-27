import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { Repeat, Zap, Target, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Resellers() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>{t('pages.cases.resellers.title')}</title>
        <meta name="description" content={t('pages.cases.resellers.description')} />
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
            <section className="py-16 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-400 to-pink-500"></div>
              </div>
              <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 mb-6">
                    <Repeat className="w-12 h-12 text-background" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Реселлеры</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Не упускай выгодные сделки. Автоматизируй поиск товаров и услуг для перепродажи.
                  </p>
                  <a
                    href="https://t.me/radar_telegram_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-colors"
                  >
                    Начать поиск
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-invert max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Вызовы реселлеров</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Clock className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Поиск выгодных предложений</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Нужно постоянно мониторить десятки каналов с предложениями товаров и услуг. Выгодные сделки разбирают за минуты.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Target className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Упущенные возможности</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Пока ты просматриваешь каналы вручную, другие реселлеры уже покупают выгодные товары. Каждая минута задержки - упущенная прибыль.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Решение для реселлеров</h2>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Zap className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Мгновенные уведомления</h3>
                          <p className="text-muted-foreground">
                            Получай уведомления о выгодных предложениях в реальном времени. Реагируй быстрее конкурентов и закрывай сделки первым.
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
                          <h3 className="text-xl font-bold mb-2">Фильтрация по критериям</h3>
                          <p className="text-muted-foreground">
                            Настрой мониторинг по ключевым словам: категории товаров, цены, условия. Получай только релевантные предложения.
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
                          <h3 className="text-xl font-bold mb-2">Мониторинг множества каналов</h3>
                          <p className="text-muted-foreground">
                            Отслеживай десятки каналов одновременно: маркетплейсы, группы продаж, каналы с предложениями. Ничего не пропустишь.
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
                      <h4 className="font-semibold mb-2">Мониторинг распродаж</h4>
                      <p className="text-muted-foreground text-sm">
                        Настрой ключевые слова: "скидка", "распродажа", "выгодно", названия категорий товаров. Получай уведомления о выгодных предложениях.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Поиск оптовых предложений</h4>
                      <p className="text-muted-foreground text-sm">
                        Мониторь каналы с оптовыми предложениями. Находи товары для перепродажи с хорошей маржой.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Отслеживание услуг</h4>
                      <p className="text-muted-foreground text-sm">
                        Мониторь предложения услуг для перепродажи: подписки, курсы, доступы. Находи выгодные партнерства.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <h2 className="text-2xl font-bold mb-4">Начни использовать</h2>
                  <p className="text-muted-foreground mb-6">
                    Настрой мониторинг выгодных предложений за 3 минуты. Бесплатный тариф доступен навсегда.
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

