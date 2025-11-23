import { QuizQuestion } from '../types/quiz';

// Pool completo de perguntas abrangendo todos os tópicos
export const quizQuestionPool: QuizQuestion[] = [
  // Senhas e Autenticação
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
    question: "O que é autenticação de dois fatores (2FA)?",
    options: [
      "Usar duas senhas diferentes",
      "Uma camada extra de segurança que requer dois tipos de verificação",
      "Fazer login duas vezes",
      "Ter duas contas diferentes"
    ],
    correct: 1,
    explanation: "2FA adiciona uma camada extra de segurança exigindo algo que você sabe (senha) e algo que você tem (código do celular, app autenticador, etc.)."
  },
  {
    id: 3,
    question: "O que é um ataque de força bruta (brute force)?",
    options: [
      "Um ataque físico a servidores",
      "Tentativa sistemática de todas as combinações possíveis de senha",
      "Instalação forçada de malware",
      "Sobrecarga de um servidor com tráfego"
    ],
    correct: 1,
    explanation: "Brute force é a tentativa sistemática de todas as combinações possíveis de senha até encontrar a correta, por isso senhas fortes são essenciais."
  },
  {
    id: 4,
    question: "O que é credential stuffing?",
    options: [
      "Armazenar muitas senhas no navegador",
      "Usar credenciais vazadas de um serviço para tentar acessar outros",
      "Criar várias contas no mesmo site",
      "Compartilhar senhas com colegas"
    ],
    correct: 1,
    explanation: "Credential stuffing usa credenciais vazadas de um serviço para tentar acessar outros, explorando o fato de que pessoas reutilizam senhas."
  },

  // Phishing e Engenharia Social
  {
    id: 5,
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
    id: 6,
    question: "Qual é a diferença entre phishing e spear phishing?",
    options: [
      "Não há diferença",
      "Spear phishing é direcionado a indivíduos específicos",
      "Phishing é mais perigoso",
      "Spear phishing usa apenas SMS"
    ],
    correct: 1,
    explanation: "Spear phishing é um ataque de phishing direcionado e personalizado para indivíduos ou organizações específicas, tornando-o mais convincente."
  },
  {
    id: 7,
    question: "O que é vishing?",
    options: [
      "Phishing via vírus",
      "Phishing via vídeo",
      "Phishing por voz/chamadas telefônicas",
      "Phishing visual"
    ],
    correct: 2,
    explanation: "Vishing (voice phishing) usa chamadas telefônicas para enganar vítimas, como golpes de falsos técnicos de suporte ou bancos."
  },
  {
    id: 8,
    question: "O que caracteriza um ataque de pretexting?",
    options: [
      "Envio de e-mails em massa",
      "Criar um cenário falso para obter informações da vítima",
      "Usar textos longos para confundir",
      "Atacar antes de um evento importante"
    ],
    correct: 1,
    explanation: "Pretexting envolve criar um cenário falso e se passar por alguém confiável para manipular a vítima a revelar informações."
  },
  {
    id: 9,
    question: "O que é baiting em segurança da informação?",
    options: [
      "Usar iscas de pesca digitais",
      "Oferecer algo atraente para enganar a vítima",
      "Esperar pacientemente por um ataque",
      "Testar a segurança de um sistema"
    ],
    correct: 1,
    explanation: "Baiting oferece algo atraente (como USB 'perdido' ou download grátis) para enganar a vítima a realizar uma ação comprometedora."
  },

  // Malware
  {
    id: 10,
    question: "O que é ransomware?",
    options: [
      "Software de resgate de dados",
      "Malware que criptografa arquivos e exige pagamento",
      "Programa para fazer backup",
      "Antivírus gratuito"
    ],
    correct: 1,
    explanation: "Ransomware é um malware que criptografa arquivos da vítima e exige pagamento de resgate para desbloqueá-los."
  },
  {
    id: 11,
    question: "Qual a diferença entre vírus e worm?",
    options: [
      "Não há diferença",
      "Worm se replica sozinho sem precisar de arquivo hospedeiro",
      "Vírus é mais perigoso",
      "Worm só afeta sistemas Windows"
    ],
    correct: 1,
    explanation: "Worm é autorreplicável e se espalha pela rede sozinho, enquanto vírus precisa infectar arquivos hospedeiros para se propagar."
  },
  {
    id: 12,
    question: "O que é um Trojan (Cavalo de Troia)?",
    options: [
      "Um vírus grego antigo",
      "Software disfarçado de programa legítimo que executa ações maliciosas",
      "Um tipo de firewall",
      "Uma técnica de criptografia"
    ],
    correct: 1,
    explanation: "Trojan é um malware disfarçado de programa legítimo que executa ações maliciosas sem o conhecimento do usuário."
  },
  {
    id: 13,
    question: "O que é spyware?",
    options: [
      "Software para espionar concorrentes",
      "Software que coleta informações do usuário sem consentimento",
      "Programa de vigilância legal",
      "Ferramenta de monitoramento de rede"
    ],
    correct: 1,
    explanation: "Spyware coleta informações sobre o usuário sem seu consentimento, podendo roubar senhas, hábitos de navegação e dados pessoais."
  },
  {
    id: 14,
    question: "O que é um keylogger?",
    options: [
      "Software para aprender digitação",
      "Programa que registra teclas digitadas para roubar informações",
      "Ferramenta de backup de arquivos",
      "Sistema de bloqueio de teclado"
    ],
    correct: 1,
    explanation: "Keylogger registra secretamente todas as teclas digitadas pelo usuário para roubar senhas e informações confidenciais."
  },
  {
    id: 15,
    question: "O que é um rootkit?",
    options: [
      "Ferramenta de administração de sistemas",
      "Conjunto de ferramentas que permite acesso privilegiado e oculta sua presença",
      "Sistema de backup raiz",
      "Programa de otimização"
    ],
    correct: 1,
    explanation: "Rootkit permite acesso privilegiado ao sistema enquanto oculta sua presença, sendo muito difícil de detectar."
  },

  // Ataques de Rede
  {
    id: 16,
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
    id: 17,
    question: "O que é um ataque Man-in-the-Middle (MITM)?",
    options: [
      "Um ataque no meio do dia",
      "Interceptação de comunicação entre duas partes",
      "Ataque ao servidor central",
      "Vírus que afeta a memória RAM"
    ],
    correct: 1,
    explanation: "MITM é a interceptação de comunicação entre duas partes para espionar ou modificar dados transmitidos."
  },
  {
    id: 18,
    question: "O que é um ataque DDoS?",
    options: [
      "Vírus de computador",
      "Sobrecarga de servidor com tráfego massivo para torná-lo indisponível",
      "Técnica de criptografia",
      "Protocolo de segurança"
    ],
    correct: 1,
    explanation: "DDoS (Distributed Denial of Service) sobrecarrega um servidor com tráfego massivo de múltiplas fontes, tornando-o indisponível."
  },
  {
    id: 19,
    question: "O que é DNS spoofing?",
    options: [
      "Backup de DNS",
      "Manipulação de registros DNS para redirecionar tráfego",
      "Otimização de DNS",
      "Criptografia de DNS"
    ],
    correct: 1,
    explanation: "DNS spoofing manipula registros DNS para redirecionar tráfego para servidores maliciosos, mesmo quando você digita a URL correta."
  },
  {
    id: 20,
    question: "O que é um Evil Twin em segurança de redes?",
    options: [
      "Dois hackers trabalhando juntos",
      "Ponto de acesso Wi-Fi falso que imita uma rede legítima",
      "Vírus que se duplica",
      "Backup de rede"
    ],
    correct: 1,
    explanation: "Evil Twin é um ponto de acesso Wi-Fi falso que imita uma rede legítima para interceptar dados dos usuários que se conectam."
  },

  // Ataques Web
  {
    id: 21,
    question: "O que é SQL Injection?",
    options: [
      "Inserção de código SQL malicioso para manipular banco de dados",
      "Técnica de otimização de banco de dados",
      "Backup de banco de dados",
      "Linguagem de programação"
    ],
    correct: 0,
    explanation: "SQL Injection insere código SQL malicioso em campos de entrada para manipular, extrair ou deletar dados do banco de dados."
  },
  {
    id: 22,
    question: "O que é Cross-Site Scripting (XSS)?",
    options: [
      "Compartilhamento de scripts entre sites",
      "Injeção de scripts maliciosos em páginas web",
      "Otimização de sites",
      "Técnica de SEO"
    ],
    correct: 1,
    explanation: "XSS injeta scripts maliciosos em páginas web que são executados no navegador de outros usuários, podendo roubar dados ou sessões."
  },
  {
    id: 23,
    question: "O que é CSRF (Cross-Site Request Forgery)?",
    options: [
      "Técnica de criptografia",
      "Força usuário autenticado a executar ações indesejadas",
      "Protocolo de segurança",
      "Tipo de firewall"
    ],
    correct: 1,
    explanation: "CSRF força um usuário autenticado a executar ações indesejadas em uma aplicação web onde está autenticado, sem seu conhecimento."
  },

  // Proteção e Backup
  {
    id: 24,
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
    id: 25,
    question: "O que é a regra 3-2-1 de backup?",
    options: [
      "3 backups por semana, 2 servidores, 1 administrador",
      "3 cópias dos dados, 2 tipos de mídia, 1 cópia offsite",
      "3 senhas, 2 fatores, 1 backup",
      "Fazer backup às 3h, 2h e 1h da manhã"
    ],
    correct: 1,
    explanation: "A regra 3-2-1 é: manter 3 cópias dos dados, em 2 tipos diferentes de mídia, com 1 cópia armazenada fora do local (offsite)."
  },
  {
    id: 26,
    question: "Qual é a melhor prática para atualizar software?",
    options: [
      "Nunca atualizar para evitar bugs",
      "Esperar 5 anos antes de atualizar",
      "Instalar atualizações de segurança assim que disponíveis",
      "Atualizar apenas quando o computador parar de funcionar"
    ],
    correct: 2,
    explanation: "Atualizações de segurança devem ser instaladas assim que disponíveis, pois corrigem vulnerabilidades que podem ser exploradas."
  },

  // Mobile e IoT
  {
    id: 27,
    question: "O que é juice jacking?",
    options: [
      "Roubo de suco em cafeterias",
      "Comprometimento de dispositivo via porta USB em estação pública",
      "Sobrecarga de bateria",
      "Técnica de carregamento rápido"
    ],
    correct: 1,
    explanation: "Juice jacking compromete dispositivos através da porta USB em estações de carregamento públicas, podendo instalar malware ou roubar dados."
  },
  {
    id: 28,
    question: "Por que dispositivos IoT são vulneráveis?",
    options: [
      "São muito caros",
      "Frequentemente têm senhas padrão e firmware desatualizado",
      "Consomem muita energia",
      "São muito complexos"
    ],
    correct: 1,
    explanation: "Dispositivos IoT frequentemente vêm com senhas padrão não alteradas e firmware desatualizado, tornando-os alvos fáceis para ataques."
  },
  {
    id: 29,
    question: "O que é SIM swapping?",
    options: [
      "Trocar o chip do celular por um novo",
      "Técnica para interceptar SMS convencendo operadora a transferir número",
      "Backup de contatos",
      "Dual SIM"
    ],
    correct: 1,
    explanation: "SIM swapping convence a operadora a transferir seu número para um chip controlado pelo atacante, permitindo interceptar SMS e códigos 2FA."
  },

  // Criptografia e Privacidade
  {
    id: 30,
    question: "O que significa HTTPS no início de uma URL?",
    options: [
      "Site de alta velocidade",
      "Conexão criptografada e segura",
      "Site governamental",
      "Página de ajuda"
    ],
    correct: 1,
    explanation: "HTTPS indica que a conexão está criptografada usando SSL/TLS, protegendo os dados transmitidos entre você e o site."
  },
  {
    id: 31,
    question: "O que é cryptojacking?",
    options: [
      "Roubo de criptomoedas",
      "Uso não autorizado de recursos computacionais para minerar criptomoedas",
      "Investimento em criptomoedas",
      "Criptografia de dados"
    ],
    correct: 1,
    explanation: "Cryptojacking usa secretamente recursos computacionais da vítima para minerar criptomoedas, deixando o dispositivo lento."
  },
  {
    id: 32,
    question: "Por que é importante verificar o certificado SSL de um site?",
    options: [
      "Para ver quem criou o site",
      "Para garantir que você está no site legítimo e não em uma cópia falsa",
      "Para melhorar a velocidade",
      "Não é importante"
    ],
    correct: 1,
    explanation: "Verificar o certificado SSL ajuda a confirmar a identidade do site e garantir que você não está em um site falso criado por atacantes."
  },

  // Ameaças Emergentes
  {
    id: 33,
    question: "O que são deepfakes?",
    options: [
      "Backups profundos de dados",
      "Mídia sintética criada por IA para personificar pessoas",
      "Websites muito complexos",
      "Vírus submarinos"
    ],
    correct: 1,
    explanation: "Deepfakes são vídeos ou áudios sintéticos criados por IA que personificam pessoas de forma realista, podendo ser usados para fraudes."
  },
  {
    id: 34,
    question: "O que é um ataque à cadeia de suprimentos (supply chain)?",
    options: [
      "Roubo de mercadorias",
      "Comprometimento de software através de fornecedores confiáveis",
      "Atraso na entrega",
      "Problema de logística"
    ],
    correct: 1,
    explanation: "Ataques à cadeia de suprimentos comprometem software ou hardware através de fornecedores confiáveis, afetando todos os usuários do produto."
  },
  {
    id: 35,
    question: "O que é um zero-day exploit?",
    options: [
      "Ataque no primeiro dia do mês",
      "Exploração de vulnerabilidade desconhecida antes que patch esteja disponível",
      "Ataque que não deixa rastros",
      "Vírus que se autodestrói"
    ],
    correct: 1,
    explanation: "Zero-day exploit explora uma vulnerabilidade desconhecida pelo fabricante, antes que uma correção esteja disponível, sendo muito perigoso."
  },

  // Boas Práticas
  {
    id: 36,
    question: "Qual é a melhor prática ao receber um e-mail suspeito?",
    options: [
      "Clicar nos links para verificar",
      "Encaminhar para todos os contatos",
      "Não clicar em links, verificar remetente e reportar se suspeito",
      "Responder pedindo mais informações"
    ],
    correct: 2,
    explanation: "Nunca clique em links suspeitos. Verifique o remetente cuidadosamente e reporte e-mails de phishing para sua equipe de TI ou provedor."
  },
  {
    id: 37,
    question: "O que você deve fazer ao sair temporariamente do computador no trabalho?",
    options: [
      "Deixar tudo aberto para voltar rápido",
      "Bloquear a tela (Win+L ou Cmd+Ctrl+Q)",
      "Desligar o computador",
      "Pedir para alguém vigiar"
    ],
    correct: 1,
    explanation: "Sempre bloqueie a tela ao se afastar do computador para evitar acesso não autorizado, mesmo em ambientes 'confiáveis'."
  },
  {
    id: 38,
    question: "Como identificar um site potencialmente falso?",
    options: [
      "Verificar HTTPS, URL correta, erros de ortografia e certificado",
      "Pela cor do site",
      "Pelo tamanho das fontes",
      "Sites falsos são impossíveis de identificar"
    ],
    correct: 0,
    explanation: "Verifique se tem HTTPS, a URL está correta (sem erros sutis), certificado válido e não há erros de ortografia no conteúdo."
  },
  {
    id: 39,
    question: "Qual a forma mais segura de compartilhar senhas com colegas de equipe?",
    options: [
      "Por e-mail",
      "Escrevendo em papel",
      "Usando gerenciador de senhas com compartilhamento seguro",
      "Por mensagem de WhatsApp"
    ],
    correct: 2,
    explanation: "Gerenciadores de senhas oferecem recursos de compartilhamento seguro e criptografado, muito mais seguros que e-mail ou mensagens."
  },
  {
    id: 40,
    question: "O que fazer se você suspeita que foi vítima de um ataque?",
    options: [
      "Esperar para ver o que acontece",
      "Desconectar da rede, mudar senhas e reportar ao TI/autoridades",
      "Continuar usando normalmente",
      "Formatar o computador imediatamente"
    ],
    correct: 1,
    explanation: "Desconecte-se da rede para evitar propagação, mude senhas de um dispositivo seguro e reporte imediatamente ao TI ou autoridades."
  },

  // Dados e Privacidade
  {
    id: 41,
    question: "O que é um data breach?",
    options: [
      "Backup de dados",
      "Acesso não autorizado e extração de dados confidenciais",
      "Transferência legal de dados",
      "Organização de banco de dados"
    ],
    correct: 1,
    explanation: "Data breach é o acesso não autorizado e extração de dados confidenciais de uma organização, podendo expor informações pessoais."
  },
  {
    id: 42,
    question: "O que é metadata leakage?",
    options: [
      "Perda de dados importantes",
      "Vazamento de informações através de metadados de arquivos",
      "Problema de rede",
      "Erro de banco de dados"
    ],
    correct: 1,
    explanation: "Metadata leakage vaza informações através de metadados (como EXIF em fotos) que podem revelar localização, autor, data e outros dados."
  },
  {
    id: 43,
    question: "Por que você não deve usar a mesma senha em múltiplos sites?",
    options: [
      "Para lembrar de mais senhas",
      "Se um site for comprometido, todos ficam vulneráveis",
      "Não há problema em reutilizar senhas",
      "Para gastar mais tempo trocando senhas"
    ],
    correct: 1,
    explanation: "Se você reutiliza senhas e um site é comprometido, atacantes podem usar essas credenciais em outros serviços (credential stuffing)."
  },
  {
    id: 44,
    question: "O que são cookies de terceiros e por que são uma preocupação de privacidade?",
    options: [
      "Biscoitos de outras pessoas",
      "Rastreadores que seguem sua navegação entre sites diferentes",
      "Cookies mais saborosos",
      "Arquivos de backup"
    ],
    correct: 1,
    explanation: "Cookies de terceiros rastreiam sua navegação entre diferentes sites, criando perfis detalhados sobre seus hábitos e interesses."
  },
  {
    id: 45,
    question: "O que é shoulder surfing?",
    options: [
      "Surfar na internet",
      "Observar tela ou teclado para obter informações confidenciais",
      "Compartilhar computador com colegas",
      "Técnica de fisioterapia"
    ],
    correct: 1,
    explanation: "Shoulder surfing é observar diretamente a tela ou teclado de alguém para obter informações confidenciais como senhas."
  },

  // Avançado
  {
    id: 46,
    question: "O que é um ataque de força bruta distribuído?",
    options: [
      "Vários servidores atacando simultaneamente",
      "Múltiplos dispositivos tentando adivinhar senha simultaneamente",
      "Ataque muito violento",
      "Distribuição de vírus"
    ],
    correct: 1,
    explanation: "Ataque de força bruta distribuído usa múltiplos dispositivos ou endereços IP para tentar adivinhar senhas, dificultando o bloqueio."
  },
  {
    id: 47,
    question: "O que torna o whaling diferente do phishing comum?",
    options: [
      "É feito no mar",
      "Tem como alvo executivos de alto nível",
      "É mais rápido",
      "Não há diferença"
    ],
    correct: 1,
    explanation: "Whaling é spear phishing direcionado especificamente a executivos de alto nível (CEOs, CFOs), com ataques muito sofisticados."
  },
  {
    id: 48,
    question: "O que é tailgating em segurança física?",
    options: [
      "Seguir alguém muito de perto no trânsito",
      "Seguir pessoa autorizada para ganhar acesso a áreas restritas",
      "Técnica de backup",
      "Tipo de firewall"
    ],
    correct: 1,
    explanation: "Tailgating é seguir uma pessoa autorizada para entrar em áreas restritas sem usar credenciais próprias, explorando a cortesia."
  },
  {
    id: 49,
    question: "O que é um botnet?",
    options: [
      "Rede de robôs físicos",
      "Rede de dispositivos infectados controlados remotamente",
      "Sistema de automação",
      "Tipo de rede social"
    ],
    correct: 1,
    explanation: "Botnet é uma rede de dispositivos infectados que são controlados remotamente para realizar ataques coordenados como DDoS."
  },
  {
    id: 50,
    question: "Por que atualizações de segurança são importantes mesmo para software antigo?",
    options: [
      "Para melhorar a aparência",
      "Corrigem vulnerabilidades que podem ser exploradas por atacantes",
      "Para ocupar espaço em disco",
      "Não são importantes"
    ],
    correct: 1,
    explanation: "Atualizações corrigem vulnerabilidades de segurança. Software desatualizado é um dos principais vetores de ataque."
  }
];

// Função para selecionar perguntas aleatórias
export function getRandomQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...quizQuestionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, quizQuestionPool.length));
}

// Manter compatibilidade com código existente
export const quizQuestions = quizQuestionPool;
