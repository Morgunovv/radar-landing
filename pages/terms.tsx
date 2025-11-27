import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Terms() {
  const { t, language } = useLanguage()
  return (
    <>
      <Head>
        <title>{t('pages.terms.title')}</title>
        <meta name="description" content={t('pages.terms.description')} />
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
            <div className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-invert max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('pages.terms.content.heading')}</h1>
                <p className="text-muted-foreground mb-8">{t('pages.terms.content.lastUpdated')}: {new Date().toLocaleDateString(language === 'ru' ? 'ru-RU' : language === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.acceptance.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.acceptance.text')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.description.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.description.text')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.registration.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.registration.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    {(t('pages.terms.content.registration.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.registration.responsibility')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.rules.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.rules.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    {(t('pages.terms.content.rules.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.pricing.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.pricing.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    {(t('pages.terms.content.pricing.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.liability.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.liability.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    {(t('pages.terms.content.liability.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.liability.responsibility')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.intellectual.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.intellectual.text')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.termination.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.termination.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    {(t('pages.terms.content.termination.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.changes.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.changes.text')}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{t('pages.terms.content.contacts.title')}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('pages.terms.content.contacts.text')}
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>{(t('pages.terms.content.contacts.items', { returnObjects: true }) as string[])[0]}: <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@radar_telegram_bot</a></li>
                  </ul>
                </section>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <Link href="/" className="text-primary hover:underline">
                    {t('pages.terms.content.backToHome')}
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

