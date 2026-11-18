# NextScale | Landing Page

Landing page estática (HTML, CSS e JavaScript puros), sem build e sem dependências.

## Estrutura

```
nextscale/
├─ index.html          página única
├─ robots.txt          SEO
├─ sitemap.xml         SEO (troque o domínio)
├─ img/
│  ├─ logo.svg         símbolo N com órbita (substitua pelo original)
│  ├─ favicon.svg
│  └─ og-image.*       imagem de compartilhamento
└─ src/
   ├─ css/             base, header, buttons, hero, sections, portfolio,
   │                   cta, contact, footer, animations, responsive
   └─ js/
      ├─ config.js     WhatsApp, e-mail, Instagram, endpoint do formulário, projetos
      ├─ links.js      aplica os dados de contato nos links
      ├─ menu.js       menu mobile
      ├─ portfolio.js  cards do portfólio
      ├─ reveal.js     animações ao rolar
      └─ form.js       validação e envio
```

## Como executar

Abra o `index.html` no navegador, ou rode um servidor local:

```
npx serve .          # ou: python -m http.server 8000
```

## O que preencher

1. `src/js/config.js`: número do WhatsApp (DDI+DDD+número), e-mail, Instagram.
2. `src/js/config.js`: `formEndpoint` (ex.: Formspree). Vazio = o formulário oferece continuar pelo WhatsApp.
3. `src/js/config.js`: lista `PROJECTS` com projetos reais (`titulo`, `categoria`, `descricao`, `url`, `imagem`).
4. `img/logo.svg`: troque pelo logotipo original (mantenha o nome do arquivo). Faça o mesmo em `img/favicon.svg`.
5. Troque `seudominio.com.br` em `index.html` (og:image), `robots.txt` e `sitemap.xml`.

## Publicação

Qualquer hospedagem estática serve: Netlify, Vercel, GitHub Pages ou Cloudflare Pages. Envie a pasta inteira.
