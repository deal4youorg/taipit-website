import { Box, CheckCircle2, AlertCircle } from 'lucide-react'
import InquiryForm from '@/components/ui/InquiryForm'
import ProductTabs from '@/components/catalog/ProductTabs'

// Заглушка данных — в реальном проекте заменить на запрос к CMS/API
function getMockProduct(slug: string) {
  const isEol = slug.includes('eol') || slug === 'ip-p120hf7-3'
  return {
    name:
      slug === 'epycd8-2t'
        ? 'ASRock Rack EPYCD8-2T'
        : slug === 'iw-309-bk'
        ? 'InWin 309 Black'
        : 'InWin P120F 750W',
    sku: slug.toUpperCase(),
    category: 'Серверные решения',
    isEol,
    specs: [
      { label: 'Форм-фактор', value: 'E-ATX' },
      { label: 'Сокет', value: 'AMD SP3' },
      { label: 'Чипсет', value: 'SoC' },
      { label: 'Слоты памяти', value: '16× DDR4 ECC RDIMM' },
      { label: 'Макс. ОЗУ', value: '2 ТБ' },
      { label: 'Интерфейсы', value: '2× 10GbE RJ-45' },
    ],
    documents: [
      { name: 'User Manual (EN)', url: '#' },
      { name: 'Datasheet', url: '#' },
      { name: 'Compatibility List', url: '#' },
    ],
  }
}

type Params = Promise<{ slug: string }>

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params
  const product = getMockProduct(slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <span>Каталог</span>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Левая колонка: галерея + вкладки */}
        <div className="lg:col-span-2">
          {/* Галерея */}
          <div className="bg-gray-100 rounded-xl h-72 flex items-center justify-center mb-4">
            <Box size={96} className="text-gray-300" />
          </div>
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gray-100 rounded-lg border-2 border-transparent hover:border-cyan-400 cursor-pointer flex items-center justify-center"
              >
                <Box size={24} className="text-gray-300" />
              </div>
            ))}
          </div>

          {/* Название и статус */}
          <div className="mb-6">
            <div className="flex items-start gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              {product.isEol ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-600">
                  <AlertCircle size={12} />
                  End of Life
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  <CheckCircle2 size={12} />
                  Действующая модель
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-1">SKU: {product.sku}</p>
          </div>

          {/* Вкладки (клиентский компонент) */}
          <ProductTabs specs={product.specs} documents={product.documents} />
        </div>

        {/* Правая колонка: форма заявки */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {product.isEol ? 'Запросить замену или документацию' : 'Отправить заявку'}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {product.isEol
                ? 'Модель снята с производства. Уточните наличие или подберите замену.'
                : 'Уточните наличие, условия поставки или закажите оборудование.'}
            </p>
            <InquiryForm productName={product.name} isEol={product.isEol} />
          </div>
        </div>
      </div>
    </div>
  )
}
