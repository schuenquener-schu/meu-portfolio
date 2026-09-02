// Base de dados dos Projetos Reais do Vitor Schuenquener
const projectsData = [
  {
    id: "geac-3d",
    title: "GEAC - Gestão Documental 3D & Chatbot",
    shortDescription: "Sistema corporativo para acervo documental com visualização 3D, assistente virtual/chatbot integrado e dashboards gerenciais.",
    fullDescription: "O GEAC é uma solução corporativa desenvolvida para modernizar a gestão, catalogação e localização de acervos documentais e processos administrativos. Possui uma interface inovadora com renderização 3D interativa de prateleiras e documentos, além de um robô assistente/chatbot para suporte ao usuário e integração direta com planilhas.",
    category: "apps-script",
    categoryLabel: "Sistemas & Apps Script",
    badge: "3D & Chatbot Real",
    featured: true,
    tags: ["Google Apps Script", "JavaScript", "Visualização 3D", "Chatbot / Robô", "HTML5/CSS3", "Clasp"],
    coverImage: "assets/geac/pag_inicial.png",
    images: [
      { src: "assets/geac/pag_inicial.png", title: "Painel Inicial do Sistema GEAC", desc: "Visão geral do sistema com menus de acesso rápido e métricas" },
      { src: "assets/geac/pag_inicial_3d.png", title: "Ambiente 3D Interativo", desc: "Navegação visual imersiva no acervo documental" },
      { src: "assets/geac/prateleiras.png", title: "Visualização das Prateleiras 3D", desc: "Mapeamento espacial das caixas e prateleiras de processos" },
      { src: "assets/geac/menus.png", title: "Estrutura de Menus e Ações", desc: "Menu lateral desacoplado e opções de busca rápida" },
      { src: "assets/geac/robo.png", title: "Robô Assistente / Chatbot", desc: "Interface do assistente integrado para suporte e dúvidas" },
      { src: "assets/geac/robo_2.png", title: "Assistente Contextual", desc: "Diálogos inteligentes integrados ao fluxo de trabalho" }
    ],
    stats: {
      "Localização": "Busca visual em acervo físico e digital",
      "Tecnologia": "3D Canvas + Apps Script + Clasp",
      "Interface": "Robô Assistente e Menus Modulares"
    },
    features: [
      "Visualização 3D interativa de prateleiras e caixas de documentos",
      "Robô assistente / Chatbot integrado para apoio ao operador",
      "Catalogação e busca indexada de processos e acervo",
      "Arquitetura modular dividida em Style3D, Js3D, JsSidebar e JsChatbot",
      "Versionamento e sincronização com Google Apps Script via Clasp"
    ],
    architecture: "Frontend desacoplado em componentes HTML/CSS com controladores 3D, lógica de chatbot e backend em Google Apps Script (Código.gs) com planilhas de massa documental.",
    icon: "layers"
  },
  {
    id: "frotas",
    title: "Sistema de Gestão de Frotas & Controle de Saídas",
    shortDescription: "Plataforma web integrada para controle de saídas, viagens, motoristas, banco de horas e gestão de custos operacionais.",
    fullDescription: "Sistema completo de controle e gestão operacional de veículos e motoristas. Permite o registro de saídas e retornos em tempo real, acompanhamento geográfico/cidades de destino, cálculo e controle de banco de horas de motoristas, controle de diárias, histórico de viagens e módulo financeiro para controle de lavajatos e manutenção.",
    category: "apps-script",
    categoryLabel: "Sistemas & Apps Script",
    badge: "Gestão Operacional",
    featured: true,
    tags: ["Google Apps Script", "JavaScript", "Controle de Frotas", "Banco de Horas", "Lavajato / Custos", "Excel/Sheets"],
    coverImage: "assets/frotas/pag_inicial.png",
    images: [
      { src: "assets/frotas/pag_inicial.png", title: "Página Inicial de Frotas", desc: "Dashboard com atalhos de saída, retorno e status da frota" },
      { src: "assets/frotas/controle_saida.png", title: "Formulário de Controle de Saída", desc: "Registro detalhado com dados do veículo, motorista e destino" },
      { src: "assets/frotas/central_motiro.png", title: "Central de Motoristas & Horas", desc: "Acompanhamento de escalas, banco de horas e produtividade" },
      { src: "assets/frotas/mapa_motorista.png", title: "Mapeamento de Rotas e Destinos", desc: "Visualização de trajetos e itinerários municipais" },
      { src: "assets/frotas/dashboard_lava_jato.png", title: "Dashboard de Gestão de Lavajato", desc: "Controle financeiro e conciliação de lavagens por veículo" },
      { src: "assets/frotas/historico_de_saida.png", title: "Histórico Completo de Saídas", desc: "Tabela auditável de todas as viagens realizadas" },
      { src: "assets/frotas/modal_diarias.png", title: "Gestão de Diárias e Despesas", desc: "Cálculo e controle de diárias operacionais" },
      { src: "assets/frotas/cadastro_motoris.png", title: "Cadastro de Motoristas", desc: "Formulário de inclusão e edição de condutores" },
      { src: "assets/frotas/notificacao_para_o_motorista.png", title: "Central de Notificações", desc: "Alertas operacionais e mensagens enviadas aos motoristas" }
    ],
    stats: {
      "Rastreabilidade": "100% de controle em saídas e retornos",
      "Módulos": "9 telas e componentes dedicados",
      "Financeiro": "Controle de banco de horas e lavajatos"
    },
    features: [
      "Formulário dinâmico de saída com validação de condutor e veículo",
      "Central de motoristas com controle automático de banco de horas",
      "Painel de custos e conciliação de notas de lavajato",
      "Módulo de mapa de itinerários e municípios",
      "Sistema de autenticação e proteção por senha de administrador",
      "Script Python auxiliar (build_controlesaidas.py) para build da UI"
    ],
    architecture: "Frontend em 7 submódulos (Nav, Form, Motoristas, Histórico, Modais, State/Utils, Form Logic), backend em Apps Script (BancoHoras_Server.gs, Cidades.gs) e integração com Google Sheets.",
    icon: "truck"
  },
  {
    id: "automacao-fiplan",
    title: "Pipeline de Automação FIPLAN & Nuvem",
    shortDescription: "Pipeline ETL em Python para extração de relatórios financeiros governamentais e upload automático no Google Drive.",
    fullDescription: "Automação desenvolvida em Python para orquestrar o login, consulta e download periódico de demonstrativos financeiros e empenhos do sistema governamental FIPLAN. Realiza a sanitização de planilhas Excel (SAAS) e efetua o upload automático no Google Drive com credenciais OAuth2.",
    category: "automacao",
    categoryLabel: "Automação & Python",
    badge: "RPA & Python",
    featured: true,
    tags: ["Python 3", "Google Drive API", "OAuth2", "Pandas / Excel", "Automação Web"],
    coverImage: "assets/fiplan/03_fiplan_sistema_logado.png",
    images: [
      { src: "assets/fiplan/03_fiplan_sistema_logado.png", title: "Sistema FIPLAN Logado", desc: "Sessão autenticada e painel principal de consultas" },
      { src: "assets/fiplan/11_empenho_pesquisa_real.png", title: "Consulta e Filtros de Empenhos", desc: "Parametrização automática de filtros e busca em lote" },
      { src: "assets/fiplan/06_resultados_carregados.png", title: "Extração de Resultados", desc: "Grade de dados extraída e pronta para exportação de planilhas" }
    ],
    stats: {
      "Autonomia": "Execução periódica de downloads em lote",
      "Nuvem": "Sincronização direta com Google Drive API",
      "Dados": "Tratamento de planilhas Detalhamento SAAS"
    },
    features: [
      "Navegação automatizada com tratamento de exceções",
      "Filtros dinâmicos para consulta de despesas e empenhos",
      "Exportação e consolidação de planilhas Excel (.xlsx)",
      "Upload em nuvem com renovação automática de tokens OAuth2",
      "Estrutura modular: app.py, baixar_todos.py, drive_uploader.py"
    ],
    architecture: "Scripts em Python 3 utilizando bibliotecas de automação, manipulação de arquivos Excel e API Client oficial da Google Cloud Platform.",
    icon: "cpu"
  },
  {
    id: "ordem-fornecimento",
    title: "Gerador Automatizado de Ordens de Fornecimento",
    shortDescription: "RPA em Python para extração de metadados em PDFs de processos da SEDUC e geração dinâmica de minutas oficiais em DOCX.",
    fullDescription: "Solução em Python criada para ler arquivos de processos administrativos e editais em PDF da SEDUC, extrair com precisão tabelas de itens, dotações orçamentárias, fornecedores e valores, e injetar esses dados diretamente em minutas padrão no Microsoft Word (.docx).",
    category: "documentos",
    categoryLabel: "Processamento de Documentos",
    badge: "Extração PDF / DOCX",
    featured: true,
    tags: ["Python", "Extração PDF", "python-docx", "Regex / Parser", "Minutas Oficiais"],
    coverImage: "assets/ordem/processo_exemplo.jpeg",
    images: [
      { src: "assets/ordem/processo_exemplo.jpeg", title: "Processo e Documento de Origem", desc: "Processo administrativo oficial da SEDUC utilizado para extração dos dados contratuais" }
    ],
    stats: {
      "Agilidade": "Geração imediata de minutas formatadas",
      "Precisão": "Eliminação de erros de digitação manual",
      "Saída": "Arquivos .docx 100% diagramados"
    },
    features: [
      "Parser automatizado de texto em PDFs governamentais",
      "Extração estruturada de dados em arquivo JSON intermediário",
      "Preenchimento dinâmico de templates de contratos em Word (.docx)",
      "Suporte a itens múltiplos, valores unitários e totais",
      "Scripts generate_ordem.py com versionamento de minutas"
    ],
    architecture: "Pipeline de leitura PDF -> Estruturação JSON -> Template Engine em python-docx para emissão de ordens contratuais.",
    icon: "file-text"
  },
  {
    id: "sql-masterclass",
    title: "Engenharia de Dados & Modelagem SQL (E-Commerce)",
    shortDescription: "Modelagem relacional completa, scripts DDL/DML e consultas analíticas de alta performance em PostgreSQL.",
    fullDescription: "Projeto de engenharia de banco de dados cobrindo a modelagem entidade-relacionamento (DER) de uma plataforma de E-commerce. Contempla tabelas de clientes, produtos, pedidos, itens, pagamentos e estoque, com queries analíticas utilizando Window Functions, CTEs, Agregações e Índices.",
    category: "sql",
    categoryLabel: "SQL & Engenharia de Dados",
    badge: "PostgreSQL & SQL",
    featured: false,
    tags: ["PostgreSQL", "SQL Avançado", "Modelagem DER", "Otimização de Queries", "CTEs & Window Functions"],
    coverImage: "",
    images: [],
    stats: {
      "Modelagem": "Arquitetura relacional normalizada (3FN)",
      "Performance": "Consultas otimizadas com planos de execução",
      "Analytics": "Relatórios de LTV, Cohort e Churn em SQL puro"
    },
    features: [
      "Criação de schema robusto com constraints e integridade referencial",
      "Povoamento de dados simulados (DML) para cenários reais",
      "Consultas analíticas para cálculo de receita e métricas de negócio",
      "Uso de técnicas de índices para otimização de consultas",
      "Material prático de desafios e resolução de problemas de dados"
    ],
    architecture: "Scripts PostgreSQL DDL/DML estruturados em camadas: schema de criação, seeding de dados, queries analíticas e desafios resolvidos.",
    icon: "database"
  },
  {
    id: "projeto-tarefas",
    title: "Gerenciador Web de Tarefas & Produtividade",
    shortDescription: "Aplicação web em Google Apps Script para gestão colaborativa de tarefas, modais interativos e painel analítico.",
    fullDescription: "Aplicação web desenvolvida em Google Apps Script para acompanhamento de tarefas e fluxos de trabalho. Possui modais de criação/edição rápida, categorização por status e cálculo de métricas em painel de controle.",
    category: "apps-script",
    categoryLabel: "Sistemas & Apps Script",
    badge: "Web App",
    featured: false,
    tags: ["Google Apps Script", "HTML5", "CSS3", "JavaScript", "Gestão de Tarefas", "Dashboard"],
    coverImage: "",
    images: [],
    stats: {
      "Acesso": "Aplicação web em nuvem",
      "Sincronização": "Atualização em tempo real",
      "Interface": "Focada em produtividade e rapidez"
    },
    features: [
      "Quadro interativo para visualização de demandas",
      "Modais fluidos para criação e edição de tarefas",
      "API interna de Dashboard para métricas de produtividade",
      "Estilos CSS customizados com tema responsivo",
      "Código sincronizado e versionado com Clasp"
    ],
    architecture: "Arquitetura MVC em Google Apps Script: Code.gs como controller/API backend, HTML/CSS/JS modulares como frontend.",
    icon: "check-square"
  }
];

// Comandos para o Terminal Interativo
const terminalCommands = {
  "help": "Comandos disponíveis:\n  - vitor bio       : Resumo sobre meu perfil profissional\n  - vitor skills    : Lista das principais tecnologias e competências\n  - vitor projects  : Resumo dos principais projetos desenvolvidos\n  - vitor stats     : Métricas e indicadores operacionais\n  - vitor contact   : Meios de contato profissional\n  - vitor clear     : Limpa a tela do terminal",
  "bio": "👨‍💻 Vitor Schuenquener (31 anos, casado)\nDesenvolvedor & Especialista em Automação e Sistemas Web.\nExperiência no desenvolvimento de soluções completas: automações RPA em Python, sistemas corporativos em Google Apps Script (com Clasp, UI modular, 3D e Chatbot integrado), processamento de documentos e modelagem SQL em PostgreSQL.",
  "skills": "🛠️ Tech Stack Principal:\n  • Automação & RPA: Python (Pandas, OpenPyXL, Requests, Google APIs)\n  • Sistemas Web   : Google Apps Script, Clasp, JavaScript, Three.js 3D, HTML5/CSS3\n  • Documentos     : Extração de PDFs, Geração de DOCX (python-docx), RegEx\n  • Banco de Dados : PostgreSQL, SQL Avançado, Modelagem Relacional\n  • Ferramentas    : Git, VS Code, Google Cloud APIs, OAuth2",
  "projects": "🚀 Projetos Reais:\n  1. [GEAC] Gestão Documental 3D com Robô Assistente Integrado\n  2. [FROTAS] Sistema de Gestão de Frotas, Controle de Saídas e Banco de Horas\n  3. [FIPLAN] Automação em Python de Relatórios e Envio ao Google Drive\n  4. [ORDENS] Gerador de Ordens de Fornecimento (PDF -> DOCX)\n  5. [SQL] Modelagem e Análise E-Commerce em PostgreSQL\n  6. [TAREFAS] Gerenciador Web de Demandas e Produtividade",
  "stats": "📊 Indicadores Operacionais:\n  • 6+ sistemas e robôs desenvolvidos para fluxos corporativos\n  • Rastreabilidade total de saídas de veículos e controle de horas\n  • Automação de downloads e envios em nuvem\n  • Geração de contratos sem retrabalho manual",
  "contact": "📫 Contato Profissional:\n  • Vitor Schuenquener\n  • Email    : vitor.contato@exemplo.com (Personalizável)\n  • Status   : Disponível para novos projetos e desenvolvimento de soluções!"
};
