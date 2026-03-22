import { ContactForm } from '@/components/ui/ContactForm'

export const Contact = () => {
  const contacts = [
    { icon: 'fas fa-envelope', title: 'Email', value: 'Geovanefr@gmail.com', href: 'mailto:Geovanefr@gmail.com' },
    { icon: 'fas fa-phone', title: 'Telefone', value: '(41) 99755-2818', href: 'tel:+5541997552818' },
    { icon: 'fab fa-whatsapp', title: 'WhatsApp', value: 'Enviar mensagem', href: 'https://wa.me/5541997552818' },
  ]

  return (
    <section id="contact" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Entre em Contato</h2>
        
        {/* Cards de Contato */}
        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#994828]/30 hover:border-[#994828] border border-white/10 w-[200px] md:w-[250px] text-center group"
            >
              <i className={`${contact.icon} text-2xl md:text-3xl text-[#994828] mb-3 md:mb-4 block transition-transform duration-300 group-hover:scale-110`}></i>
              <h3 className="text-white text-base md:text-lg font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm group-hover:text-[#994828] transition-colors break-words">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Formulário de Contato */}
        <ContactForm />
      </div>
    </section>
  )
}