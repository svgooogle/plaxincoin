import React from 'react';
import Link from 'next/link';

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-fixed">
      <div className="container py-12">
        <Link href="/" className="text-purple-300 hover:text-white transition-colors mb-8 inline-block">
          ← Вернуться на главную
        </Link>
        
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-8">PLAXIN COIN Whitepaper</h1>
          
          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Правовая оговорка</h2>
            <p className="text-purple-100">
              Данный документ представляет собой техническое описание проекта PLAXIN COIN и не является финансовой рекомендацией или призывом к инвестициям.
            </p>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Введение</h2>
            <p className="text-purple-100">
              PLAXIN COIN - это инновационная криптовалюта, созданная для решения ключевых проблем современных блокчейн-систем: масштабируемости, безопасности и доступности.
            </p>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Технические характеристики</h2>
            <ul className="list-disc pl-6 text-purple-100 space-y-2">
              <li>Алгоритм консенсуса: Proof of Stake (PoS)</li>
              <li>Максимальное предложение: 100,000,000 PLAX</li>
              <li>Начальная эмиссия: 21,000,000 PLAX</li>
              <li>Время блока: 3 секунды</li>
              <li>Транзакции в секунду: до 65,000</li>
            </ul>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Распределение токенов</h2>
            <ul className="list-disc pl-6 text-purple-100 space-y-2">
              <li>40% - Публичная продажа</li>
              <li>20% - Развитие экосистемы</li>
              <li>15% - Команда и советники</li>
              <li>15% - Маркетинг и партнерства</li>
              <li>10% - Резерв</li>
            </ul>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Технологические решения</h2>
            <p className="text-purple-100 mb-4">
              PLAXIN COIN использует инновационную архитектуру для обеспечения высокой производительности и безопасности:
            </p>
            <ul className="list-disc pl-6 text-purple-100 space-y-2">
              <li>Многоуровневая система шардинга</li>
              <li>Оптимизированный механизм консенсуса</li>
              <li>Смарт-контракты с улучшенной безопасностью</li>
              <li>Кроссчейн мосты для взаимодействия с другими блокчейнами</li>
            </ul>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Экономическая модель</h2>
            <p className="text-purple-100">
              Экономическая модель PLAXIN COIN основана на дефляционном механизме и стимулировании долгосрочного хранения токенов через стейкинг.
            </p>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Дорожная карта</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-purple-300">Q1 2025</h3>
                <ul className="list-disc pl-6 text-purple-100">
                  <li>Запуск основной сети</li>
                  <li>Листинг на DEX</li>
                  <li>Аудит смарт-контрактов</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300">Q2 2025</h3>
                <ul className="list-disc pl-6 text-purple-100">
                  <li>Запуск стейкинга</li>
                  <li>Партнерства с проектами</li>
                  <li>Расширение команды</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300">Q3 2025</h3>
                <ul className="list-disc pl-6 text-purple-100">
                  <li>Запуск NFT коллекции</li>
                  <li>Интеграция с DeFi протоколами</li>
                  <li>Развитие экосистемы</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300">Q4 2025</h3>
                <ul className="list-disc pl-6 text-purple-100">
                  <li>Запуск собственного DEX</li>
                  <li>Кроссчейн интеграции</li>
                  <li>Глобальное развитие</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Команда</h2>
            <p className="text-purple-100">
              Наша команда состоит из опытных специалистов в области блокчейна, криптографии и разработки программного обеспечения.
            </p>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Риски</h2>
            <p className="text-purple-100">
              Инвестиции в криптовалюты сопряжены с высокими рисками. Рекомендуется тщательно изучить проект перед принятием решения об инвестировании.
            </p>
          </section>

          <section className="glass p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Заключение</h2>
            <p className="text-purple-100">
              PLAXIN COIN стремится стать лидером в области децентрализованных финансов, предоставляя инновационные решения для глобального криптовалютного сообщества.
            </p>
          </section>

          <section className="glass p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Контакты</h2>
            <ul className="text-purple-100 space-y-2">
              <li>Email: info@plaxincoin.com</li>
              <li>Telegram: @plaxincoin</li>
              <li>Twitter: @plaxincoin</li>
              <li>GitHub: github.com/plaxincoin</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
