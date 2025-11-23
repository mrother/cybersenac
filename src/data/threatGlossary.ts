export interface ThreatItem {
  name: string;
  description: string;
  examples?: string[];
}

export interface ThreatCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  threats: ThreatItem[];
}

export const threatCategories: ThreatCategory[] = [
  {
    id: 'malware',
    name: 'Malware',
    icon: 'AlertTriangle',
    color: 'red',
    threats: [
      {
        name: 'Vírus',
        description: 'Programa malicioso que se replica e infecta outros arquivos, podendo danificar ou destruir dados.',
        examples: ['CIH/Chernobyl', 'ILOVEYOU', 'Melissa']
      },
      {
        name: 'Worm',
        description: 'Malware autorreplicável que se espalha pela rede sem precisar de um arquivo hospedeiro.',
        examples: ['WannaCry', 'Conficker', 'Stuxnet']
      },
      {
        name: 'Trojan (Cavalo de Troia)',
        description: 'Software disfarçado de programa legítimo que executa ações maliciosas sem conhecimento do usuário.',
        examples: ['Zeus', 'Emotet', 'TrickBot']
      },
      {
        name: 'Ransomware',
        description: 'Malware que criptografa arquivos e exige pagamento de resgate para desbloqueá-los.',
        examples: ['WannaCry', 'Ryuk', 'LockBit']
      },
      {
        name: 'Spyware',
        description: 'Software que coleta informações sobre o usuário sem seu consentimento.',
        examples: ['Pegasus', 'FinFisher', 'DarkHotel']
      },
      {
        name: 'Adware',
        description: 'Software que exibe anúncios indesejados, podendo incluir recursos de rastreamento.',
        examples: ['Fireball', 'Gator', 'Mindspark']
      },
      {
        name: 'Rootkit',
        description: 'Conjunto de ferramentas que permite acesso privilegiado enquanto oculta sua presença no sistema.',
        examples: ['Sony BMG rootkit', 'ZeroAccess', 'Necurs']
      },
      {
        name: 'Keylogger',
        description: 'Registra as teclas digitadas pelo usuário para roubar senhas e informações confidenciais.',
        examples: ['Olympic Vision', 'Snake Keylogger', 'Agent Tesla']
      },
      {
        name: 'Backdoor',
        description: 'Permite acesso remoto não autorizado ao sistema, contornando procedimentos de autenticação.',
        examples: ['Back Orifice', 'SubSeven', 'NetBus']
      },
      {
        name: 'Botnet',
        description: 'Rede de dispositivos infectados controlados remotamente para realizar ataques coordenados.',
        examples: ['Mirai', 'Emotet', 'TrickBot']
      }
    ]
  },
  {
    id: 'phishing',
    name: 'Phishing e Engenharia Social',
    icon: 'Eye',
    color: 'orange',
    threats: [
      {
        name: 'Phishing',
        description: 'E-mails ou mensagens fraudulentas que tentam enganar usuários para revelar informações confidenciais.',
        examples: ['E-mails falsos de bancos', 'Notificações falsas de redes sociais']
      },
      {
        name: 'Spear Phishing',
        description: 'Ataque de phishing direcionado a indivíduos ou organizações específicas, altamente personalizado.',
        examples: ['E-mails para executivos', 'Mensagens direcionadas a departamentos específicos']
      },
      {
        name: 'Whaling',
        description: 'Tipo de spear phishing que visa especificamente executivos de alto nível (CEOs, CFOs).',
        examples: ['Fraudes de CEO', 'Ataques a diretores']
      },
      {
        name: 'Smishing',
        description: 'Phishing via SMS, usando mensagens de texto para enganar vítimas.',
        examples: ['SMS de bancos falsos', 'Alertas de entrega fraudulentos']
      },
      {
        name: 'Vishing',
        description: 'Phishing por voz, usando chamadas telefônicas para obter informações confidenciais.',
        examples: ['Chamadas falsas de suporte técnico', 'Golpes de falsos bancos']
      },
      {
        name: 'Pretexting',
        description: 'Criar um cenário falso para obter informações da vítima, fingindo ser alguém confiável.',
        examples: ['Fingir ser técnico de TI', 'Simular ser cliente']
      },
      {
        name: 'Baiting',
        description: 'Oferecer algo atraente para enganar a vítima a realizar uma ação comprometedora.',
        examples: ['USB infectado deixado propositalmente', 'Download grátis de software']
      },
      {
        name: 'Quid Pro Quo',
        description: 'Oferecer um serviço ou benefício em troca de informações ou acesso.',
        examples: ['Falso suporte técnico gratuito', 'Pesquisas com prêmios falsos']
      },
      {
        name: 'Tailgating',
        description: 'Seguir pessoa autorizada para ganhar acesso físico a áreas restritas.',
        examples: ['Entrar em prédios sem crachá', 'Seguir funcionários']
      },
      {
        name: 'Pharming',
        description: 'Redirecionar usuários para sites falsos sem seu conhecimento, mesmo digitando URL correta.',
        examples: ['Envenenamento de DNS', 'Modificação de arquivo hosts']
      }
    ]
  },
  {
    id: 'network',
    name: 'Ataques de Rede',
    icon: 'Wifi',
    color: 'purple',
    threats: [
      {
        name: 'Man-in-the-Middle (MITM)',
        description: 'Interceptação de comunicação entre duas partes para espionar ou modificar dados.',
        examples: ['ARP spoofing', 'SSL stripping', 'Session hijacking']
      },
      {
        name: 'DDoS (Distributed Denial of Service)',
        description: 'Sobrecarga de um servidor ou rede com tráfego massivo, tornando-o indisponível.',
        examples: ['Ataques volumétricos', 'Ataques de aplicação', 'Ataques de protocolo']
      },
      {
        name: 'DoS (Denial of Service)',
        description: 'Ataque de negação de serviço originado de uma única fonte.',
        examples: ['Ping flood', 'SYN flood', 'HTTP flood']
      },
      {
        name: 'Packet Sniffing',
        description: 'Captura e análise de pacotes de dados transmitidos pela rede.',
        examples: ['Wireshark malicioso', 'Captura de credenciais']
      },
      {
        name: 'DNS Spoofing',
        description: 'Manipulação de registros DNS para redirecionar tráfego para servidores maliciosos.',
        examples: ['Cache poisoning', 'DNS hijacking']
      },
      {
        name: 'ARP Spoofing',
        description: 'Envio de mensagens ARP falsas para associar MAC address do atacante com IP de outro host.',
        examples: ['MITM em LAN', 'Interceptação de tráfego local']
      },
      {
        name: 'Session Hijacking',
        description: 'Roubo de sessão válida de usuário para obter acesso não autorizado.',
        examples: ['Cookie theft', 'Session fixation']
      },
      {
        name: 'Evil Twin',
        description: 'Ponto de acesso Wi-Fi falso que imita uma rede legítima para interceptar dados.',
        examples: ['WiFi público falso', 'Hotspot malicioso']
      },
      {
        name: 'IP Spoofing',
        description: 'Falsificação do endereço IP de origem para ocultar identidade ou se passar por outro dispositivo.',
        examples: ['Bypass de controle de acesso', 'Ataques DDoS']
      },
      {
        name: 'Port Scanning',
        description: 'Varredura de portas abertas em um sistema para identificar vulnerabilidades.',
        examples: ['Nmap scanning', 'Reconhecimento de rede']
      }
    ]
  },
  {
    id: 'web',
    name: 'Ataques Web',
    icon: 'Globe',
    color: 'blue',
    threats: [
      {
        name: 'SQL Injection',
        description: 'Inserção de código SQL malicioso em campos de entrada para manipular banco de dados.',
        examples: ['Extração de dados', 'Bypass de autenticação', 'Modificação de registros']
      },
      {
        name: 'Cross-Site Scripting (XSS)',
        description: 'Injeção de scripts maliciosos em páginas web visualizadas por outros usuários.',
        examples: ['XSS refletido', 'XSS armazenado', 'XSS baseado em DOM']
      },
      {
        name: 'Cross-Site Request Forgery (CSRF)',
        description: 'Força usuário autenticado a executar ações indesejadas em aplicação web.',
        examples: ['Transferências bancárias não autorizadas', 'Mudança de senha']
      },
      {
        name: 'Remote Code Execution (RCE)',
        description: 'Execução de código arbitrário remotamente em um servidor ou aplicação.',
        examples: ['Exploração de vulnerabilidades', 'Uploads maliciosos']
      },
      {
        name: 'Directory Traversal',
        description: 'Acesso a arquivos e diretórios fora do diretório raiz web.',
        examples: ['Path traversal', 'Leitura de arquivos sensíveis']
      },
      {
        name: 'File Inclusion',
        description: 'Inclusão de arquivos maliciosos em aplicações web vulneráveis.',
        examples: ['LFI (Local File Inclusion)', 'RFI (Remote File Inclusion)']
      },
      {
        name: 'Command Injection',
        description: 'Execução de comandos do sistema operacional através de aplicação vulnerável.',
        examples: ['OS command injection', 'Shell injection']
      },
      {
        name: 'XML External Entity (XXE)',
        description: 'Exploração de processadores XML mal configurados para acessar arquivos ou executar código.',
        examples: ['Leitura de arquivos locais', 'SSRF', 'DoS']
      },
      {
        name: 'Server-Side Request Forgery (SSRF)',
        description: 'Força servidor a fazer requisições para recursos internos ou externos não autorizados.',
        examples: ['Acesso a recursos internos', 'Port scanning interno']
      },
      {
        name: 'Clickjacking',
        description: 'Enganar usuário para clicar em algo diferente do que percebe, usando camadas invisíveis.',
        examples: ['UI redressing', 'Ataques de overlay']
      }
    ]
  },
  {
    id: 'password',
    name: 'Ataques de Credenciais',
    icon: 'Key',
    color: 'yellow',
    threats: [
      {
        name: 'Brute Force',
        description: 'Tentativa sistemática de todas as combinações possíveis de senha até encontrar a correta.',
        examples: ['Ataques a senhas simples', 'Crackeamento de hash']
      },
      {
        name: 'Dictionary Attack',
        description: 'Uso de lista de palavras comuns e senhas conhecidas para adivinhar credenciais.',
        examples: ['Wordlists', 'Senhas comuns']
      },
      {
        name: 'Credential Stuffing',
        description: 'Uso de credenciais vazadas de um serviço para tentar acessar outros serviços.',
        examples: ['Reutilização de senhas', 'Contas comprometidas']
      },
      {
        name: 'Password Spraying',
        description: 'Tentativa de senhas comuns contra muitas contas para evitar bloqueio.',
        examples: ['Senhas como "123456" em múltiplas contas']
      },
      {
        name: 'Rainbow Table Attack',
        description: 'Uso de tabelas pré-computadas de hashes para reverter senhas criptografadas.',
        examples: ['Crackeamento de senhas MD5', 'Ataques a hashes sem salt']
      },
      {
        name: 'Pass-the-Hash',
        description: 'Uso do hash de senha capturado para autenticação sem precisar da senha em texto claro.',
        examples: ['Ataques em redes Windows', 'Movimento lateral']
      },
      {
        name: 'Pass-the-Ticket',
        description: 'Roubo e reutilização de tickets de autenticação Kerberos.',
        examples: ['Golden ticket', 'Silver ticket']
      },
      {
        name: 'Session Token Theft',
        description: 'Roubo de tokens de sessão para se passar por usuário autenticado.',
        examples: ['Cookie hijacking', 'Token replay']
      }
    ]
  },
  {
    id: 'data',
    name: 'Vazamento e Roubo de Dados',
    icon: 'FileWarning',
    color: 'teal',
    threats: [
      {
        name: 'Data Breach',
        description: 'Acesso não autorizado e extração de dados confidenciais de uma organização.',
        examples: ['Vazamentos de dados pessoais', 'Roubo de propriedade intelectual']
      },
      {
        name: 'Insider Threat',
        description: 'Ameaça de segurança originada de dentro da organização (funcionários, ex-funcionários).',
        examples: ['Vazamento intencional', 'Negligência de segurança']
      },
      {
        name: 'Data Exfiltration',
        description: 'Transferência não autorizada de dados de um computador ou rede.',
        examples: ['Uso de USB', 'Upload para nuvem pessoal', 'Envio por e-mail']
      },
      {
        name: 'Dumpster Diving',
        description: 'Busca em lixo físico ou digital por informações confidenciais descartadas.',
        examples: ['Documentos não destruídos', 'Discos não formatados']
      },
      {
        name: 'Shoulder Surfing',
        description: 'Observação direta de tela ou teclado para obter informações confidenciais.',
        examples: ['Espiar senha digitada', 'Ver dados na tela']
      },
      {
        name: 'Database Exposure',
        description: 'Bancos de dados expostos publicamente ou mal configurados na internet.',
        examples: ['MongoDB sem autenticação', 'Buckets S3 públicos']
      },
      {
        name: 'Cloud Misconfiguration',
        description: 'Configuração inadequada de serviços em nuvem levando a exposição de dados.',
        examples: ['Permissões incorretas', 'Armazenamento público']
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Ameaças Mobile',
    icon: 'Smartphone',
    color: 'green',
    threats: [
      {
        name: 'Mobile Malware',
        description: 'Aplicativos maliciosos para dispositivos móveis que roubam dados ou danificam sistema.',
        examples: ['Trojans bancários mobile', 'Apps falsos']
      },
      {
        name: 'App Cloning',
        description: 'Cópia de aplicativos legítimos com código malicioso adicionado.',
        examples: ['Apps populares modificados', 'Jogos falsos']
      },
      {
        name: 'SMS Intercept',
        description: 'Interceptação de mensagens SMS, incluindo códigos 2FA.',
        examples: ['SIM swapping', 'SS7 exploitation']
      },
      {
        name: 'Juice Jacking',
        description: 'Compromisso de dispositivo através de porta USB em estação de carregamento pública.',
        examples: ['Carregadores públicos infectados', 'Transferência de dados não autorizada']
      },
      {
        name: 'Rogue Access Point',
        description: 'Ponto de acesso Wi-Fi falso que captura tráfego de dispositivos móveis.',
        examples: ['WiFi público malicioso', 'Hotspots falsos']
      },
      {
        name: 'OS Vulnerabilities',
        description: 'Exploração de falhas de segurança no sistema operacional mobile.',
        examples: ['Jailbreak exploits', 'Root exploits']
      }
    ]
  },
  {
    id: 'crypto',
    name: 'Criptografia e Privacidade',
    icon: 'Lock',
    color: 'indigo',
    threats: [
      {
        name: 'Weak Encryption',
        description: 'Uso de algoritmos de criptografia fracos ou desatualizados.',
        examples: ['DES', 'MD5', 'SHA1']
      },
      {
        name: 'Cryptojacking',
        description: 'Uso não autorizado de recursos computacionais para minerar criptomoedas.',
        examples: ['Scripts de mineração em sites', 'Malware minerador']
      },
      {
        name: 'SSL/TLS Downgrade',
        description: 'Forçar conexão a usar versões antigas e vulneráveis de SSL/TLS.',
        examples: ['POODLE attack', 'BEAST attack']
      },
      {
        name: 'Certificate Spoofing',
        description: 'Uso de certificados digitais falsos ou comprometidos.',
        examples: ['Certificados autoassinados maliciosos', 'CA comprometida']
      },
      {
        name: 'Metadata Leakage',
        description: 'Vazamento de informações através de metadados de arquivos ou comunicações.',
        examples: ['EXIF em fotos', 'Informações de documentos']
      }
    ]
  },
  {
    id: 'iot',
    name: 'IoT e Dispositivos Inteligentes',
    icon: 'Cpu',
    color: 'cyan',
    threats: [
      {
        name: 'IoT Botnet',
        description: 'Dispositivos IoT infectados formando rede para ataques DDoS.',
        examples: ['Mirai botnet', 'Dispositivos com senhas padrão']
      },
      {
        name: 'Firmware Vulnerabilities',
        description: 'Falhas de segurança no firmware de dispositivos IoT.',
        examples: ['Firmware desatualizado', 'Backdoors de fábrica']
      },
      {
        name: 'Smart Home Hacking',
        description: 'Comprometimento de dispositivos domésticos inteligentes.',
        examples: ['Câmeras IP hackeadas', 'Smart locks comprometidos']
      },
      {
        name: 'RFID/NFC Skimming',
        description: 'Captura não autorizada de dados de cartões RFID/NFC.',
        examples: ['Clonagem de cartões', 'Leitura de passaportes']
      }
    ]
  },
  {
    id: 'emerging',
    name: 'Ameaças Emergentes',
    icon: 'Zap',
    color: 'rose',
    threats: [
      {
        name: 'AI-Powered Attacks',
        description: 'Ataques que utilizam inteligência artificial para serem mais efetivos.',
        examples: ['Phishing gerado por IA', 'Deepfakes', 'Ataques adaptativos']
      },
      {
        name: 'Deepfake',
        description: 'Mídia sintética criada por IA para personificar pessoas de forma realista.',
        examples: ['Vídeos falsos de executivos', 'Áudio sintético para fraudes']
      },
      {
        name: 'Supply Chain Attack',
        description: 'Comprometimento de software ou hardware através da cadeia de suprimentos.',
        examples: ['SolarWinds', 'Bibliotecas comprometidas']
      },
      {
        name: 'Quantum Threat',
        description: 'Ameaça futura de computadores quânticos quebrarem criptografia atual.',
        examples: ['Quebra de RSA', 'Comprometimento de criptografia assimétrica']
      },
      {
        name: 'Fileless Malware',
        description: 'Malware que opera na memória sem escrever arquivos em disco.',
        examples: ['Living off the land attacks', 'PowerShell attacks']
      },
      {
        name: 'Zero-Day Exploit',
        description: 'Exploração de vulnerabilidade desconhecida antes que patch esteja disponível.',
        examples: ['Ataques direcionados', 'APT campaigns']
      }
    ]
  }
];
