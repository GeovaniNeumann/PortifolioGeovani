'use client'

import { useState, useEffect } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Controlar scroll do body quando o menu abre/fecha
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contact', label: 'Contato' },
  ]

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-4 md:py-5'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold z-50 relative"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#home')
            }}
          >
            Geovani<span className="text-[#994828]">Neumann</span>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-base font-medium hover:text-[#994828] transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão Hambúrguer - Apenas Mobile */}
          <button 
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 absolute ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          </button>
        </div>
      </header>
      
      {/* Overlay do Menu Mobile - Apenas Mobile */}
      <div 
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-lg z-40
          transition-all duration-500 ease-in-out
          md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Botão de Fechar (X) no canto superior direito */}
        <button 
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#994828] text-black flex items-center justify-center text-2xl hover:bg-[#b85c34] transition z-50"
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          ✕
        </button>

        {/* Menu Mobile - Centralizado */}
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-3xl font-bold hover:text-[#994828] transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Redes sociais no menu mobile */}
          <div className="flex gap-6 mt-12">
            <a 
              href="https://github.com/GeovaniNeumann" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-[#994828] transition-colors"
              onClick={closeMenu}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/geovani-neumann-7a88b0294" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-[#994828] transition-colors"
              onClick={closeMenu}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://www.instagram.com/geovani_neumann/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-[#994828] transition-colors"
              onClick={closeMenu}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Espaçador para não sobrepor o conteúdo */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}