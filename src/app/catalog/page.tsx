import Link from 'next/link'
import { Box, Zap, Server, Wind, Package, ShoppingBag, ArrowRight } from 'lucide-react'

const categories = [
  { href: '/catalog/cases', icon: Box, title: 'Корпуса InWin', count: 48 },
  { href: '/catalog/psu', icon: Zap, title: 'Блоки питания InWin', count: 22 },
  { href: '/catalog/server', icon: Server, title: 'Серверные решения', count: 35 },
  { href: '/catalog/cooling', icon: Wind, title: 'Охлаждение', count: 17 },
  { href: '/catalog/powerman', icon: Package, title: 'Powerman', count: 30 },
  { href: '/catalog/custom', icon: ShoppingBag, title: 'Под заказ', count: 0 },
]

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог оборудования</h1>
      <p className="text-gray-500 mb-10">
        Официальные поставки InWin, Powerman, ASRock Rack, Gigabyte и других вендоров
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ href, icon: Icon, title, count }) => (
          <Link
            key={href}
            href={href}
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-cyan-300 transition-all"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: '#EFF6FF' }}
            >
              <Icon size={24} style={{ color: '#0891B2' }} />
            </div>
            <h2 className="font-semibold text-gray-900 mb-1">{title}</h2>
            {count > 0 && (
              <p className="text-sm text-gray-400">{count} позиций</p>
            )}
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
              Смотреть <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
