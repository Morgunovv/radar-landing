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

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Обработка якорей в URL (например, /#features)
    const handleHashScroll = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1) // убираем #
        const element = document.getElementById(hash)
        if (element) {
          // Небольшая задержка для загрузки контента
          setTimeout(() => {
            const yOffset = -80 // отступ для фиксированного навбара
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    // Сохраняем позицию скролла при уходе со страницы
    const saveScrollPosition = () => {
      if (typeof window !== 'undefined') {
        // Не сохраняем позицию, если переходим с якорем
        if (!window.location.hash) {
          sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
        }
      }
    }

    // Восстанавливаем позицию скролла при возврате на страницу
    const restoreScrollPosition = () => {
      if (typeof window !== 'undefined') {
        // Если есть якорь в URL, прокручиваем к нему
        if (window.location.hash) {
          handleHashScroll()
          return
        }
        
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
        // Не сохраняем позицию, если переходим на главную с якорем
        if (href && href.startsWith('/') && !href.startsWith('/#') && href !== '/') {
          saveScrollPosition()
        } else if (href && href.startsWith('/#')) {
          // При переходе на главную с якорем очищаем сохраненную позицию
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem('homeScrollPosition')
          }
        }
      }
    }

    // Восстанавливаем позицию при загрузке/возврате на страницу
    if (typeof window !== 'undefined' && router.pathname === '/') {
      // Если есть якорь в URL, прокручиваем к нему
      if (window.location.hash) {
        handleHashScroll()
      } else {
        // Проверяем, вернулись ли мы с другой страницы
        const isReturning = sessionStorage.getItem('homeScrollPosition') !== null
        if (isReturning) {
          restoreScrollPosition()
        }
      }
    }

    // Обработка изменения hash в URL
    const handleHashChange = () => {
      if (typeof window !== 'undefined' && router.pathname === '/') {
        handleHashScroll()
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange)
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
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeunload', saveScrollPosition)
        window.removeEventListener('hashchange', handleHashChange)
      }
      if (typeof document !== 'undefined') {
        document.removeEventListener('click', handleLinkClick, true)
      }
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router])

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://radar-bot.com'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl
  const ogImage = `${siteUrl}/logo.png`
  const title = 'Telegram Radar - Мониторинг каналов на автопилоте'
  const description = 'Автоматизируй мониторинг Telegram-каналов. Получай только релевантные сообщения по ключевым словам. Экономь часы работы каждый день.'

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
        <UseCases />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
        </div>
      </main>
    </>
  )
}

