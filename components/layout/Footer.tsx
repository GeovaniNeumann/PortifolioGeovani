export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black/90 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500">&copy; {currentYear} Geovani Neumann. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/GeovaniNeumann" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#994828] transition">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com/in/geovani-neumann-7a88b0294" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#994828] transition">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="https://www.instagram.com/geovani_neumann/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#994828] transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}