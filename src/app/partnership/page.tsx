import InquiryForm from '@/components/ui/InquiryForm'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Прямые поставки от производителя',
  'Конкурентные дистрибьюторские цены',
  'Техническая поддержка и обучение',
  'Маркетинговая поддержка',
  'Приоритетный доступ к новинкам',
  'Гибкие условия по оплате',
]

export default function PartnershipPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Сотрудничество</h1>
      <p className="text-gray-500 mb-10">
        Станьте авторизованным партнёром Taipit и получите доступ к эксклюзивным условиям
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Преимущества партнёрства</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} style={{ color: '#F5921E' }} className="mt-0.5 shrink-0" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Оставить заявку на партнёрство</h2>
          <InquiryForm />
        </div>
      </div>
    </div>
  )
}
