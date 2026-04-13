import { Globe, MapPin } from 'lucide-react'

const dealers = [
  { name: 'Дилер Альфа', city: 'Москва', url: '#' },
  { name: 'Дилер Бета', city: 'Санкт-Петербург', url: '#' },
  { name: 'Дилер Гамма', city: 'Екатеринбург', url: '#' },
  { name: 'Дилер Дельта', city: 'Новосибирск', url: '#' },
  { name: 'Дилер Эпсилон', city: 'Казань', url: '#' },
  { name: 'Дилер Зета', city: 'Ростов-на-Дону', url: '#' },
]

export default function WhereToBuyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Где купить</h1>
      <p className="text-gray-500 mb-10">
        Официальные дилеры и партнёры Taipit по всей России
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dealers.map((d) => (
          <a
            key={d.name}
            href={d.url}
            className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <Globe size={18} style={{ color: '#F5921E' }} />
              <span className="font-semibold text-gray-900">{d.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={14} />
              {d.city}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
