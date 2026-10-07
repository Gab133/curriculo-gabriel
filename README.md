# Currículo Digital Interativo — Angular 22

SPA do Desafio 01 da trilha Proenergia Summit 2026. Implementação completa da estrutura, com os dados pessoais fornecidos por Gabriel Braga.

## Executar

- `npm ci` somente se precisar instalar as dependências em outro computador.
- `npm start` inicia o desenvolvimento em http://localhost:4200.
- `npm run build` gera a versão de produção em `dist/curriculo-gabriel/browser`.
- `npm test -- --watch=false` executa os testes com Vitest.

## Organização

```text
src/app/
  components/
    header/       navegação mobile e tema persistente
    hero/         apresentação, avatar, objetivo e papel na squad
    skills/       categorias, busca, estado vazio e autoavaliação
    experiencia/  formação, trabalho e hackathon
    projetos/     projetos pessoais/acadêmicos e destinos externos
    contato/      e-mail, cópia e redes sociais
  data/curriculo.data.ts   fonte dos dados pessoais
  models/curriculo.ts      interfaces e unions
  utils/contato.ts         validação de destinos
  app.*                   composição e metadados
src/styles/_mixins.scss    partial SCSS
src/styles.scss           tokens, reset, estilos base e reduced motion
public/                   avatar e favicon SVG locais
```

## Personalizar

Edite `src/app/data/curriculo.data.ts`. Não precisa alterar os componentes para preencher o currículo. Remova itens de experiência ou projetos que não se aplicam: não invente histórico profissional.

1. Substitua os placeholders da lista abaixo.
2. Em `papelSquad`, informe o papel real (Dev/TL, Dev/PO, Dev/SM ou Dev/QA).
3. Troque `nivel: null` por uma autoavaliação real de 0 a 100 para exibir barras animadas; `null` mostra “Nível a definir”. Os valores são limitados à faixa 0–100 na apresentação. Não há níveis fictícios.
4. Coloque sua foto em `public/`, altere `avatarUrl` e preserve dimensões quadradas. O texto alternativo passa a usar o nome do perfil automaticamente.
5. GitHub, LinkedIn e projetos aceitam URLs completas HTTP/HTTPS. WhatsApp aceita número com DDI. Links com placeholders ou destinos inválidos não são ativados. E-mail válido ativa `mailto` e cópia; falhas de permissão exibem uma alternativa manual.
6. Atualize também os valores correspondentes em `src/index.html` (title, description e Open Graph) para o HTML inicial. Em runtime, App atualiza esses metadados a partir do perfil.
7. Rode build e testes novamente depois de personalizar, e revise o conteúdo visualmente.

Não há backend ou formulário de envio. O contato usa seus canais reais. Fontes do sistema evitam downloads externos e mantêm a página funcionando offline após o carregamento dos assets.

## Decisões e requisitos

Consulte `docs/DECISOES.md`, `docs/VALIDACAO.md` e `docs/GUIA-DE-APRESENTACAO.md`.

Os documentos de referência foram encontrados e lidos em:

- `C:/Users/Pichau/Downloads/DESAFIO_01_CURRICULO_ANGULAR22_MENTOR_V2.md`
- `C:/Users/Pichau/Downloads/ANTIGRAVITY_MENTOR_PROTOCOL.md`

A autorização expressa do usuário para implementação integral substituiu os checkpoints pedagógicos interativos. Foram preservadas validação, simplicidade e documentação. Nenhum commit foi criado.

## Personalização atual — Gabriel Braga

Os 49 placeholders iniciais foram substituídos pelos dados fornecidos em 03/10/2026. Contatos reais estão ativos. As 20 habilidades usam níveis textuais de autoavaliação, sem percentuais inventados. Foto pessoal fornecida pelo usuário em public/gabriel-braga.jpg, com enquadramento circular via CSS.

Pendências de conteúdo: períodos das duas experiências e links de DeadChance e Projeto Marco. As experiências não são apresentadas como emprego formal em TI. Squad e hackathon foram omitidos por solicitação expressa; o papel na squad exigido pelo desafio continua sendo uma diferença a revisar antes da entrega.
