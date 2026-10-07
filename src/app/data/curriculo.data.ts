import { Experiencia, Projeto, Skill } from '../models/curriculo';

export const perfil = {
  nome: 'GABRIEL BRAGA',
  cargo: 'Desenvolvimento com Inteligência Artificial, Cibersegurança e Desenvolvimento de Jogos',
  bio: 'Estudante de Análise e Desenvolvimento de Sistemas, interessado em Inteligência Artificial, Cibersegurança e Desenvolvimento de Jogos. Tenho interesse em explorar a aplicação de IA em diferentes áreas da tecnologia, especialmente em softwares e jogos, enquanto desenvolvo minha base em programação.',
  tagline:
    'Transformando ideias em tecnologia, explorando o potencial da inteligência artificial para criar soluções, experiências e novas possibilidades.',
  local: 'Fortaleza, Ceará',
  papelSquad: '',
  squad: '',
  objetivo:
    'Trabalhar com tecnologia utilizando IA, com interesse em Cibersegurança e Desenvolvimento de Jogos.',
  disponibilidade: 'Disponível para estágio, emprego e projetos na área de tecnologia.',
  email: 'gs3390323@gmail.com',
  github: 'https://github.com/Gab133',
  linkedin: 'https://www.linkedin.com/in/gabriel-braga-59a2b323b/',
  whatsapp: '+55 85 98990-3753',
  avatarUrl: 'gabriel-braga.jpg',
};

// Autoavaliações fornecidas por Gabriel. Não convertemos níveis textuais em percentuais fictícios.
export const skills: Skill[] = [
  {
    id: 'html',
    nome: 'HTML',
    categoria: 'Frontend',
    descricao: 'Estrutura de páginas web.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'css',
    nome: 'CSS',
    categoria: 'Frontend',
    descricao: 'Estilização de interfaces web.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'js-front',
    nome: 'JavaScript',
    categoria: 'Frontend',
    descricao: 'Programação e interatividade no navegador.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'python',
    nome: 'Python',
    categoria: 'Backend',
    descricao: 'Fundamentos de programação com Python.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'js-programacao',
    nome: 'JavaScript',
    categoria: 'Backend',
    descricao: 'Fundamentos de programação com JavaScript.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'apis',
    nome: 'APIs',
    categoria: 'Backend',
    descricao: 'Estudos sobre integração entre sistemas.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'bancos',
    nome: 'Bancos de dados',
    categoria: 'Backend',
    descricao: 'Fundamentos de armazenamento e organização de dados.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'ia',
    nome: 'Inteligência Artificial',
    categoria: 'Backend',
    descricao: 'Exploração de IA aplicada a softwares e jogos.',
    nivel: null,
    nivelTexto: 'Iniciante / Intermediário',
  },
  {
    id: 'git',
    nome: 'Git / GitHub',
    categoria: 'Ferramentas',
    descricao: 'Versionamento e organização de projetos.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'vscode',
    nome: 'VS Code',
    categoria: 'Ferramentas',
    descricao: 'Editor utilizado nos estudos de programação.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'ia-programacao',
    nome: 'Ferramentas de IA para programação',
    categoria: 'Ferramentas',
    descricao: 'Uso de ferramentas de IA no desenvolvimento.',
    nivel: null,
    nivelTexto: 'Iniciante / Intermediário',
  },
  {
    id: 'godot',
    nome: 'Godot Engine',
    categoria: 'Ferramentas',
    descricao: 'Engine utilizada nos projetos de jogos.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'jogos',
    nome: 'Desenvolvimento de jogos',
    categoria: 'Ferramentas',
    descricao: 'Criação de mecânicas e funcionalidades de jogos.',
    nivel: null,
    nivelTexto: 'Iniciante',
  },
  {
    id: 'impressao',
    nome: 'Impressão 3D',
    categoria: 'Ferramentas',
    descricao: 'Fabricação de peças e produtos personalizados.',
    nivel: null,
    nivelTexto: 'Intermediário',
  },
  {
    id: 'criatividade',
    nome: 'Criatividade',
    categoria: 'Soft Skills',
    descricao: 'Criação de ideias para projetos e produtos.',
    nivel: null,
    nivelTexto: 'Avançado',
  },
  {
    id: 'aprendizado',
    nome: 'Interesse em tecnologia e aprendizado',
    categoria: 'Soft Skills',
    descricao: 'Interesse em explorar e aprender novas tecnologias.',
    nivel: null,
    nivelTexto: 'Avançado',
  },
  {
    id: 'empreendedorismo',
    nome: 'Empreendedorismo',
    categoria: 'Soft Skills',
    descricao: 'Vivência em negócio familiar e negócio próprio.',
    nivel: null,
    nivelTexto: 'Intermediário',
  },
  {
    id: 'clientes',
    nome: 'Trabalho com clientes',
    categoria: 'Soft Skills',
    descricao: 'Atendimento e acompanhamento de encomendas.',
    nivel: null,
    nivelTexto: 'Intermediário',
  },
  {
    id: 'organizacao',
    nome: 'Organização',
    categoria: 'Soft Skills',
    descricao: 'Organização de atividades, produção e movimentações financeiras.',
    nivel: null,
    nivelTexto: 'Intermediário',
  },
  {
    id: 'equipe',
    nome: 'Trabalho em equipe',
    categoria: 'Soft Skills',
    descricao: 'Colaboração na realização de atividades.',
    nivel: null,
    nivelTexto: 'Intermediário',
  },
];

export const experiencias: Experiencia[] = [
  {
    id: 'formacao',
    tipo: 'formacao',
    periodo: 'Ago. 2026 — Dez. 2028 (previsão)',
    titulo: 'Análise e Desenvolvimento de Sistemas',
    organizacao: 'UniAteneu · 1º semestre',
    descricao:
      'Estudos e desenvolvimento de projetos envolvendo programação, Inteligência Artificial e desenvolvimento de jogos.',
  },
  {
    id: 'neges',
    tipo: 'trabalho',
    periodo: 'Período não informado',
    titulo: 'Atuação no negócio familiar',
    organizacao: 'Neges Polpas',
    descricao:
      'Atividades relacionadas à loja, vendas, organização financeira, controle de movimentações e operação do negócio.',
  },
  {
    id: 'impressao-3d',
    tipo: 'trabalho',
    periodo: 'Período não informado',
    titulo: 'Empreendedorismo e impressão 3D',
    organizacao: 'Negócio próprio',
    descricao:
      'Fabricação e venda de peças e produtos personalizados, incluindo chaveiros, bonecos, brindes e encomendas. Atuação com precificação, materiais, produção e atendimento a clientes.',
  },
];

export const projetos: Projeto[] = [
  {
    id: 'deadchance',
    nome: 'DeadChance',
    descricao:
      'Jogo em desenvolvimento utilizando a Godot Engine. Minha contribuição envolve o desenvolvimento do projeto, das mecânicas e a implementação das funcionalidades do jogo.',
    tecnologias: 'Godot Engine · GDScript',
    url: '',
  },
  {
    id: 'marco',
    nome: 'Projeto Marco',
    descricao:
      'Projeto experimental focado na implementação de Inteligência Artificial dentro de jogos. Minha contribuição envolve pesquisa e desenvolvimento de formas de integrar IA à experiência e aos sistemas de jogos.',
    tecnologias: 'Inteligência Artificial · Desenvolvimento de jogos · Godot Engine',
    url: '',
  },
];
