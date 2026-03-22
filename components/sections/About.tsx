export const About = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Git']
  
  return (
    <section id="about" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://i.ibb.co/CSXg0Np/Design-sem-nome-10.jpg" 
              alt="Trabalhando"
              className="rounded-2xl w-full shadow-2xl border border-white/10"
            />
          </div>
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Desenvolvedor Web</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Apaixonado por criar soluções digitais que resolvem problemas reais. 
              Com formação em Análise e Desenvolvimento de Sistemas e especialização em Desenvolvimento Web.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Acredito que a tecnologia deve ser acessível e intuitiva para todos, 
              por isso me dedico a criar interfaces limpas e experiências de usuário memoráveis.
            </p>
            <div>
              <h4 className="font-bold mb-3 text-[#994828]">Minhas Habilidades</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-black/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-[#994828] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}