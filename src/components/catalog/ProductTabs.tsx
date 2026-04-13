'use client'

import { useState } from 'react'
import { FileText, Play } from 'lucide-react'

export default function ProductTabs({
  specs,
  documents,
}: {
  specs: { label: string; value: string }[]
  documents: { name: string; url: string }[]
}) {
  const [tab, setTab] = useState<'specs' | 'docs' | 'video'>('specs')

  const tabCls = (active: boolean) =>
    `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
      active
        ? 'border-orange-500 text-orange-500'
        : 'border-transparent text-gray-500 hover:text-gray-700'
    }`

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6">
        <button className={tabCls(tab === 'specs')} onClick={() => setTab('specs')}>
          Характеристики
        </button>
        <button className={tabCls(tab === 'docs')} onClick={() => setTab('docs')}>
          <span className="flex items-center gap-1">
            <FileText size={14} /> Документы
          </span>
        </button>
        <button className={tabCls(tab === 'video')} onClick={() => setTab('video')}>
          <span className="flex items-center gap-1">
            <Play size={14} /> Видеообзоры
          </span>
        </button>
      </div>

      {tab === 'specs' && (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <tbody>
              {specs.map(({ label, value }, i) => (
                <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-500 w-1/2">{label}</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'docs' && (
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li key={doc.name}>
              <a
                href={doc.url}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors text-sm text-gray-700 font-medium"
              >
                <FileText size={16} style={{ color: '#F5921E' }} className="shrink-0" />
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {tab === 'video' && (
        <div className="bg-gray-50 rounded-lg border border-gray-200 h-48 flex flex-col items-center justify-center text-gray-400">
          <Play size={32} className="mb-2" />
          <p className="text-sm">Видеообзоры пока не добавлены</p>
        </div>
      )}
    </div>
  )
}
