import Link from 'next/link'
import { Box, CheckCircle2, AlertCircle } from 'lucide-react'

const CATEGORY_NAMES: Record<string, string> = {
  cases: 'Корпуса InWin',
  psu: 'Блоки питания InWin',
  server: 'Серверные решения',
  cooling: 'Охлаждение',
  powerman: 'Powerman',
  custom: 'Под заказ',
}

const mockProducts = [
  { slug: 'iw-309-bk', name: 'InWin 309 Black', sku: 'IW-309-BK', isEol: false },
  { slug: 'iw-101c', name: 'InWin 101C', sku: 'IW-101C', isEol: false },
  { slug: 'ip-p120hf7-3', name: 'InWin P120F 750W', sku: 'IP-P120HF7-3', isEol: true },
  { slug: 'epycd8-2t', name: 'ASRock Rack EPYCD8-2T', sku: 'EPYCD8-2T', isEol: false },
  { slug: 'r1-eol', name: 'InWin R1 (Legacy)', sku: 'IW-R1-EOL', isEol: true },
  { slug: 'iw-mr04', name: 'InWin MR04', sku: 'IW-MR04', isEol: false },
]

type Params = Promise<{ category: string }>

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params
  const categoryName = CATEGORY_NAMES[category] ?? category

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/catalog" className="hover:text-orange-500">Каталог</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{categoryName}</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">{categoryName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {mockProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-100 h-44 flex items-center justify-center">
              <Box size={56} className="text-gray-300" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {product.isEol ? (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-500">
                    <AlertCircle size={10} /> End of Life
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    <CheckCircle2 size={10} /> В наличии
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-sm text-gray-900 group-hover:text-orange-500 transition-colors leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">SKU: {product.sku}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
