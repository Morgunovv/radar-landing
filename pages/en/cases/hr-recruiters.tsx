import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { Users, Zap, Target, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { getTranslation, getCurrentLanguage, Language } from '@/utils/translations'

export default function HRRecruiters() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  
  const getLanguagePath = (langCode: Language) => {
    if (langCode === 'ru') return ''
    return `/${langCode}`
  }
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radar-bot.com'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/en/cases/hr-recruiters`
  const ogImage = `${siteUrl}/logo.png`
  const title = String(t('pages.cases.hr.title'))
  const description = String(t('pages.cases.hr.description'))

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
        <meta property="og:locale" content={lang === 'ru' ? 'ru_RU' : lang === 'es' ? 'es_ES' : 'en_US'} />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en/cases/hr-recruiters`} />
        <link rel="alternate" hrefLang="ru" href={`${siteUrl}/cases/hr-recruiters`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es/cases/hr-recruiters`} />
        
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-indigo-400 to-blue-500"></div>
              </div>
              <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 mb-6">
                    <Users className="w-12 h-12 text-background" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('pages.cases.hr.hero.title')}</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    {t('pages.cases.hr.hero.subtitle')}
                  </p>
                  <a
                    href="https://t.me/radar_telegram_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-colors"
                  >
                    {t('pages.cases.hr.hero.button')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </section>

            <div className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-invert max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">{t('pages.cases.hr.problems.title')}</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Clock className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">{t('pages.cases.hr.problems.candidates.title')}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {t('pages.cases.hr.problems.candidates.description')}
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-destructive/20">
                          <Target className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="text-xl font-bold">{t('pages.cases.hr.problems.analytics.title')}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {t('pages.cases.hr.problems.analytics.description')}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">{t('pages.cases.hr.solution.title')}</h2>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                          <Zap className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{t('pages.cases.hr.solution.autoSearch.title')}</h3>
                          <p className="text-muted-foreground">
                            {t('pages.cases.hr.solution.autoSearch.description')}
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
                          <h3 className="text-xl font-bold mb-2">{t('pages.cases.hr.solution.market.title')}</h3>
                          <p className="text-muted-foreground">
                            {t('pages.cases.hr.solution.market.description')}
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
                          <h3 className="text-xl font-bold mb-2">{t('pages.cases.hr.solution.proactive.title')}</h3>
                          <p className="text-muted-foreground">
                            {t('pages.cases.hr.solution.proactive.description')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">{t('pages.cases.hr.examples.title')}</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">{t('pages.cases.hr.examples.resumes.title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('pages.cases.hr.examples.resumes.description')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">{t('pages.cases.hr.examples.competitors.title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('pages.cases.hr.examples.competitors.description')}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-card/30 border border-border/50">
                      <h4 className="font-semibold mb-2">{t('pages.cases.hr.examples.specialists.title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('pages.cases.hr.examples.specialists.description')}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.cases.hr.cta.title')}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t('pages.cases.hr.cta.description')}
                  </p>
                  <a
                    href="https://t.me/radar_telegram_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-colors"
                  >
                    {t('pages.cases.hr.cta.button')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </section>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <Link href={`${getLanguagePath(lang)}/`} className="text-primary hover:underline">
                    {t('pages.cases.hr.backToHome')}
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

