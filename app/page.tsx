import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="PLAXIN COIN Logo"
              width={150}
              height={150}
              className="animate-fade-in"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            PLAXIN COIN
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Будущее децентрализованных финансов на Solana
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Купить токены
            </a>
            <Link
              href="/api/whitepaper"
              target="_blank"
              className="border border-purple-600 hover:bg-purple-600/20 text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Whitepaper
            </Link>
          </div>
        </div>
        
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Преимущества PLAXIN COIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4">Высокая скорость</h3>
              <p className="text-gray-300">Мгновенные транзакции благодаря использованию сети Solana</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4">Низкие комиссии</h3>
              <p className="text-gray-300">Минимальные затраты на транзакции в сети</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
              <p className="text-gray-300">Надежная защита активов и смарт-контрактов</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Как купить PLAXIN COIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Создайте кошелек</h3>
              <p className="text-gray-300">Установите Phantom или Solflare</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Пополните баланс</h3>
              <p className="text-gray-300">Купите SOL на бирже</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Подключитесь к DEX</h3>
              <p className="text-gray-300">Используйте Raydium или Orca</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Купите PLAXIN</h3>
              <p className="text-gray-300">Обменяйте SOL на PLAXIN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Дорожная карта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-2">Q1 2024</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Запуск токена</li>
                <li>Листинг на DEX</li>
                <li>Аудит смарт-контрактов</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-2">Q2 2024</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Запуск стейкинга</li>
                <li>Партнерства с проектами</li>
                <li>Листинг на CEX</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-2">Q3 2024</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Запуск NFT коллекции</li>
                <li>Интеграция с DeFi</li>
                <li>Мобильное приложение</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-2">Q4 2024</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Кроссчейн интеграции</li>
                <li>DAO управление</li>
                <li>Метавселенная PLAXIN</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">PLAXIN COIN</h3>
              <p className="text-gray-300">Будущее уже здесь</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">Telegram</a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">Discord</a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">Medium</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 