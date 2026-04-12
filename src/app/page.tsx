import Link from 'next/link'
import { ArrowRight, Server, Box, Zap, Wind, Package, ShoppingBag } from 'lucide-react'

const categories = [
  {
    href: '/catalog/cases',
    icon: Box,
    title: 'Корпуса InWin',
    description: 'Настольные и серверные корпуса для профессиональных решений',
  },
  {
    href: '/catalog/psu',
    icon: Zap,
    title: 'БП InWin',
    description: 'Блоки питания для рабочих станций и серверов',
  },
  {
    href: '/catalog/server',
    icon: Server,
    title: 'Серверные решения',
    description: 'ASRock Rack, Gigabyte — материнские платы и платформы',
  },
  {
    href: '/catalog/cooling',
    icon: Wind,
    title: 'Охлаждение',
    description: 'Системы воздушного и жидкостного охлаждения',
  },
  {
    href: '/catalog/powerman',
    icon: Package,
    title: 'Powerman',
    description: 'ИБП, корпуса и аксессуары Powerman',
  },
  {
    href: '/catalog/custom',
    icon: ShoppingBag,
    title: 'Под заказ',
    description: 'Нестандартные конфигурации и OEM-поставки',
  },
]

const newProducts = [
  { title: 'InWin 309 Black', category: 'Корпус', sku: 'IW-309-BK', isNew: true },
  { title: 'ASRock Rack EPYCD8-2T', category: 'Серверная плата', sku: 'EPYCD8-2T', isNew: true },
  { title: 'InWin P120F 750W', category: 'Блок питания', sku: 'IP-P120HF7-3', isNew: false },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: '#0D1B3E' }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 50%, #0891B2 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Официальный дистрибьютор InWin &amp; Powerman
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Профессиональное оборудование для IT&#8209;специалистов
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Корпуса, блоки питания, серверные платформы и аксессуары от ведущих мировых
              производителей. Поставки для бизнеса, системных интеграторов и дата-центров.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-colors"
                style={{ backgroundColor: '#0891B2' }}
              >
                Смотреть каталог
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white border border-white/30 hover:border-white/60 transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Категории товаров</h2>
          <p className="text-gray-500 mb-8">Полный ассортимент для корпоративных заказчиков</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ href, icon: Icon, title, description }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-cyan-300 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <Icon size={24} style={{ color: '#0891B2' }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                  Перейти <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Новинки */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Новинки и актуальные позиции</h2>
              <p className="text-gray-500">Последние поступления в ассортименте</p>
            </div>
            <Link
              href="/catalog"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline"
            >
              Весь каталог <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <Link
                key={product.sku}
                href={`/product/${product.sku.toLowerCase()}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <Box size={64} className="text-gray-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {product.category}
                    </span>
                    {product.isNew && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                        Новинка
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">SKU: {product.sku}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0891B2' }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Не нашли нужную позицию?
          </h2>
          <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
            Оставьте заявку — наши менеджеры подберут оборудование под ваши задачи
            или уточнят наличие нужной модели.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold bg-white hover:bg-gray-50 transition-colors"
            style={{ color: '#0D1B3E' }}
          >
            Оставить заявку
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
