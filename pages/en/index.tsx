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

export default function HomeEN() {
  const router = useRouter()

  useEffect(() => {
    // Обработка якорей в URL (например, /en#features)
    const handleHashScroll = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1)
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            const yOffset = -80
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    const saveScrollPosition = () => {
      if (typeof window !== 'undefined') {
        if (!window.location.hash) {
          sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
        }
      }
    }

    const restoreScrollPosition = () => {
      if (typeof window !== 'undefined') {
        if (window.location.hash) {
          handleHashScroll()
          return
        }
        
        const savedPosition = sessionStorage.getItem('homeScrollPosition')
        if (savedPosition) {
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

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link) {
        const href = link.getAttribute('href')
        if (href && href.startsWith('/') && !href.startsWith('/#') && href !== '/en' && !href.startsWith('/en#')) {
          saveScrollPosition()
        } else if (href && (href.startsWith('/#') || href.startsWith('/en#'))) {
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem('homeScrollPosition')
          }
        }
      }
    }

    if (typeof window !== 'undefined' && router.pathname === '/en') {
      if (window.location.hash) {
        handleHashScroll()
      } else {
        const isReturning = sessionStorage.getItem('homeScrollPosition') !== null
        if (isReturning) {
          restoreScrollPosition()
        }
      }
    }

    const handleHashChange = () => {
      if (typeof window !== 'undefined' && router.pathname === '/en') {
        handleHashScroll()
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange)
    }

    const handleRouteChangeStart = (url: string) => {
      if (url !== '/en' && !url.startsWith('/en#')) {
        saveScrollPosition()
      }
    }

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
  const title = 'Telegram Radar - Channel Monitoring on Autopilot'
  const description = 'Automate Telegram channel monitoring. Get only relevant messages by keywords. Save hours of work every day.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="ru" href={`${siteUrl}/`} />
        <link rel="alternate" hrefLang="es" href={`${siteUrl}/es`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Telegram Radar" />
        <meta property="og:locale" content="en_US" />
        
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

