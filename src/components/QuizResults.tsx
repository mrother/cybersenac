import { Award, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types/quiz';

interface QuizResultsProps {
  questions: QuizQuestion[];
  selectedAnswers: number[];
  onRestart: () => void;
  onBackToContent: () => void;
}

export function QuizResults({ questions, selectedAnswers, onRestart, onBackToContent }: QuizResultsProps) {
  const getScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const getScorePercentage = () => {
    return Math.round((getScore() / questions.length) * 100);
  };

  const score = getScore();
  const percentage = getScorePercentage();

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
          <div className="mb-6">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Quiz Concluído!</h2>
            <p className="text-gray-300">Veja como você se saiu</p>
          </div>

          <div className="mb-8">
            <div className="text-6xl font-bold text-cyan-400 mb-2">
              {percentage}%
            </div>
            <p className="text-xl text-gray-300">
              {score} de {questions.length} respostas corretas
            </p>
          </div>

          <div className="mb-8">
            <div className="grid gap-4">
              {questions.map((question, index) => (
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
              {percentage >= 80 ? (
                <p className="text-green-400 font-semibold">Excelente! Você tem um bom conhecimento em cybersegurança.</p>
              ) : percentage >= 60 ? (
                <p className="text-yellow-400 font-semibold">Bom trabalho! Continue estudando para aprimorar seus conhecimentos.</p>
              ) : (
                <p className="text-red-400 font-semibold">Recomendamos revisar o conteúdo e tentar novamente.</p>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onRestart}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer Quiz
              </button>
              <button
                onClick={onBackToContent}
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all"
              >
                Voltar ao Conteúdo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
