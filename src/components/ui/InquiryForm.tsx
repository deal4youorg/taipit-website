'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface InquiryFormProps {
  productName?: string
  isEol?: boolean
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export default function InquiryForm({ productName, isEol }: InquiryFormProps) {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Укажите имя'
    if (!form.email.trim()) {
      newErrors.email = 'Укажите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Некорректный email'
    }
    if (!form.message.trim()) newErrors.message = 'Укажите сообщение'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // TODO: заменить на реальную отправку на email менеджера
    console.log('Заявка:', { productName, ...form })
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
    setForm(EMPTY_FORM)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle className="text-green-500" size={48} />
        <h3 className="text-lg font-semibold text-gray-800">Заявка отправлена!</h3>
        <p className="text-sm text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-cyan-600 hover:underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {isEol && (
        <div className="rounded-md bg-gray-100 border border-gray-200 px-4 py-3 text-sm text-gray-600">
          Запросить замену или документацию по данной модели
        </div>
      )}

      {productName && (
        <div className="text-sm text-gray-500 font-medium">
          Заявка на: <span className="text-gray-800">{productName}</span>
        </div>
      )}

      {/* Имя */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Имя <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Иван Иванов"
          className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow ${
            errors.name ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ivan@company.ru"
          className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow ${
            errors.email ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Телефон */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+7 (___) ___-__-__"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
        />
      </div>

      {/* Компания */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Компания</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="ООО «Ромашка»"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
        />
      </div>

      {/* Сообщение */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Сообщение <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Опишите ваш запрос..."
          className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-300'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors disabled:opacity-60"
        style={{ backgroundColor: loading ? '#0e7490' : '#0891B2' }}
        onMouseEnter={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = '#0e7490'
        }}
        onMouseLeave={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = '#0891B2'
        }}
      >
        <Send size={16} />
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  )
}
