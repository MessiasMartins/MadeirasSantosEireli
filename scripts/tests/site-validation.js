/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const root = process.cwd()

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function run() {
  const pageMetadata = read('data/config/pageMetadata.js')
  const companyInfo = read('data/config/companyInfo.js')
  const siteStructure = read('data/config/siteStructure.js')
  const seoComponent = read('components/SEO.js')
  const robots = read('public/robots.txt')
  const sitemap = read('public/sitemap.xml')
  const footer = read('components/Footer.js')

  const priorityPages = [
    'pages/index.js',
    'pages/produtos/index.jsx',
    'pages/produtos/telhas.jsx',
    'pages/produtos/madeira-para-telhado.jsx',
    'pages/produtos/chapas-e-compensados.jsx',
    'pages/produtos/portas-e-marcos.jsx',
    'pages/produtos/bancos-de-madeira-sob-encomenda.jsx',
    'pages/entrega.jsx',
    'pages/contato.jsx',
  ]

  priorityPages.forEach((file) => {
    assert(fs.existsSync(path.join(root, file)), `Rota prioritária ausente: ${file}`)
  })

  assert(siteStructure.includes("{ href: '/', title: 'Início' }"), 'Header sem link para Início.')
  assert(
    siteStructure.includes("{ href: '/produtos', title: 'Produtos' }"),
    'Header sem link para /produtos.'
  )
  assert(
    siteStructure.includes("{ href: '/entrega', title: 'Entrega' }"),
    'Header sem link para /entrega.'
  )
  assert(
    siteStructure.includes("{ href: '/contato', title: 'Contato' }"),
    'Header sem link para /contato.'
  )

  assert(
    footer.includes('siteStructure.productCategories.map'),
    'Footer sem bloco dinâmico de links para categorias.'
  )

  assert(
    seoComponent.includes("'@type': 'BreadcrumbList'"),
    'Structured data de breadcrumb não encontrado.'
  )
  assert(seoComponent.includes('canonicalUrl'), 'Canonical não identificado no SEO component.')

  assert(
    pageMetadata.includes('Madeiras Santos | Madeireira em Belo Horizonte e região'),
    'Metadata da home fora do padrão solicitado.'
  )
  assert(pageMetadata.includes('Produtos | Madeiras Santos'), 'Metadata de Produtos ausente.')
  assert(
    pageMetadata.includes('Contato e Localização | Madeiras Santos'),
    'Metadata de Contato ausente.'
  )

  assert(
    siteStructure.includes("href: '/produtos/telhas'"),
    'Estrutura de navegação sem rota de telhas.'
  )
  assert(companyInfo.includes('https://api.whatsapp.com/send?phone='), 'Link de WhatsApp inválido.')
  assert(companyInfo.includes('tel:+553136532390'), 'Link de telefone sem protocolo tel:.')

  assert(!read('README.md').includes('Madeiras Santos EIRELI'), 'README ainda contém EIRELI.')
  assert(
    !read('data/authors/default.md').includes('Madeiras Santos EIRELI'),
    'Autor ainda contém EIRELI.'
  )
  ;[
    '/produtos',
    '/produtos/telhas',
    '/produtos/madeira-para-telhado',
    '/produtos/chapas-e-compensados',
    '/produtos/portas-e-marcos',
    '/produtos/bancos-de-madeira-sob-encomenda',
    '/entrega',
    '/contato',
  ].forEach((route) => {
    assert(
      sitemap.includes(`<loc>https://www.madeirassantos.com.br${route}</loc>`),
      `Sitemap sem rota ${route}`
    )
  })

  assert(
    robots.includes('Sitemap: https://www.madeirassantos.com.br/sitemap.xml'),
    'robots.txt sem sitemap correto.'
  )

  console.log('Validação estrutural/SEO concluída com sucesso.')
}

run()
