import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { Newspaper, Zap, Target, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MediaJournalists() {
  const { t } = useLanguage()
  const router = useRouter()
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radar-bot.com'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/cases/media-journalists`
  const ogImage = `${siteUrl}/logo.png`
  const title = String(t('pages.cases.media.title'))
  const description = String(t('pages.cases.media.description'))

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Telegram Radar" />
        <meta property="og:locale" content={router.locale === 'ru' ? 'ru_RU' : router.locale === 'es' ? 'es_ES' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-400 to-cyan-500"></div>
              </div>
              <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 mb-6">
                    <Newspaper className="w-12 h-12 text-background" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Медиа и журналисты</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Будь первым с новостями. Агрегируй информацию из 200+ источников за секунды.
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

            <div className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-invert max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Проблемы медиа</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Clock className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Скорость публикации</h3>
                      </div>
                      <p className="text-muted-foreground">
                        В медиа скорость - это всё. Пока ты ищешь информацию вручную, конкуренты уже публикуют новости.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Target className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">Множество источников</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Нужно отслеживать сотни каналов и источников. Как не пропустить важную новость среди потока информации?
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Решение для медиа</h2>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Zap className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">Агрегация из 200+ источников</h3>
                          <p className="text-muted-foreground">
                            Мониторь все важные новостные каналы, блоги, официальные источники одновременно. Получай информацию из всех источников в одном месте.
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
                          <h3 className="text-xl font-bold mb-2">Фильтрация по темам</h3>
                          <p className="text-muted-foreground">
                            Настрой мониторинг по ключевым словам: темы, имена, события. Получай только релевантные новости для вашей редакции.
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
                          <h3 className="text-xl font-bold mb-2">Первым с новостями</h3>
                          <p className="text-muted-foreground">
                            Получай уведомления о важных событиях в реальном времени. Публикуй новости раньше конкурентов.
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
                      <h4 className="font-semibold mb-2">Мониторинг новостных каналов</h4>
                      <p className="text-muted-foreground text-sm">
                        Отслеживай все важные новостные каналы по вашей тематике. Получай новости автоматически, без ручного поиска.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Отслеживание событий</h4>
                      <p className="text-muted-foreground text-sm">
                        Настрой мониторинг по ключевым словам: названия событий, имена, места. Узнавай о событиях первым.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">Агрегация информации</h4>
                      <p className="text-muted-foreground text-sm">
                        Собирай информацию из разных источников в один канал. Экономь время на поиске и анализе.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <h2 className="text-2xl font-bold mb-4">Начни использовать</h2>
                  <p className="text-muted-foreground mb-6">
                    Настрой мониторинг новостных источников за 3 минуты. Бесплатный тариф доступен навсегда.
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

