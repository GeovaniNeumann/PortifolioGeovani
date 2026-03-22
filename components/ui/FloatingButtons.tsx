'use client'

import { useEffect, useState } from 'react'

export const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
  }, [])

  const whatsappUrl = isMobile
    ? 'whatsapp://send?phone=5541997552818'
    : 'https://wa.me/5541997552818'

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-col gap-3 sm:gap-4 z-50">
      <a
        href="https://linkedin.com/in/geovani-neumann-7a88b0294"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white text-lg sm:text-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href={whatsappUrl}
        target={!isMobile ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg sm:text-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}