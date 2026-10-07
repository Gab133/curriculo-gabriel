# Guia para explicar o projeto

## O caminho de uma interação

Usuário clica em Backend → `(click)` chama `setFiltro` → `filtroAtivo.set` altera o Signal → `computed` recalcula a lista usando categoria e busca → `@for` atualiza os cards usando IDs estáveis. Se não houver resultados, `@empty` mostra o botão para restaurar os filtros.

## Responsabilidades

- App organiza a página e metadados, sem conhecer a regra interna de filtro.
- Componentes Standalone importam diretamente o que usam; não precisam ser registrados em NgModule.
- Interfaces modelam o formato dos dados e desaparecem no JavaScript compilado.
- OnPush trabalha com os eventos e Signals para atualizar a UI; não é correto dizer que só atualiza quando há Input.
- Tokens `--accent` existem no navegador e mudam com o tema. Variáveis SCSS e mixins são resolvidos durante a compilação.
- Grid organiza colunas; Flex organiza elementos em uma direção. Mixins aplicam media queries mobile-first.
- Links navegam; botões executam ações. O placeholder de um contato não deve ser um destino clicável.

## Onde mudar cada coisa

- Conteúdo: `src/app/data/curriculo.data.ts`.
- Cores e fontes: `src/styles.scss`.
- Layout de uma seção: seu arquivo SCSS em `components/`.
- Ordem das seções: `src/app/app.html`.
- Modelo dos dados: `src/app/models/curriculo.ts`.
- Metadados iniciais: `src/index.html`; metadados após inicialização: App.

## Quiz do desafio para a revisão

1. O que é um componente Standalone? Por que escolhemos esse modelo?
2. Qual a diferença entre `@for` e `*ngFor`? Qual exige `track`?
3. O que acontece ao chamar `.set` em um Signal? Como `computed` depende dele?
4. O que `box-sizing: border-box` resolve?
5. Qual a diferença entre `var(--accent)` e `$accent`? Qual muda em runtime?

A implementação está disponível para revisão; a compreensão deve ser verificada com você, não presumida pelo código compilar.
