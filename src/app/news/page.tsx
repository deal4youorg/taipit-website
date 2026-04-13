import Link from 'next/link'

const articles = [
  {
    slug: 'inwin-new-2024',
    title: 'InWin представила новую линейку корпусов для рабочих станций',
    date: '2024-11-15',
    excerpt: 'Компания InWin анонсировала серию корпусов формата E-ATX с улучшенной системой вентиляции...',
  },
  {
    slug: 'asrock-rack-epyc',
    title: 'ASRock Rack расширяет ассортимент платформ под процессоры AMD EPYC',
    date: '2024-10-28',
    excerpt: 'Новые материнские платы серии EPYCD поддерживают до 2 ТБ оперативной памяти...',
  },
  {
    slug: 'taipit-partner-2024',
    title: 'Taipit подтвердил статус официального дистрибьютора InWin на 2025 год',
    date: '2024-09-05',
    excerpt: 'Подписание нового дистрибьюторского соглашения обеспечивает полный доступ к ассортименту...',
  },
]

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Новости</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-orange-300 transition-all"
          >
            <p className="text-xs text-gray-400 mb-2">{article.date}</p>
            <h2 className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
