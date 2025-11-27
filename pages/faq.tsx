import Head from 'next/head'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - Telegram Radar</title>
        <meta name="description" content="Часто задаваемые вопросы о Telegram Radar. Ответы на вопросы о мониторинге каналов, ключевых словах, тарифах и решении проблем." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <div className="pt-24">
            <FAQ />
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

