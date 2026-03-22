'use client'

import { useState, useEffect } from 'react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#994828] text-black rounded-full flex items-center justify-center text-xl cursor-pointer transition-all duration-300 hover:bg-[#b85c34] hover:-translate-y-1 shadow-lg z-50"
      aria-label="Voltar ao topo"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}
