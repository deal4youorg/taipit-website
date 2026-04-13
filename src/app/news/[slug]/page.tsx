import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Params = Promise<{ slug: string }>

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-sm hover:underline mb-8"
        style={{ color: '#F5921E' }}
      >
        <ArrowLeft size={14} /> К новостям
      </Link>

      <p className="text-xs text-gray-400 mb-3">2024-11-15</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Статья: {slug}
      </h1>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
        <p>
          Содержание статьи будет добавлено после подключения CMS.
          В реальном проекте здесь будет контент из headless CMS (Contentful, Strapi и др.)
          или MDX файлов.
        </p>
      </div>
    </div>
  )
}
