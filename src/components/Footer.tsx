import { Shield } from 'lucide-react';

export function Footer() {
  return (
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
  );
}
