import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  return (
    <>
      <Head>
        <title>{t('pages.privacy.title')}</title>
        <meta name="description" content={t('pages.privacy.description')} />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Политика конфиденциальности</h1>
                <p className="text-muted-foreground mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса Telegram Radar (далее - «Сервис»). Используя Сервис, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Администратор персональных данных: Telegram Radar. Контактная информация: через Telegram бот @radar_telegram_bot.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">2. Собираемые данные</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    При использовании Сервиса мы можем собирать следующую информацию:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Идентификатор пользователя Telegram (User ID)</li>
                    <li>Имя пользователя Telegram (если указано)</li>
                    <li>Настройки мониторинга каналов и ключевых слов</li>
                    <li>Информация о подключенных каналах публикации</li>
                    <li>Данные сессии Telegram (при подключении личного аккаунта)</li>
                    <li>Логи использования сервиса</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Персональные данные обрабатываются в следующих целях:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Предоставление функционала мониторинга Telegram-каналов</li>
                    <li>Обработка и фильтрация сообщений по ключевым словам</li>
                    <li>Публикация сообщений в указанные каналы</li>
                    <li>Обеспечение безопасности и предотвращение злоупотреблений</li>
                    <li>Улучшение качества сервиса и разработка новых функций</li>
                    <li>Техническая поддержка пользователей</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">4. Хранение и защита данных</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы применяем современные методы защиты данных:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Шифрование сессий Telegram при хранении</li>
                    <li>Безопасное хранение данных на защищенных серверах</li>
                    <li>Ограниченный доступ к персональным данным только для сотрудников, выполняющих свои служебные обязанности</li>
                    <li>Регулярное обновление систем безопасности</li>
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Данные хранятся в течение срока действия вашей учетной записи и могут быть удалены по вашему запросу.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы не передаем ваши персональные данные третьим лицам, за исключением случаев:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Когда это необходимо для предоставления сервиса (например, взаимодействие с Telegram API)</li>
                    <li>По требованию законодательства или судебных органов</li>
                    <li>Для защиты прав и безопасности пользователей</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">6. Права пользователей</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Вы имеете право:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Получать информацию о ваших персональных данных</li>
                    <li>Требовать исправления неточных данных</li>
                    <li>Требовать удаления ваших персональных данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                    <li>Ограничить обработку ваших данных</li>
                  </ul>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Для реализации этих прав обратитесь к нам через Telegram бот @radar_telegram_bot.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">7. Cookies и аналогичные технологии</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Сервис использует минимально необходимые технические данные для обеспечения работы функционала. Мы не используем cookies для отслеживания пользователей.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">8. Изменения в Политике конфиденциальности</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. О существенных изменениях мы уведомим пользователей через Telegram бот или на сайте.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">9. Контакты</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
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

