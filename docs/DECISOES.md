# Registro de decisões

## Arquitetura

Standalone Components + OnPush, preservando Angular 22 e o bootstrap existente. NgModules seriam possíveis, mas não agregam valor à página nova. App compõe as seções; cada componente detém sua própria interação. Sem routing, SSR, dependências novas, store ou serviços sem consumidores reais.

## Reatividade

Signals para filtro, busca, menu, tema e feedback. `computed` deriva categorias e skills filtradas: não existe um segundo estado manualmente sincronizado. `@for` usa IDs estáveis, `@empty` explica ausência de resultados e `@if` trata contatos/níveis ainda não preenchidos. Dados estáticos não precisam de Signals.

## Layout e tema

Direção editorial com estrutura inspirada em Bento: Hero amplo + cartão de identidade, cards de skills, trajetória em linha do tempo, projetos em duas colunas e contato integrado. No mobile os blocos ficam em uma coluna. Tokens CSS permitem tema claro/escuro em runtime. SCSS oferece mixins de breakpoint e painel, nesting curto e variáveis de compilação. Tipografia do sistema, sem biblioteca visual ou serviço externo.

Wireframe desktop:

```text
[ Marca                 navegação                    tema ]
[ Nome + cargo + bio + CTAs          avatar / squad         ]
[ Objetivo profissional                                    ]
[ Skills: categorias + busca → cards em 3 colunas           ]
[ Trajetória: período → formação / trabalho / hackathon    ]
[ Projeto 1                      Projeto 2                  ]
[ Contato e-mail                  redes                     ]
[ Rodapé                                                   ]
```

No celular: navegação expansível, Hero empilhado, cards em uma coluna, contato empilhado. Tablet: skills e projetos em duas colunas; desktop: skills em três.

## Tema e feedback

Tema inicial segue preferência do sistema, com escolha persistida em localStorage. Um script curto no HTML aplica o tema antes de pintar a tela. Falha no armazenamento não bloqueia o site. Animações discretas de entrada escalonada, hover/active e crescimento de barra; reduced motion desabilita movimento. Não se usa IntersectionObserver por não ser obrigatório e não haver necessidade de ocultar conteúdo até o scroll.

## Conteúdo e segurança dos destinos

Placeholders explícitos centralizados; avatar neutro local, sem pessoa fictícia. Níveis null evitam falsa precisão. Validação impede placeholders e protocolos executáveis em links. Novas abas usam noopener/noreferrer. Clipboard trata sucesso, falha, estado transitório e limpeza do temporizador na destruição.

## Diferenças autorizadas e pendências

O desafio cita `~/IdeaProjects/curriculo-<nome>`; o usuário determinou manter `C:/Users/Pichau/Documents/Projetos/curriculo-gabriel`. Não foi feita cópia ou migração, preservando o Git existente. Dados pessoais reais e quiz de compreensão continuam pendentes para a revisão com o usuário. Não se declara essa etapa pedagógica concluída.

SEO: idioma, título, descrição, viewport, theme-color, favicon e Open Graph. A aplicação continua uma SPA sem SSR; meta tags não garantem indexação ou previews em serviços que não executam JavaScript. Após preenchimento, revisar também HTML inicial. URL canônica/og:url não foram inventadas, pois não há domínio publicado.

## Atualização de conteúdo

O usuário forneceu níveis textuais, por isso a UI mostra Iniciante, Intermediário, Avançado ou Iniciante / Intermediário; não atribui porcentagens. Squad/hackathon foram omitidos explicitamente. Dados pessoais reais substituem os placeholders. Datas não fornecidas não foram inventadas.
