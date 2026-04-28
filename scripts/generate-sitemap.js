const fs = require('fs')
const siteMetadata = require('../data/siteMetadata')
const siteStructure = require('../data/config/siteStructure')

;(() => {
  const routes = Array.from(new Set(siteStructure.priorityRoutes))

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => {
      const normalizedRoute = route === '' ? '/' : route
      return `  <url><loc>${siteMetadata.siteUrl}${normalizedRoute}</loc></url>`
    }),
    '</urlset>',
    '',
  ].join('\n')

  fs.writeFileSync('public/sitemap.xml', sitemap)
})()
