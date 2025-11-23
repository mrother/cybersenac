interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Aprenda
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Cybersegurança</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Proteja-se contra ameaças digitais com conhecimento prático e atualizado.
            Explore conceitos essenciais e teste seus conhecimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('threats')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 font-semibold"
            >
              Começar a Aprender
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 font-semibold"
            >
              Fazer Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
