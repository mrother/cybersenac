interface CTASectionProps {
  onNavigate: (section: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Teste Seus Conhecimentos</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Complete o quiz para avaliar seu nível de conhecimento em cybersegurança
        </p>
        <button
          onClick={() => onNavigate('quiz')}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 font-semibold text-lg"
        >
          Iniciar Quiz
        </button>
      </div>
    </section>
  );
}
