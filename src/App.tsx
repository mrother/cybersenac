import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Wifi, Database, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é a principal característica de uma senha forte?",
    options: [
      "Ter apenas números",
      "Ser fácil de lembrar",
      "Combinar letras, números e símbolos",
      "Ter menos de 6 caracteres"
    ],
    correct: 2,
    explanation: "Uma senha forte deve combinar letras maiúsculas e minúsculas, números e símbolos especiais, com pelo menos 12 caracteres."
  },
  {
    id: 2,
    question: "O que é phishing?",
    options: [
      "Um tipo de vírus",
      "Tentativa de roubar informações pessoais através de mensagens falsas",
      "Uma forma de criptografia",
      "Um protocolo de segurança"
    ],
    correct: 1,
    explanation: "Phishing é uma técnica fraudulenta que usa mensagens falsas (e-mail, SMS, etc.) para enganar pessoas e roubar informações pessoais."
  },
  {
    id: 3,
    question: "Com que frequência você deve fazer backup dos seus dados importantes?",
    options: [
      "Uma vez por ano",
      "Apenas quando lembrar",
      "Regularmente (diariamente ou semanalmente)",
      "Nunca é necessário"
    ],
    correct: 2,
    explanation: "Backups devem ser feitos regularmente. A regra 3-2-1 recomenda: 3 cópias dos dados, em 2 tipos de mídia diferentes, com 1 cópia offsite."
  },
  {
    id: 4,
    question: "Qual dessas práticas é mais segura ao usar Wi-Fi público?",
    options: [
      "Acessar sites bancários normalmente",
      "Usar uma VPN",
      "Desabilitar todas as senhas",
      "Compartilhar a senha com outros"
    ],
    correct: 1,
    explanation: "Usar uma VPN (Virtual Private Network) criptografa sua conexão, protegendo seus dados mesmo em redes Wi-Fi públicas não seguras."
  },
  {
    id: 5,
    question: "O que é autenticação de dois fatores (2FA)?",
    options: [
      "Usar duas senhas diferentes",
      "Uma camada extra de segurança que requer dois tipos de verificação",
      "Fazer login duas vezes",
      "Ter duas contas diferentes"
    ],
    correct: 1,
    explanation: "2FA adiciona uma camada extra de segurança exigindo algo que você sabe (senha) e algo que você tem (código do celular, app autenticador, etc.)."
  }
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const getScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScorePercentage = () => {
    return Math.round((getScore() / quizQuestions.length) * 100);
  };

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId !== 'quiz') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">CyberSenac</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentSection === 'home' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('threats')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentSection === 'threats' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Ameaças
              </button>
              <button
                onClick={() => scrollToSection('protection')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentSection === 'protection' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Proteção
              </button>
              <button
                onClick={() => scrollToSection('quiz')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentSection === 'quiz' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Quiz
              </button>
            </div>
          </div>
        </nav>
      </header>

      {currentSection === 'quiz' ? (
        // Quiz Section
        <div className="pt-20 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            {!quizCompleted ? (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">Quiz de Cybersegurança</h2>
                    <span className="text-cyan-400 font-semibold">
                      {currentQuestion + 1} / {quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl text-white mb-6">{quizQuestions[currentQuestion].question}</h3>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          selectedAnswers[currentQuestion] === index
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100'
                            : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedAnswers[currentQuestion] !== undefined && (
                  <div className="mb-6">
                    <button
                      onClick={() => setShowExplanation(!showExplanation)}
                      className="text-cyan-400 hover:text-cyan-300 underline mb-3"
                    >
                      {showExplanation ? 'Ocultar' : 'Ver'} explicação
                    </button>
                    {showExplanation && (
                      <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4">
                        <p className="text-gray-300">{quizQuestions[currentQuestion].explanation}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={nextQuestion}
                    disabled={selectedAnswers[currentQuestion] === undefined}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
                  </button>
                </div>
              </div>
            ) : (
              // Quiz Results
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="mb-6">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Quiz Concluído!</h2>
                  <p className="text-gray-300">Veja como você se saiu</p>
                </div>

                <div className="mb-8">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">
                    {getScorePercentage()}%
                  </div>
                  <p className="text-xl text-gray-300">
                    {getScore()} de {quizQuestions.length} respostas corretas
                  </p>
                </div>

                <div className="mb-8">
                  <div className="grid gap-4">
                    {quizQuestions.map((question, index) => (
                      <div
                        key={question.id}
                        className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600"
                      >
                        <span className="text-gray-300">Pergunta {index + 1}</span>
                        {selectedAnswers[index] === question.correct ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-gray-300">
                    {getScorePercentage() >= 80 ? (
                      <p className="text-green-400 font-semibold">Excelente! Você tem um bom conhecimento em cybersegurança.</p>
                    ) : getScorePercentage() >= 60 ? (
                      <p className="text-yellow-400 font-semibold">Bom trabalho! Continue estudando para aprimorar seus conhecimentos.</p>
                    ) : (
                      <p className="text-red-400 font-semibold">Recomendamos revisar o conteúdo e tentar novamente.</p>
                    )}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={restartQuiz}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Refazer Quiz
                    </button>
                    <button
                      onClick={() => setCurrentSection('home')}
                      className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all"
                    >
                      Voltar ao Conteúdo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Main Content
        <main className="pt-20">
          {/* Hero Section */}
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
                    onClick={() => scrollToSection('threats')}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 font-semibold"
                  >
                    Começar a Aprender
                  </button>
                  <button
                    onClick={() => scrollToSection('quiz')}
                    className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 font-semibold"
                  >
                    Fazer Quiz
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Threats Section */}
          <section id="threats" className="py-20 px-6 bg-slate-800/30">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Principais Ameaças Digitais</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Conheça os riscos mais comuns no mundo digital e aprenda a identificá-los
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-red-500/50 transition-all transform hover:scale-105">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-all">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Malware</h3>
                  <p className="text-gray-300 mb-4">
                    Software malicioso que pode danificar, roubar dados ou tomar controle do seu dispositivo.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Vírus e worms</li>
                    <li>• Trojans e spyware</li>
                    <li>• Ransomware</li>
                  </ul>
                </div>

                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all transform hover:scale-105">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all">
                    <Eye className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Phishing</h3>
                  <p className="text-gray-300 mb-4">
                    Tentativas fraudulentas de obter informações pessoais através de mensagens falsas.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• E-mails falsos</li>
                    <li>• Sites fraudulentos</li>
                    <li>• SMS maliciosos</li>
                  </ul>
                </div>

                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all transform hover:scale-105">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all">
                    <Wifi className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ataques de Rede</h3>
                  <p className="text-gray-300 mb-4">
                    Interceptação de dados em redes inseguras ou comprometidas.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Wi-Fi público inseguro</li>
                    <li>• Man-in-the-middle</li>
                    <li>• Sniffing de dados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Protection Section */}
          <section id="protection" className="py-20 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Como se Proteger</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Medidas essenciais para manter sua segurança digital
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Senhas Fortes</h3>
                      <p className="text-gray-300">
                        Use senhas únicas com pelo menos 12 caracteres, combinando letras, números e símbolos. 
                        Considere usar um gerenciador de senhas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Autenticação em Duas Etapas</h3>
                      <p className="text-gray-300">
                        Ative a 2FA sempre que possível. Essa camada extra de segurança pode prevenir 99,9% 
                        dos ataques automatizados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Backups Regulares</h3>
                      <p className="text-gray-300">
                        Faça backups regulares dos seus dados importantes. Siga a regra 3-2-1: 
                        3 cópias, 2 mídias diferentes, 1 offsite.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Dicas Rápidas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Mantenha software sempre atualizado</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Use antivírus confiável</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Desconfie de links suspeitos</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Use VPN em Wi-Fi público</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Limite informações em redes sociais</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Monitore contas regularmente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Teste Seus Conhecimentos</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Complete o quiz para avaliar seu nível de conhecimento em cybersegurança
              </p>
              <button
                onClick={() => scrollToSection('quiz')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Iniciar Quiz
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">CyberSenac</span>
          </div>
          <p className="text-gray-400 mb-4">
            Educação em cybersegurança para estudantes
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 CyberSenac. Material educativo para fins de aprendizado.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;