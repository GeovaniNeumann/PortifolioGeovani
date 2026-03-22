'use client'

import { useState } from 'react'

const portfolioItems = [
  {
    title: 'Slimshape digital',
    description: 'Desenvolvimento de site estratégico e dashboard para a Slim Shape, integrando catálogo de programas de emagrecimento, informações especializadas sobre saúde e agendamento de consultas.',
    image: 'https://i.ibb.co/pBqwnFhk/Gemini-Generated-Image-oks7umoks7umoks7-1.png',
    url: 'https://www.slimshapedigital.com.br/',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
    category: 'Sites'
  },
  {
    title: 'Qfarma Vacinas',
    description: 'Desenvolvimento de site institucional estratégico para a QFarma Vacinas, integrando catálogo de serviços, informações sobre vacinas e canal de agendamento.',
    image: 'https://i.ibb.co/zWLxXSfk/Logo-da-qfarma.png',
    url: 'https://www.qfarmavacinas.com.br/',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
    category: 'Sites'
  },
  {
    title: 'DL Frios',
    description: 'Página para revendedora de frios com catálogo de produtos e informações de contato.',
    image: 'https://i.ibb.co/vxJq0MrG/DLfrios.png',
    url: 'https://dlfrios.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Sites'
  },
  {
  title: 'LA Car center prime',
  description: 'Página para oficina mecânica com serviços, portfólio e formulário de contato.',
  image: 'https://i.ibb.co/SDgdrnjc/Design-sem-nome-4.jpg',
  url: 'https://lacarprime.vercel.app/', // Link atualizado
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  category: 'Sites'
},
  {
    title: 'Neumann Estética Automotiva',
    description: 'Página para estética automotiva com serviços, galeria e informações de contato.',
    image: 'https://i.ibb.co/DfmTL56n/lavacarprimo.jpg',
    url: 'https://neumannesteticaautomotiva.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Sites'
  },
  {
  title: 'Adriana Bolos',
  description: 'Página para Confeitaria com catálogo de produtos, sobre e informações de contato.',
  image: 'https://i.ibb.co/Wvc3FSwV/Sem-nome-Post-para-Instagram-45-2.jpg',
  url: 'https://adrianaconfeiteira.vercel.app/', // Link atualizado
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  category: 'Sites'
},
  {
    title: 'Cantinho Das Bonecas',
    description: 'Página para artesanatos e decoração com galeria de produtos e informações de contato.',
    image: 'https://i.ibb.co/Wbrpc91/Logotipo-Juracema-neumann.jpg',
    url: 'https://cantinhodasbonecas.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Sites'
  },
  {
    title: 'Anjus Hot Dog',
    description: 'Página para Cachorro Quente com cardápio, localização e informações de contato.',
    image: 'https://i.ibb.co/whDQ6TFL/logoanjus.png',
    url: 'https://anjushotdog.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Sites'
  },
  {
    title: 'Anderson Brito',
    description: 'Página para personal trainer com serviços, depoimentos e informações de contato.',
    image: 'https://i.ibb.co/jd7bkKP/Logobrito.jpg',
    url: 'https://anderbritto.netlify.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'Sites'
  }
]

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))]

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category))
    }
  }

  return (
    <section id="portfolio" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meu Portfólio</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#994828] border-[#994828] text-black'
                  : 'bg-black/50 backdrop-blur-sm border-2 border-gray-500 text-gray-300 hover:bg-[#994828] hover:border-[#994828] hover:text-black'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#994828]/30 border border-white/10 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#994828] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#b85c34] transition transform hover:scale-105"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/60 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm flex items-center gap-2 hover:text-[#994828] transition-colors"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Visitar Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}