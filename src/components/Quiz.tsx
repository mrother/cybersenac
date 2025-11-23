import { useState } from 'react';
import { QuizQuestion } from '../types/quiz';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (selectedAnswers: number[]) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      onComplete(selectedAnswers);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Quiz de Cybersegurança</h2>
              <span className="text-cyan-400 font-semibold">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-white mb-6">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${selectedAnswers[currentQuestion] === index
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
                  <p className="text-gray-300">{questions[currentQuestion].explanation}</p>
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
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
