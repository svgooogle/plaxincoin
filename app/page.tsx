import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsShieldCheck, BsLightningCharge, BsCurrencyExchange } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto py-12 md:py-24 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
              PLAXIN COIN
            </h1>
            <p className="text-lg md:text-xl mb-8 text-purple-100">
              Будущее криптовалюты начинается здесь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/trade" className="btn-primary">
                Начать торговлю
              </Link>
              <Link href="/whitepaper" className="btn-secondary">
                Whitepaper
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/logo.png"
                alt="PLAXIN COIN Logo"
                fill
                className="object-contain animate-float drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 256px, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 md:py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Преимущества PLAXIN COIN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass p-8 rounded-lg text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto py-12 md:py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Дорожная карта
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((phase, index) => (
            <div key={index} className="glass p-8 rounded-lg">
              <div className="text-2xl font-bold text-purple-300 mb-4">
                {phase.quarter} {phase.year}
              </div>
              <ul className="space-y-2">
                {phase.goals.map((goal, goalIndex) => (
                  <li key={goalIndex} className="text-purple-100">
                    • {goal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4">
        <div className="glass p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">О проекте</h3>
              <p className="text-purple-100">
                PLAXIN COIN - инновационная криптовалюта, созданная для будущего децентрализованных финансов.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link href="/trade" className="text-purple-100 hover:text-white transition-colors">Торговля</Link></li>
                <li><Link href="/stake" className="text-purple-100 hover:text-white transition-colors">Стейкинг</Link></li>
                <li><Link href="/whitepaper" className="text-purple-100 hover:text-white transition-colors">Whitepaper</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-purple-100">Email: info@plaxincoin.com</li>
                <li className="text-purple-100">Telegram: @plaxincoin</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 text-purple-200">
            © 2025 PLAXIN COIN. Все права защищены.
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: <BsShieldCheck className="w-12 h-12 text-purple-300 mx-auto" />,
    title: "Безопасность",
    description: "Защита активов на основе современных криптографических алгоритмов"
  },
  {
    icon: <BsLightningCharge className="w-12 h-12 text-purple-300 mx-auto" />,
    title: "Скорость",
    description: "Мгновенные транзакции благодаря оптимизированной сети"
  },
  {
    icon: <BsCurrencyExchange className="w-12 h-12 text-purple-300 mx-auto" />,
    title: "Ликвидность",
    description: "Высокая ликвидность и простота обмена на основные криптовалюты"
  }
]

const roadmap = [
  {
    quarter: "Q1",
    year: "2025",
    goals: [
      "Запуск основной сети",
      "Листинг на DEX",
      "Аудит смарт-контрактов"
    ]
  },
  {
    quarter: "Q2",
    year: "2025",
    goals: [
      "Запуск стейкинга",
      "Партнерства с проектами",
      "Расширение команды"
    ]
  },
  {
    quarter: "Q3",
    year: "2025",
    goals: [
      "Запуск NFT коллекции",
      "Интеграция с DeFi протоколами",
      "Развитие экосистемы"
    ]
  },
  {
    quarter: "Q4",
    year: "2025",
    goals: [
      "Запуск собственного DEX",
      "Кроссчейн интеграции",
      "Глобальное развитие"
    ]
  }
] 