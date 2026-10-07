# Validação e checklist — 03/10/2026

## Evidências executadas

- `npm run build`: produção compilada sem erros de TypeScript/Angular e sem warnings. Bundle inicial: 153,32 kB; transferência estimada: 44,27 kB. Budgets originais mantidos.
- `npm test -- --watch=false`: 8 testes passaram. Cobrem composição, filtros combinados, busca sem acentos, estado vazio/limpeza, estado aria-pressed, limites de nível, validação de URLs/e-mail/WhatsApp, cópia/sucesso/reset/falha e tema/menu.
- `npx --no-install prettier --check src README.md docs/*.md`: formatação aprovada. SVGs são assets manuais; não há parser SVG no Prettier instalado.
- `ng serve --host 127.0.0.1`: servidor ativo na porta 4200, sem warnings de compilação.
- Navegador: console sem erros ou warnings após filtro, busca, tema, reload e âncora de contato.
- Larguras 375, 393, 768, 1024, 1440: nenhum overflow horizontal. Skills com 1, 1, 2, 3, 3 colunas, respectivamente.
- Inspeção visual: Hero desktop, skills mobile e tablet em tema escuro, contato tablet. Prévia em `preview-desktop.jpg`.
- Teclado: Enter ativa Backend (2 cards e aria-pressed=true), Escape fecha menu mobile, Tab produz foco com outline sólido no link inicial. Busca sem resultado mostra recuperação e limpar restaura 8 cards.
- Tema: alternância funcional, atributo data-theme e nome do botão atualizados; preferência mantida após reload.
- Semântica: um main, um h1, regiões nomeadas, labels em busca, botões nomeados, avatar carregado com alt; nenhum href contendo placeholder.
- Contraste dos tokens (texto/bg, secundário/bg, badge, botão): claro 14,10 / 6,01 / 6,39 / 8,09; escuro 15,86 / 9,55 / 6,64 / 9,92. Todos acima de 4,5:1 nesses pares. Não equivale a auditoria WCAG completa ou teste com leitor de tela.
- Reduced motion: regra revisada no SCSS para interromper animações/transições e rolagem suave; não foi feita emulação dessa preferência no navegador.
- Contato real e abertura de redes: funções e tratamento de falha testados com fixtures; destinos reais não testados porque ainda são placeholders. Não foi enviado contato externo.
- Git: diff/status revisados; diff --check sem problemas. Avisos de LF→CRLF decorrem da configuração existente do Git, não do build. Nenhum commit, reset ou mudança de branch.

## Mapeamento do desafio

| Requisito                                       | Implementação / estado                                                                       |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Fase 0: Angular 22, SCSS, sem SSR/routing       | Projeto existente preservado                                                                 |
| Fase 1: arquitetura, reatividade, layout e tema | Registro em DECISOES.md                                                                      |
| Fase 2: tokens, reset, partial e mixins         | styles.scss e styles/_mixins.scss                                                            |
| Hero: nome, avatar, bio e papel na squad        | Hero; papel explicitamente a preencher                                                       |
| Skills e categorias                             | Interface Skill, Signals, computed, busca adicional, @for/track, @empty                      |
| Nível e barra                                   | Suporte 0–100 com binding de largura, nome acessível e animação; null até autoavaliação real |
| Trajetória                                      | Formação, experiência, hackathon e projetos em componentes próprios                          |
| Contato                                         | Canais externos, mailto, Clipboard e feedback de sucesso/erro                                |
| Composição                                      | App importa e compõe componentes, main e headings semânticos                                 |
| Responsividade                                  | Cinco larguras exigidas conferidas                                                           |
| Polish                                          | Entrada escalonada, hover/active/focus, transições, reduced motion, favicon                  |
| SEO/meta                                        | pt-BR, title, description, viewport, theme-color e Open Graph                                |
| Dados pessoais reais                            | Pendente por autorização expressa para placeholders                                          |
| Diretório ~/IdeaProjects                        | Diferença autorizada: mantido caminho local solicitado pelo usuário                          |
| Quiz/checkpoints de entendimento                | Guia preparado; revisão com usuário ainda pendente                                           |

## Arquivos alterados ou criados

- `docs/DECISOES.md`
- `docs/GUIA-DE-APRESENTACAO.md`
- `docs/preview-desktop.jpg`
- `docs/VALIDACAO.md`
- `public/avatar.svg`
- `public/favicon.svg`
- `README.md`
- `src/app/app.config.ts`
- `src/app/app.html`
- `src/app/app.scss`
- `src/app/app.spec.ts`
- `src/app/app.ts`
- `src/app/components/contato/contato.html`
- `src/app/components/contato/contato.scss`
- `src/app/components/contato/contato.ts`
- `src/app/components/experiencia/experiencia.html`
- `src/app/components/experiencia/experiencia.scss`
- `src/app/components/experiencia/experiencia.ts`
- `src/app/components/header/header.html`
- `src/app/components/header/header.scss`
- `src/app/components/header/header.ts`
- `src/app/components/hero/hero.html`
- `src/app/components/hero/hero.scss`
- `src/app/components/hero/hero.ts`
- `src/app/components/projetos/projetos.html`
- `src/app/components/projetos/projetos.scss`
- `src/app/components/projetos/projetos.ts`
- `src/app/components/skills/skills.html`
- `src/app/components/skills/skills.scss`
- `src/app/components/skills/skills.ts`
- `src/app/data/curriculo.data.ts`
- `src/app/models/curriculo.ts`
- `src/app/utils/contato.ts`
- `src/index.html`
- `src/main.ts`
- `src/styles.scss`
- `src/styles/_mixins.scss`

## Atualização de personalização — 03/10/2026

- Nome, bio, objetivo, formação, experiências, 20 habilidades, dois projetos e contatos preenchidos conforme respostas do usuário.
- Níveis textuais exibidos sem conversão artificial em percentuais; suporte às barras numéricas permanece disponível no componente.
- Papel na squad e hackathon omitidos por solicitação atual do usuário. Isso substitui o estado anterior com placeholders e deixa uma divergência explícita com o requisito de papel na Hero.
- Períodos de Neges Polpas e impressão 3D não informados; projetos sem links. Avatar ilustrativo mantido.
- Build atualizado: 157,31 kB iniciais / 45,27 kB estimados em transferência, sem erros ou warnings; 8 testes passaram.
- Navegador: 20 habilidades; categoria Backend / Programação mostra 5 cards; console sem erros/warnings; cinco larguras anteriores novamente verificadas sem overflow.
- Nenhum commit criado. Evidências anteriores permanecem como histórico da implementação inicial.
