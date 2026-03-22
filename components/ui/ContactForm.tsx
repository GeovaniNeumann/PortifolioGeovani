'use client'

import { useState } from 'react'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Criar a mensagem para o WhatsApp
    const message = `Olá Geovani, vim através do seu portfólio!%0A%0A📝 *Informações de Contato:*%0A👤 Nome: ${formData.name}%0A📧 Email: ${formData.email}%0A💬 Mensagem: ${formData.message}`
    
    // Número do WhatsApp (já configurado)
    const phoneNumber = '5541997552818'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Limpar formulário
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-center mb-6 text-[#994828]">Envie uma Mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#994828] transition"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#994828] transition"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#994828] transition resize-none"
            placeholder="Sua mensagem..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#994828] text-white font-semibold py-3 rounded-lg hover:bg-[#b85c34] transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp 💬'}
        </button>
      </form>
    </div>
  )
}