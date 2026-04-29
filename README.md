# Madeiras Santos

Site institucional e catálogo comercial da Madeiras Santos.

## Stack

- Node.js 24 LTS
- npm 11
- Next.js 16 com Pages Router
- React 19
- Tailwind CSS 4
- ESLint 9
- Prettier 3

## Desenvolvimento local

Use a versão de Node definida em `.nvmrc`:

```bash
nvm use
```

Instale as dependências com npm:

```bash
npm install
```

Rode o servidor local:

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Comandos

```bash
npm run dev
npm run lint
npm run lint:fix
npm run test
npm run build
npm run start
npm run analyze
```

`npm run test` executa a validação estrutural de rotas, catálogo, sitemap, SEO e regras comerciais aprovadas.

## Rotas públicas prioritárias

- `/`
- `/produtos`
- `/produtos/telhas`
- `/produtos/madeira-para-telhado`
- `/produtos/chapas-e-compensados`
- `/produtos/portas-e-marcos`
- `/produtos/bancos-de-madeira-sob-encomenda`
- `/entrega`
- `/contato`

Rotas legadas como `/products`, `/produto`, `/contact`, `/about`, `/home`, `/blog` e `/tags` são redirecionadas.

## SEO e catálogo

O sitemap público deve conter apenas as rotas prioritárias. O projeto mantém canonical, BreadcrumbList, ItemList e dados estruturados locais sem adicionar preço, Product, Offer, AggregateRating ou Review markup.

As imagens comerciais ficam em `public/assets/products`. O catálogo fica em `data/productCatalog.js` e as categorias em `data/productCategories.js`.

## Vercel

O projeto pode ser publicado na Vercel com o preset padrão de Next.js. Configure `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` se quiser usar o embed autenticado do Google Maps; sem essa variável, a página de contato usa o embed público de fallback.
