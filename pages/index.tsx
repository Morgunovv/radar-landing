import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Hero } from '@/components/Hero'
import { ProblemsSolutions } from '@/components/ProblemsSolutions'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    // Сохраняем позицию скролла при уходе со страницы
    const saveScrollPosition = () => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
      }
    }

    // Восстанавливаем позицию скролла при возврате на страницу
    const restoreScrollPosition = () => {
      if (typeof window !== 'undefined') {
        const savedPosition = sessionStorage.getItem('homeScrollPosition')
        if (savedPosition) {
          // Небольшая задержка для того, чтобы контент успел загрузиться
          requestAnimationFrame(() => {
            setTimeout(() => {
              window.scrollTo({
                top: parseInt(savedPosition, 10),
                behavior: 'auto'
              })
              sessionStorage.removeItem('homeScrollPosition')
            }, 50)
          })
        }
      }
    }

    // Сохраняем позицию при клике на ссылки, ведущие на другие страницы
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link) {
        const href = link.getAttribute('href')
        // Проверяем, что это ссылка на другую страницу (не якорь и не внешняя)
        if (href && href.startsWith('/') && !href.startsWith('/#') && href !== '/') {
          saveScrollPosition()
        }
      }
    }

    // Восстанавливаем позицию при загрузке/возврате на страницу
    if (router.pathname === '/') {
      // Проверяем, вернулись ли мы с другой страницы
      const isReturning = sessionStorage.getItem('homeScrollPosition') !== null
      if (isReturning) {
        restoreScrollPosition()
      }
    }

    // Сохраняем позицию при переходе на другую страницу через роутер
    const handleRouteChangeStart = (url: string) => {
      if (url !== '/' && !url.startsWith('/#')) {
        saveScrollPosition()
      }
    }

    // Сохраняем позицию при уходе со страницы
    window.addEventListener('beforeunload', saveScrollPosition)
    document.addEventListener('click', handleLinkClick, true)
    router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition)
      document.removeEventListener('click', handleLinkClick, true)
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router])

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radar-bot.com'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl
  const ogImage = `${siteUrl}/logo.png`
  const title = String(t('pages.home.title'))
  const description = String(t('pages.home.description'))

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
      <main className="min-h-screen bg-background relative overflow-x-hidden max-w-full">
        <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemsSolutions />
        <Features />
        <UseCases />
        <Pricing />
        <CTA />
        <Footer />
        </div>
      </main>
    </>
  )
}

