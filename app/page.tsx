import React from 'react'
import Link from 'next/link'
import TempLogo from './components/TempLogo'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              PLAXIN COIN
            </h1>
            <p className="text-lg md:text-xl mb-6 text-purple-200">
              Будущее криптовалюты начинается здесь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/trade" className="btn-primary">
                Начать торговлю
              </Link>
              <Link href="/whitepaper.md" target="_blank" className="btn-secondary">
                Whitepaper
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <TempLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Преимущества PLAXIN COIN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass p-6 rounded-xl">
              <div className="text-purple-400 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="container py-12 md:py-24 relative">
        <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-3xl -z-10"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Как купить PLAXIN COIN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-400 mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Дорожная карта
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((item, index) => (
            <div key={index} className="glass p-6 rounded-xl">
              <div className="text-purple-400 font-bold mb-2">{item.quarter}</div>
              <h3 className="text-xl font-bold mb-4">{item.year}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {item.goals.map((goal, goalIndex) => (
                  <li key={goalIndex}>{goal}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 mt-12 border-t border-purple-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PLAXIN COIN</h3>
            <p className="text-gray-300">
              Создаем будущее децентрализованных финансов
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><Link href="/trade" className="text-gray-300 hover:text-purple-400">Торговля</Link></li>
              <li><Link href="/stake" className="text-gray-300 hover:text-purple-400">Стейкинг</Link></li>
              <li><Link href="/whitepaper.md" className="text-gray-300 hover:text-purple-400">Whitepaper</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <span className="sr-only">Telegram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.145.118.181.344.203.483.023.139.041.562.041.562z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          © 2024 PLAXIN COIN. Все права защищены.
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: "🔒",
    title: "Безопасность",
    description: "Передовые технологии шифрования и защиты ваших активов"
  },
  {
    icon: "⚡",
    title: "Скорость",
    description: "Мгновенные транзакции с минимальными комиссиями"
  },
  {
    icon: "🌐",
    title: "Масштабируемость",
    description: "Готовность к росту и увеличению нагрузки"
  }
]

const steps = [
  {
    title: "Создайте кошелек",
    description: "Установите совместимый криптокошелек"
  },
  {
    title: "Пополните баланс",
    description: "Внесите средства на ваш кошелек"
  },
  {
    title: "Подключитесь к DEX",
    description: "Выберите децентрализованную биржу"
  },
  {
    title: "Купите PLAXIN",
    description: "Совершите обмен на PLAXIN COIN"
  }
]

const roadmap = [
  {
    quarter: "Q1",
    year: "2024",
    goals: [
      "Запуск основной сети",
      "Листинг на DEX",
      "Аудит смарт-контрактов"
    ]
  },
  {
    quarter: "Q2",
    year: "2024",
    goals: [
      "Запуск стейкинга",
      "Партнерства с проектами",
      "Расширение команды"
    ]
  },
  {
    quarter: "Q3",
    year: "2024",
    goals: [
      "Запуск NFT коллекции",
      "Интеграция с DeFi протоколами",
      "Развитие экосистемы"
    ]
  },
  {
    quarter: "Q4",
    year: "2024",
    goals: [
      "Запуск собственного DEX",
      "Кроссчейн интеграции",
      "Глобальное развитие"
    ]
  }
] 