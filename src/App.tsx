import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Threats } from './components/Threats';
import { Protection } from './components/Protection';
import { Quiz } from './components/Quiz';
import { QuizResults } from './components/QuizResults';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Glossary } from './components/Glossary';
import { getRandomQuestions } from './data/quizQuestions';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  // Gerar 10 perguntas aleatórias sempre que quizKey mudar
  const quizQuestions = useMemo(() => getRandomQuestions(10), [quizKey]);

  const handleQuizComplete = (answers: number[]) => {
    setSelectedAnswers(answers);
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setQuizKey(prev => prev + 1); // Incrementa para gerar novas perguntas aleatórias
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
      <Header currentSection={currentSection} onSectionChange={scrollToSection} />

      {currentSection === 'quiz' ? (
        !quizCompleted ? (
          <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
        ) : (
          <QuizResults
            questions={quizQuestions}
            selectedAnswers={selectedAnswers}
            onRestart={restartQuiz}
            onBackToContent={() => setCurrentSection('home')}
          />
        )
      ) : currentSection === 'glossary' ? (
        <Glossary />
      ) : (
        <main className="pt-20">
          <Hero onNavigate={scrollToSection} />
          <Threats />
          <Protection />
          <CTASection onNavigate={scrollToSection} />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
