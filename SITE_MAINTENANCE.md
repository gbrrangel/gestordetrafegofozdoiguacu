# Manutencao do site gestordetrafegofozdoiguacu.com.br

Este projeto e um site estatico gerado por script para publicacao no Cloudflare Workers/Assets. A ideia principal e editar o conteudo e os templates em `scripts/generate-site.mjs`, rodar o build e publicar a pasta `dist/`.

## Estrutura principal

- `scripts/generate-site.mjs`: fonte principal do site. Contem dados das paginas, posts, categorias do blog, servicos, nichos, templates HTML, schema JSON-LD, header, footer, CTAs e formulario. Tambem contem `assetVersion`, usado para forcar cache-busting do CSS, JS e favicon.
- `assets/css/styles.css`: design visual do site.
- `assets/js/site.js`: interacoes do menu, animacoes, eventos de `dataLayer` e comportamento do formulario.
- `assets/favicon.svg`: icone oficial do site usado na aba do navegador. Ele replica a marca visual gerada por `renderWaterfallLogo()`.
- `src/worker.js`: endpoint `/api/lead` no Cloudflare Worker para receber formularios e enviar email. Tambem contem redirecionamentos 301 em `REDIRECTS`.
- `scripts/build-dist.mjs`: roda o gerador e copia apenas os arquivos publicaveis para `dist/`.
- `package.json`: comandos de build.
- `wrangler.jsonc`: configuracao do Cloudflare para publicar os assets de `dist/`.
- `dist/`: pasta gerada para deploy. Nao editar manualmente.

Os HTML finais (`index.html`, `/servicos`, `/blog`, etc.) tambem sao gerados e nao devem ser editados manualmente. Qualquer mudanca manual neles sera perdida no proximo build.

## Comandos

Gerar os HTML localmente:

```bash
npm run generate
```

Gerar a pasta publicavel `dist/`:

```bash
npm run build
```

Testar localmente com servidor simples:

```bash
python3 -m http.server 4173
```

Depois abrir:

```text
http://127.0.0.1:4173/
```

## Deploy no Cloudflare

O deploy esta conectado ao GitHub no repositorio:

```text
gbrrangel/gestordetrafegofozdoiguacu
```

Configuracao esperada no Cloudflare:

```text
Build command: npm run build
Deploy command: npx wrangler deploy
Build output directory: dist
Root directory: /
Branch: main
```

O `wrangler.jsonc` aponta o Worker/Assets para:

```json
{
  "assets": {
    "directory": "./dist"
  }
}
```

## Fluxo correto para editar

1. Edite `scripts/generate-site.mjs` para conteudo, paginas, URLs, CTAs, schema ou estrutura HTML.
2. Edite `assets/css/styles.css` para visual.
3. Se mudar CSS, JS, favicon ou HTML que referencia assets versionados, incremente `assetVersion` em `scripts/generate-site.mjs`.
4. Edite `assets/js/site.js` para comportamento.
5. Edite `src/worker.js` quando precisar mudar a API do formulario ou adicionar redirecionamentos 301.
6. Rode `npm run build`.
7. Revise localmente.
8. Faca commit e push para `main`.
9. O Cloudflare faz o deploy automaticamente.

## Paginas e rotas

O site tem paginas hub e paginas especificas:

- `/`
- `/servicos`
- `/servicos/gestao-de-trafego-pago`
- `/servicos/google-ads-foz-do-iguacu`
- `/servicos/meta-ads-foz-do-iguacu`
- `/servicos/landing-pages-foz-do-iguacu`
- `/servicos/rastreamento-e-conversao`
- `/servicos/criacao-de-contas`
- `/servicos/google-meu-negocio-foz-do-iguacu`
- `/nichos`
- `/nichos/turismo-foz-do-iguacu`
- `/nichos/restaurantes-foz-do-iguacu`
- `/nichos/delivery-foz-do-iguacu`
- `/nichos/profissionais-da-saude-foz-do-iguacu`
- `/nichos/prestadores-de-servico-foz-do-iguacu`
- `/nichos/trafego-pago-para-advogados-foz-do-iguacu`
- `/nichos/turismo-hoteis-restaurantes-foz-do-iguacu`
- `/consultoria`
- `/blog`
- 17 posts em `/blog/...`:
  - `/blog/perfil-da-empresa-google-2026-negocios-locais`
  - `/blog/google-marketing-live-2026-o-que-mudou-no-google-ads`
  - `/blog/performance-max-2026-novidades-negocios-locais`
  - `/blog/meta-ads-advantage-plus-2026`
  - `/blog/como-aparecer-no-google-maps-em-foz-do-iguacu`
  - `/blog/como-escolher-gestor-de-trafego-em-foz-do-iguacu`
  - `/blog/como-rastrear-leads-de-trafego-pago`
  - `/blog/como-responder-avaliacoes-no-google-meu-negocio`
  - `/blog/erros-que-fazem-leads-do-whatsapp-nao-virarem-clientes`
  - `/blog/google-ads-ou-meta-ads-foz-do-iguacu`
  - `/blog/google-meu-negocio-ou-site-o-que-priorizar`
  - `/blog/google-meu-negocio-para-empresas-locais-em-foz-do-iguacu`
  - `/blog/landing-page-para-negocios-locais-em-foz-do-iguacu`
  - `/blog/quanto-custa-trafego-pago-em-foz-do-iguacu`
  - `/blog/seo-local-para-negocios-em-foz-do-iguacu`
  - `/blog/trafego-pago-para-advogados-em-foz-do-iguacu`
  - `/blog/trafego-pago-para-hoteis-turismo-restaurantes-foz`
- `/contato`
- `/sobre`
- `/politica-de-privacidade`

Ao adicionar uma rota nova, tambem confirme se ela deve entrar em `sitemap.xml`. O gerador monta o sitemap automaticamente a partir das listas `pages` e `posts`.

### Redirecionamentos atuais

As antigas paginas separadas de Google Meu Negocio foram unificadas em `/servicos/google-meu-negocio-foz-do-iguacu`. O Worker redireciona:

- `/servicos/criacao-de-google-meu-negocio` -> `/servicos/google-meu-negocio-foz-do-iguacu#criacao`
- `/servicos/gestao-de-google-meu-negocio` -> `/servicos/google-meu-negocio-foz-do-iguacu#gestao`

Se remover ou fundir novas rotas, prefira adicionar redirecionamento 301 em `REDIRECTS` no `src/worker.js` para preservar SEO e evitar 404.

## Rodape global

O rodape e renderizado por `renderFooter(page)` em `scripts/generate-site.mjs`. Ele inclui:

- telefone e email de contato;
- colunas de links de servicos e empresa;
- politica de privacidade sem link quando a pagina atual ja e `/politica-de-privacidade`;
- CNPJ `57.110.765/0001-00`;
- mensagem `Este site pertence a GabriAds Solucoes Digitais`, com link externo para `https://gabriads.com`.

Ao alterar o rodape, lembre que ele aparece em todas as paginas geradas.

## Blog

A pagina `/blog` e gerada por `renderPostArchive()` em `scripts/generate-site.mjs`.

Cada item em `posts` deve ter uma categoria principal no campo `category`. Categorias atuais:

```text
contratacao
investimento
canais
nichos
conversao
```

Essas categorias alimentam os botoes de filtro da pagina do blog. Os botoes sao renderizados com `data-filter-category`, e cada card de post recebe `data-post-category`. O comportamento de filtrar sem recarregar a pagina fica em `assets/js/site.js`, na secao `Blog category filters`. A estilizacao dos botoes fica no bloco `Blog archive` em `assets/css/styles.css`.

Ao adicionar um post novo:

1. Adicione o objeto em `posts`.
2. Preencha `slug`, `category`, `title`, `description`, `h1`, `intro` e conteudo.
3. Use uma das categorias atuais ou atualize tambem a lista `categories` dentro de `renderPostArchive()`.
4. Rode `npm run build` e confira `/blog`.

O arquivo do blog usa uma secao `post-archive-section` para controlar o espacamento entre o texto introdutorio, os filtros e os cards de posts.

### Cuidados com automacao de posts

Automacoes que adicionam posts devem alterar somente o array `posts` em `scripts/generate-site.mjs`, preservando o restante do gerador. Nao substituir o arquivo inteiro por uma versao antiga.

Antes de commit/push de post automatico, confira:

- `renderPostArchive()` continua renderizando `<button class="category-filter">` com `data-filter-category`;
- a lista de categorias continua no formato `[id, label, description]`;
- cada card de post continua com `data-post-card` e `data-post-category`;
- nenhum post ficou sem `category`;
- `assetVersion` continua definido no topo do arquivo;
- favicon, CSS e JS continuam referenciados com `?v=${assetVersion}`;
- `renderGeneric()` ainda respeita `introHtml` e `contentHtml`;
- `renderPost()` ainda usa `post.bodyHtml || renderBody(post.body)`;
- a rota `/servicos/google-meu-negocio-foz-do-iguacu` continua presente em `pages`, `services` e `footerServices`;
- `npm run build` gera `/blog` sem `data-post-category="undefined"`.

Comandos uteis de conferencia:

```bash
npm run build
rg 'data-post-category="undefined"|<span>Artigo</span>' blog/index.html dist/blog/index.html
rg 'data-blog-filters|category-filter|data-filter-category' blog/index.html dist/blog/index.html
```

## Assets globais

O favicon e referenciado no `<head>` global como:

```html
<link rel="icon" href="/assets/favicon.svg?v=${assetVersion}" type="image/svg+xml">
<link rel="shortcut icon" href="/assets/favicon.svg?v=${assetVersion}" type="image/svg+xml">
```

O CSS e o JS tambem usam `assetVersion`:

```html
<link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}">
<script src="/assets/js/site.js?v=${assetVersion}" defer></script>
```

Sempre que alterar esses arquivos, incremente `assetVersion` para evitar cache antigo no navegador.

## Ajustes visuais recentes

- O H1 principal da home tem uma regra especifica para desktop em `@media (min-width: 960px)`, reduzindo o tamanho apenas em telas maiores. Nao alterar essa regra se a intencao for mexer somente no mobile.
- Os filtros de categoria do blog foram estilizados para parecerem links/cards sutis, com destaque amarelo apenas no hover/foco/estado ativo.

## SEO

Cada pagina deve manter:

- `title`
- `description`
- H1 unico
- canonical
- breadcrumb visual
- schema `BreadcrumbList`
- CTAs rastreaveis

Evitar promessas como:

- resultado garantido
- vendas garantidas
- primeiro lugar garantido
- ROI garantido

Para advocacia e saude, manter linguagem informativa, responsavel e sem promessa de resultado.

## GTM e rastreamento

O Google Tag Manager esta configurado com:

```text
GTM-M8WD4959
```

Os CTAs usam atributos como:

```html
data-gtm="cta_diagnostico"
data-event-category="cta"
data-event-label="/rota"
```

O `assets/js/site.js` envia eventos para `window.dataLayer`.

Ao criar novos botoes importantes, sempre incluir `data-gtm`, `data-event-category` e `data-event-label`.

## WhatsApp, email e formulario

Telefone atual:

```text
5545999046673
```

Email atual:

```text
contato@gabriads.com
```

O formulario envia as submissoes para o endpoint:

```text
/api/lead
```

Esse endpoint fica em `src/worker.js` e envia o email para `contato@gabriads.com` usando a API do Resend.

Variaveis/segredos necessarios no Cloudflare Worker:

```text
RESEND_API_KEY
LEAD_EMAIL_FROM
```

`RESEND_API_KEY` deve ser configurada como secret. `LEAD_EMAIL_FROM` pode ser uma variavel simples com um remetente verificado no Resend, por exemplo:

```text
Site <contato@seudominioverificado.com>
```

Durante testes iniciais, o Resend permite usar `Site <onboarding@resend.dev>` em alguns cenarios, mas o ideal em producao e verificar um dominio de envio e configurar SPF/DKIM conforme o painel do Resend orientar.

O formulario tambem possui um campo invisivel `website` como honeypot anti-spam. Se esse campo vier preenchido, o Worker ignora a submissao.

Campos obrigatorios atuais:

```text
nome
email
whatsapp
investimento
```

Campos opcionais atuais:

```text
segmento
cidade
desafio
```

O email e validado no navegador e no Worker. Dominios obvios de teste, como `teste.com`, `test.com` e `example.com`, sao bloqueados. O WhatsApp tambem e validado no navegador e no Worker, exigindo numero com DDD brasileiro, por exemplo `45 99904-6673` ou `11 99999-9999`. Numeros com codigo do pais `55` tambem sao aceitos. Sequencias numericas obvias, como `12345678910`, e numeros repetidos sao bloqueados.

Se trocar de provedor de email, alterar apenas a funcao `sendWithResend()` em `src/worker.js`.

## Dominio

Dominio oficial:

```text
gestordetrafegofozdoiguacu.com.br
```

Dominio temporario do Cloudflare:

```text
https://gestordetrafegofozdoiguacu.lively-cloud-0c0c.workers.dev/
```

DNS no Cloudflare:

- raiz: deve apontar para o Worker/Custom Domain configurado no Cloudflare.
- `www`: CNAME para `gestordetrafegofozdoiguacu.lively-cloud-0c0c.workers.dev`, sem `https://` e sem barra final.

Redirecionamento recomendado:

- `www.gestordetrafegofozdoiguacu.com.br/*`
- para `https://gestordetrafegofozdoiguacu.com.br/${1}`
- status `301`
- preservar query string.

## Cuidados importantes

- Nao editar `dist/` manualmente.
- Nao editar HTML gerado manualmente.
- Nao subir briefings ou arquivos Markdown internos, exceto este guia.
- Rodar `npm run build` antes de testar e antes de commitar mudancas relevantes.
- Se o design parecer antigo no navegador, usar hard refresh: `Cmd + Shift + R`. Para mudancas de CSS, incremente `assetVersion` em `scripts/generate-site.mjs`.
- Se mudar dominio, telefone, GTM ou email, buscar no projeto inteiro para garantir consistencia.
- A navegacao nao deve conter links para a propria pagina. O gerador usa `renderNavLink()` para trocar links atuais por texto com `aria-current="page"` no menu/rodape.

## Checklist antes de publicar mudancas

```bash
npm run build
node --check scripts/generate-site.mjs
node --check assets/js/site.js
node --check src/worker.js
```

Depois conferir no navegador:

- Home
- Servicos
- Pagina unificada de Google Meu Negocio
- Nichos
- Blog
- Contato
- CTAs para `/contato/#formulario`
- Botao flutuante de WhatsApp
- Formulario
- `sitemap.xml`
- Redirecionamentos antigos, quando houver, com `curl -I`
