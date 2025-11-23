import { AlertTriangle, Eye, Wifi, UserX, Key, FileWarning } from 'lucide-react';

export function Threats() {
  return (
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

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-all">
              <UserX className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Engenharia Social</h3>
            <p className="text-gray-300 mb-4">
              Manipulação psicológica para enganar pessoas e fazê-las cometer erros de segurança.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Pretexting</li>
              <li>• Baiting</li>
              <li>• Quid pro quo</li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-all">
              <Key className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Ataques de Senha</h3>
            <p className="text-gray-300 mb-4">
              Tentativas de descobrir senhas para obter acesso não autorizado a contas.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Força bruta</li>
              <li>• Dictionary attack</li>
              <li>• Credential stuffing</li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-all">
              <FileWarning className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Vazamento de Dados</h3>
            <p className="text-gray-300 mb-4">
              Exposição não intencional ou roubo de informações confidenciais.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Bancos de dados expostos</li>
              <li>• Insider threats</li>
              <li>• Roubo de dispositivos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
