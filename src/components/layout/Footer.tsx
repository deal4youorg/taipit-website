import Link from 'next/link'

const catalogLinks = [
  { href: '/catalog/cases', label: 'Корпуса InWin' },
  { href: '/catalog/psu', label: 'Блоки питания' },
  { href: '/catalog/server', label: 'Серверные решения' },
  { href: '/catalog/cooling', label: 'Охлаждение' },
  { href: '/catalog/powerman', label: 'Powerman' },
]

const companyLinks = [
  { href: '/about', label: 'О компании' },
  { href: '/news', label: 'Новости' },
  { href: '/partnership', label: 'Сотрудничество' },
  { href: '/where-to-buy', label: 'Где купить' },
  { href: '/service', label: 'Сервисные центры' },
]

const supportLinks = [
  { href: '/support', label: 'FAQ' },
  { href: '/support#docs', label: 'Документы' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1B3E' }} className="text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Taipit
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Официальный дистрибьютор InWin и Powerman. Поставщик серверного оборудования ASRock Rack, Gigabyte и других вендоров.
            </p>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Каталог
            </h3>
            <ul className="space-y-2">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Компания
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Поддержка
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">Телефон:</p>
              <a href="tel:+74951234567" className="text-sm text-gray-300 hover:text-white">
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Taipit. Все права защищены.
          </p>
          <p className="text-xs text-gray-500">
            Официальный дистрибьютор InWin &amp; Powerman в России
          </p>
        </div>
      </div>
    </footer>
  )
}
