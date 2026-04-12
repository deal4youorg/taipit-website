import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Taipit — профессиональное IT-оборудование',
  description:
    'Официальный дистрибьютор InWin и Powerman. Поставщик серверного оборудования ASRock Rack, Gigabyte. Корпуса, блоки питания, серверные решения для B2B.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full flex flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
