import Head from 'next/head'
import { Hero } from '@/components/Hero'
import { ProblemsSolutions } from '@/components/ProblemsSolutions'
import { Features } from '@/components/Features'
import { UseCases } from '@/components/UseCases'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telegram Radar - Мониторинг каналов на автопилоте</title>
        <meta name="description" content="Автоматизируй мониторинг Telegram-каналов. Получай только релевантные сообщения по ключевым словам. Экономь часы работы каждый день." />
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

