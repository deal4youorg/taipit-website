import InquiryForm from '@/components/ui/InquiryForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Контакты</h1>
      <p className="text-gray-500 mb-10">Свяжитесь с нами любым удобным способом</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Контактная информация */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Реквизиты и адрес</h2>
          <div className="space-y-5">
            {[
              { icon: Phone, label: 'Телефон', value: '+7 (495) 123-45-67' },
              { icon: Mail, label: 'Email', value: 'info@taipit.ru' },
              { icon: MapPin, label: 'Адрес', value: 'г. Москва, ул. Примерная, д. 1, офис 100' },
              { icon: Clock, label: 'Режим работы', value: 'Пн–Пт, 9:00–18:00 МСК' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#FFF4E8' }}
                >
                  <Icon size={18} style={{ color: '#F5921E' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-gray-800 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Форма */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Написать нам</h2>
          <InquiryForm />
        </div>
      </div>
    </div>
  )
}
