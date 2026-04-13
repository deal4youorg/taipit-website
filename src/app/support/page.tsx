import { FileText, ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Как оформить заявку на поставку?',
    a: 'Откройте карточку нужного товара и заполните форму заявки. Менеджер свяжется с вами в течение рабочего дня.',
  },
  {
    q: 'Работаете ли вы с физическими лицами?',
    a: 'Taipit работает только с юридическими лицами и индивидуальными предпринимателями в формате B2B.',
  },
  {
    q: 'Есть ли товары в наличии на складе?',
    a: 'Часть позиций хранится на нашем складе в Москве. Наличие и сроки уточняйте через форму заявки.',
  },
  {
    q: 'Как получить документы на товар (сертификаты, декларации)?',
    a: 'Документы доступны в карточке товара на вкладке «Документы», либо по запросу через форму обратной связи.',
  },
  {
    q: 'Что означает статус End of Life?',
    a: 'EOL означает, что модель снята с производства вендором. Поставки возможны из остатков. Вы можете запросить замену или получить документацию.',
  },
]

const docs = [
  { name: 'Прайс-лист InWin (актуальный)', ext: 'XLSX' },
  { name: 'Прайс-лист Powerman (актуальный)', ext: 'XLSX' },
  { name: 'Каталог серверных решений 2024', ext: 'PDF' },
  { name: 'Гарантийная политика Taipit', ext: 'PDF' },
]

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Поддержка</h1>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Частые вопросы</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-medium text-gray-800">
                {q}
                <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Документы */}
      <section id="docs">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Документы</h2>
        <div className="space-y-3">
          {docs.map(({ name, ext }) => (
            <a
              key={name}
              href="#"
              className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
            >
              <FileText size={20} style={{ color: '#F5921E' }} className="shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{name}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-mono">
                {ext}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
