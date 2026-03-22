export const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Olá, eu sou <span className="text-[#994828]">Geovani Neumann</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              Desenvolvedor Front-end que transforma ideias em experiências digitais fluidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#portfolio" className="bg-[#994828] text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-[#b85c34] transition transform hover:scale-105 text-center">
                Ver Portfólio
              </a>
              <a href="#contact" className="border-2 border-[#994828] text-[#994828] px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-[#994828] hover:text-black transition transform hover:scale-105 text-center">
                Contato
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <img 
              src="https://i.ibb.co/JW1Dvnd8/Design-sem-nome-7-1.jpg" 
              alt="Geovani Neumann"
              className="rounded-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover border-4 border-[#994828] shadow-2xl transition hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}