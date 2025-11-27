import Head from 'next/head'
import { useRouter } from 'next/router'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { getTranslation, getCurrentLanguage } from '@/utils/translations'

export default function FAQPageES() {
  const router = useRouter()
  const lang = getCurrentLanguage(router.pathname)
  const t = (key: string) => getTranslation(lang, key)
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radar-bot.com'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/es/faq`
  const ogImage = `${siteUrl}/logo.png`
  const title = String(t('pages.faq.title'))
  const description = String(t('pages.faq.description'))

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
        <meta property="og:locale" content="es_ES" />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en/faq`} />
        <link rel="alternate" hrefLang="ru" href={`${siteUrl}/faq`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es/faq`} />
        
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen bg-gray-900 relative">
        {/* Background pattern overlay */}
        <div className="fixed inset-0 bg-[url('/images/bg-pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <Navbar />
          <FAQ />
          <Footer />
        </div>
      </main>
    </>
  )
}

