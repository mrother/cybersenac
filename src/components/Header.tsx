import { Shield } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ currentSection, onSectionChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">CyberSenac</span>
            {/*<img src="/logo_senac_default.png" alt="CyberSenac" className="h-10" />*/}
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => onSectionChange('home')}
              className={`px-4 py-2 rounded-lg transition-all ${currentSection === 'home'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
            >
              Início
            </button>
            <button
              onClick={() => onSectionChange('threats')}
              className={`px-4 py-2 rounded-lg transition-all ${currentSection === 'threats'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
            >
              Ameaças
            </button>
            <button
              onClick={() => onSectionChange('protection')}
              className={`px-4 py-2 rounded-lg transition-all ${currentSection === 'protection'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
            >
              Proteção
            </button>
            <button
              onClick={() => onSectionChange('glossary')}
              className={`px-4 py-2 rounded-lg transition-all ${currentSection === 'glossary'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
            >
              Glossário
            </button>
            <button
              onClick={() => onSectionChange('quiz')}
              className={`px-4 py-2 rounded-lg transition-all ${currentSection === 'quiz'
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
  );
}
