const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')
const siteStructure = require('../data/config/siteStructure')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/**/*.{js,jsx}',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    '!pages/_*.{js,jsx}',
    '!pages/api/**',
    '!pages/blog/[...slug].js',
    '!pages/blog/page/[page].js',
    '!pages/tags/[tag].js',
    '!pages/404.js',
    '!pages/about.jsx',
    '!pages/products.jsx',
    '!pages/home.jsx',
  ])

  const staticRoutes = pages
    .map((page) =>
      page
        .replace('pages', '')
        .replace('/index.jsx', '')
        .replace('/index.js', '')
        .replace('.jsx', '')
        .replace('.js', '')
        .replace('data/blog', '/blog')
        .replace('.mdx', '')
        .replace('.md', '')
    )
    .filter(Boolean)

  const routes = Array.from(new Set([...siteStructure.priorityRoutes, ...staticRoutes])).sort()

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          const normalizedRoute = route === '' ? '/' : route
          return `<url><loc>${siteMetadata.siteUrl}${normalizedRoute}</loc></url>`
        })
        .join('')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
