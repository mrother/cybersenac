import { Lock, Shield, Database, CheckCircle } from 'lucide-react';

export function Protection() {
  return (
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
  );
}
