import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Условия использования — Telegram Radar</title>
        <meta name="description" content="Условия использования сервиса Telegram Radar. Правила и ограничения использования сервиса." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Условия использования</h1>
                <p className="text-muted-foreground mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">1. Принятие условий</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Используя сервис Telegram Radar (далее — «Сервис»), вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте Сервис.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">2. Описание сервиса</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Telegram Radar — это сервис для автоматического мониторинга Telegram-каналов, фильтрации сообщений по ключевым словам и автоматической публикации в указанные каналы. Сервис предоставляется «как есть» без каких-либо гарантий.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">3. Регистрация и учетная запись</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Для использования Сервиса необходимо:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Иметь действующий аккаунт Telegram</li>
                    <li>Начать работу с ботом @radar_telegram_bot</li>
                    <li>Следовать инструкциям бота для настройки мониторинга</li>
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Вы несете ответственность за сохранность доступа к вашему аккаунту Telegram и за все действия, совершенные с использованием вашего аккаунта.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">4. Правила использования</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    При использовании Сервиса запрещается:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Использовать Сервис для незаконных целей</li>
                    <li>Нарушать права интеллектуальной собственности третьих лиц</li>
                    <li>Распространять спам, вредоносное ПО или контент, нарушающий права других</li>
                    <li>Пытаться взломать, нарушить работу или обойти ограничения Сервиса</li>
                    <li>Использовать Сервис для мониторинга контента без согласия владельцев каналов (где это требуется)</li>
                    <li>Нарушать правила использования Telegram</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">5. Тарифы и оплата</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Сервис предоставляется на условиях различных тарифных планов:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Бесплатный тариф — предоставляется навсегда с ограниченным функционалом</li>
                    <li>Платные тарифы — оплачиваются через Telegram Stars на ежемесячной основе</li>
                    <li>Оплата производится заранее за выбранный период</li>
                    <li>Возврат средств не предусмотрен, за исключением случаев технических сбоев</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">6. Ограничения ответственности</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Сервис предоставляется «как есть». Мы не гарантируем:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Непрерывную и безошибочную работу Сервиса</li>
                    <li>Отсутствие задержек в обработке сообщений</li>
                    <li>Доступность всех каналов для мониторинга</li>
                    <li>Точность фильтрации по ключевым словам на 100%</li>
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы не несем ответственности за контент, публикуемый через Сервис, и за последствия его использования.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">7. Интеллектуальная собственность</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Все права на Сервис, включая дизайн, программное обеспечение, логотипы и торговые марки, принадлежат Telegram Radar. Вы не имеете права копировать, модифицировать или распространять материалы Сервиса без письменного разрешения.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">8. Прекращение использования</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы оставляем за собой право приостановить или прекратить доступ к Сервису в случае:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Нарушения настоящих Условий использования</li>
                    <li>Неоплаты платного тарифа</li>
                    <li>Технических работ или форс-мажорных обстоятельств</li>
                    <li>Нарушения правил использования Telegram</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">9. Изменения условий</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы оставляем за собой право изменять настоящие Условия использования в любое время. О существенных изменениях мы уведомим пользователей через Telegram бот или на сайте. Продолжение использования Сервиса после изменений означает ваше согласие с новыми условиями.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">10. Контакты</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    По всем вопросам, связанным с использованием Сервиса, обращайтесь:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Через Telegram бот: <a href="https://t.me/radar_telegram_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@radar_telegram_bot</a></li>
                  </ul>
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

