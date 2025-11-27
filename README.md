# Telegram Radar Landing Page

Лэндинг для Telegram Radar - системы мониторинга Telegram-каналов.

## Технологии

- **Next.js 14** - React framework
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **Lucide React** - иконки

## Установка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сборки
npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Деплой на Vercel

### Вариант 1: Через GitHub

1. Загрузите код в GitHub репозиторий
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "New Project"
4. Импортируйте ваш GitHub репозиторий
5. Vercel автоматически определит Next.js и настроит деплой
6. Нажмите "Deploy"

### Вариант 2: Через Vercel CLI

```bash
# Установка Vercel CLI
npm install -g vercel

# Войти в аккаунт
vercel login

# Деплой
vercel

# Продакшен деплой
vercel --prod
```

## Настройка

### Изменение ссылки на бота

Найдите все упоминания `radar_telegram_bot` и замените на реальный username вашего бота:

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Pricing.tsx`
- `components/CTA.tsx`
- `components/Footer.tsx`

### Изменение контактов

В файле `components/Footer.tsx` замените `support@example.com` на реальный email.

## Структура проекта

```
landing/
├── components/          # React компоненты
│   ├── Hero.tsx        # Главный баннер
│   ├── Features.tsx    # Блок возможностей
│   ├── UseCases.tsx    # Кому подходит
│   ├── Pricing.tsx     # Тарифы
│   ├── CTA.tsx         # Призыв к действию
│   ├── Footer.tsx      # Подвал
│   └── Navbar.tsx      # Навигация
├── pages/              # Next.js страницы
│   ├── _app.tsx        # Главный компонент приложения
│   └── index.tsx       # Главная страница
├── styles/             # Стили
│   └── globals.css     # Глобальные стили
├── public/             # Статические файлы
└── package.json        # Зависимости
```

## Кастомизация

### Цвета

Цвета настраиваются в `tailwind.config.js`:

- `primary` - основной цвет (синий)
- `telegram` - цвет Telegram (голубой)

### Контент

Все тексты и описания находятся в компонентах:
- `components/Hero.tsx` - главный заголовок и описание
- `components/Features.tsx` - список возможностей
- `components/UseCases.tsx` - кейсы использования
- `components/Pricing.tsx` - тарифы и цены

## Лицензия

Проприетарное ПО. Все права защищены.

