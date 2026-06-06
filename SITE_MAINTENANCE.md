# Manutencao do site gestordetrafegofozdoiguacu.com.br

Este projeto e um site estatico gerado por script para publicacao no Cloudflare Workers/Assets. A ideia principal e editar o conteudo e os templates em `scripts/generate-site.mjs`, rodar o build e publicar a pasta `dist/`.

## Estrutura principal

- `scripts/generate-site.mjs`: fonte principal do site. Contem dados das paginas, posts, servicos, nichos, templates HTML, schema JSON-LD, header, footer, CTAs e formulario.
- `assets/css/styles.css`: design visual do site.
- `assets/js/site.js`: interacoes do menu, animacoes, eventos de `dataLayer` e comportamento do formulario.
- `src/worker.js`: endpoint `/api/lead` no Cloudflare Worker para receber formularios e enviar email.
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
3. Edite `assets/js/site.js` para comportamento.
4. Edite `src/worker.js` apenas quando precisar mudar a API do formulario.
5. Rode `npm run build`.
6. Revise localmente.
7. Faça commit e push para `main`.
8. O Cloudflare faz o deploy automaticamente.

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
- 8 posts em `/blog/...`
- `/contato`
- `/sobre`
- `/politica-de-privacidade`

Ao adicionar uma rota nova, tambem confirme se ela deve entrar em `sitemap.xml`. O gerador monta o sitemap automaticamente a partir das listas `pages` e `posts`.

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
- Se o design parecer antigo no navegador, usar hard refresh: `Cmd + Shift + R`.
- Se mudar dominio, telefone, GTM ou email, buscar no projeto inteiro para garantir consistencia.

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
- Nichos
- Blog
- Contato
- CTAs para `/contato/#formulario`
- Botao flutuante de WhatsApp
- Formulario
- `sitemap.xml`
