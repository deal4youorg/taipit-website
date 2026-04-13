import { MapPin, Phone, Clock } from 'lucide-react'

const centers = [
  {
    city: 'Москва',
    address: 'ул. Примерная, д. 1',
    phone: '+7 (495) 123-45-67',
    hours: 'Пн–Пт 9:00–18:00',
  },
  {
    city: 'Санкт-Петербург',
    address: 'пр. Невский, д. 100',
    phone: '+7 (812) 987-65-43',
    hours: 'Пн–Пт 9:00–18:00',
  },
]

export default function ServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Сервисные центры</h1>
      <p className="text-gray-500 mb-10">
        Авторизованные сервисные центры InWin и Powerman
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {centers.map((c) => (
          <div key={c.city} className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{c.city}</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} style={{ color: '#F5921E' }} className="mt-0.5 shrink-0" />
                <span className="text-gray-600">{c.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} style={{ color: '#F5921E' }} className="shrink-0" />
                <a href={`tel:${c.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-orange-500">
                  {c.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} style={{ color: '#F5921E' }} className="shrink-0" />
                <span className="text-gray-600">{c.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
