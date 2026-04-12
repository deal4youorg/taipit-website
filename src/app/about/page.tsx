export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">О компании</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          <strong>Taipit</strong> — официальный дистрибьютор брендов InWin и Powerman в России,
          а также авторизованный поставщик серверного оборудования ASRock Rack, Gigabyte
          и других ведущих производителей.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
          {[
            { value: '15+', label: 'лет на рынке' },
            { value: '500+', label: 'позиций в каталоге' },
            { value: '1000+', label: 'корпоративных клиентов' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-3xl font-bold mb-1" style={{ color: '#0891B2' }}>{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Наша миссия</h2>
        <p className="text-gray-600 leading-relaxed">
          Обеспечивать системных интеграторов, дата-центры и корпоративных заказчиков
          качественным IT-оборудованием с надёжной поддержкой на всех этапах — от подбора
          до постгарантийного обслуживания.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Официальное дистрибьюторство</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• <strong>InWin</strong> — корпуса и блоки питания</li>
          <li>• <strong>Powerman</strong> — ИБП, корпуса, серверные компоненты</li>
          <li>• <strong>ASRock Rack</strong> — серверные материнские платы и платформы</li>
          <li>• <strong>Gigabyte</strong> — серверные решения и компоненты</li>
        </ul>
      </div>
    </div>
  )
}
