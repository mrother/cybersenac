import { useState } from 'react';
import {
  AlertTriangle,
  Eye,
  Wifi,
  Key,
  FileWarning,
  Globe,
  Smartphone,
  Lock,
  Cpu,
  Zap,
  ChevronDown,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { threatCategories, ThreatCategory } from '../data/threatGlossary';

const iconMap: Record<string, any> = {
  AlertTriangle,
  Eye,
  Wifi,
  Key,
  FileWarning,
  Globe,
  Smartphone,
  Lock,
  Cpu,
  Zap
};

const colorMap: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
  red: { bg: 'bg-red-500/20', border: 'border-red-500/50', icon: 'text-red-400', hover: 'hover:border-red-500/70' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', icon: 'text-orange-400', hover: 'hover:border-orange-500/70' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/50', icon: 'text-purple-400', hover: 'hover:border-purple-500/70' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', icon: 'text-blue-400', hover: 'hover:border-blue-500/70' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', icon: 'text-yellow-400', hover: 'hover:border-yellow-500/70' },
  teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/50', icon: 'text-teal-400', hover: 'hover:border-teal-500/70' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/50', icon: 'text-green-400', hover: 'hover:border-green-500/70' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-500/50', icon: 'text-indigo-400', hover: 'hover:border-indigo-500/70' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-500/70' },
  rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/50', icon: 'text-rose-400', hover: 'hover:border-rose-500/70' }
};

export function Glossary() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const expandAll = () => {
    setExpandedCategories(new Set(threatCategories.map(cat => cat.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  const filteredCategories = threatCategories.map(category => {
    if (!searchTerm) return category;

    const filteredThreats = category.threats.filter(threat =>
      threat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.examples?.some(ex => ex.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return filteredThreats.length > 0 ? { ...category, threats: filteredThreats } : null;
  }).filter(Boolean) as ThreatCategory[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-bold text-white">Glossário de Ameaças</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça em detalhes todos os tipos de ameaças digitais organizados por categoria
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <input
              type="text"
              placeholder="Buscar ameaça..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors"
            >
              Expandir Tudo
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors"
            >
              Recolher Tudo
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {threatCategories.length}
            </div>
            <div className="text-gray-400 text-sm">Categorias</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {threatCategories.reduce((acc, cat) => acc + cat.threats.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Ameaças</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {filteredCategories.length}
            </div>
            <div className="text-gray-400 text-sm">Categorias Filtradas</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {filteredCategories.reduce((acc, cat) => acc + cat.threats.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Ameaças Filtradas</div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon];
            const colors = colorMap[category.color];
            const isExpanded = expandedCategories.has(category.id);

            return (
              <div
                key={category.id}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border ${colors.border} ${colors.hover} transition-all`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {category.threats.length} {category.threats.length === 1 ? 'ameaça' : 'ameaças'}
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {/* Category Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {category.threats.map((threat, index) => (
                      <div
                        key={index}
                        className="bg-slate-900/50 p-5 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {threat.name}
                        </h4>
                        <p className="text-gray-300 mb-3">
                          {threat.description}
                        </p>
                        {threat.examples && threat.examples.length > 0 && (
                          <div className="mt-3">
                            <p className="text-sm font-medium text-gray-400 mb-2">Exemplos:</p>
                            <ul className="space-y-1">
                              {threat.examples.map((example, exIndex) => (
                                <li key={exIndex} className="text-sm text-gray-400 flex items-start">
                                  <span className={`${colors.icon} mr-2`}>•</span>
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">Nenhuma ameaça encontrada para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
