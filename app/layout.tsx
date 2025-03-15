import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileNav from './components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PLAXIN COIN',
  description: 'Будущее криптовалюты начинается здесь',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <MobileNav />
      </body>
    </html>
  )
} 