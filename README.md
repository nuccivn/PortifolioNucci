# Portfólio — Vinícius Nucci Galvão

React + Vite + TailwindCSS v4.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Editar conteúdo

Cada seção é um componente em `src/components/`:

- `Hero.jsx` — apresentação
- `Sobre.jsx` — sobre você
- `Experiencia.jsx` — Alumisoft
- `Estudos.jsx` — Facens / ADS
- `Projetos.jsx` — lista de projetos (array `projetos` no topo do arquivo)
- `Contato.jsx` — links de contato (array `contatos` — **troque as URLs placeholder pelas suas**)

Cores e fontes ficam centralizadas em `src/index.css`, no bloco `@theme`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta para deploy.

## Deploy gratuito

**Vercel** (recomendado para projetos Vite):
1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com, "New Project" → importe o repositório.
3. Vercel detecta Vite automaticamente (build command `npm run build`, output `dist`).

**GitHub Pages** (alternativa):
```bash
npm install -D gh-pages
```
Adicione ao `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
Depois rode `npm run deploy`.
