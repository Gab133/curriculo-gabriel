export type CategoriaSkill = 'Frontend' | 'Backend' | 'Ferramentas' | 'Soft Skills';
export type FiltroSkill = 'Todos' | CategoriaSkill;
export interface Skill {
  id: string;
  nome: string;
  categoria: CategoriaSkill;
  descricao: string;
  nivel: number | null;
  nivelTexto?: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Iniciante / Intermediário';
}
export interface Experiencia {
  id: string;
  periodo: string;
  titulo: string;
  organizacao: string;
  descricao: string;
  tipo: 'formacao' | 'trabalho' | 'hackathon';
}
export interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  tecnologias: string;
  url: string;
}
