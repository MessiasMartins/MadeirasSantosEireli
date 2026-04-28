/* eslint-disable global-require, import/no-dynamic-require, no-console */
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

function requireFromRoot(file) {
  return require(path.join(root, file))
}

function countMatches(content, pattern) {
  return (content.match(pattern) || []).length
}

function run() {
  const pageMetadata = requireFromRoot('data/config/pageMetadata.js')
  const productCategories = requireFromRoot('data/productCategories.js')
  const { products } = requireFromRoot('data/productCatalog.js')
  const companyInfo = read('data/config/companyInfo.js')
  const siteStructure = read('data/config/siteStructure.js')
  const seoComponent = read('components/SEO.js')
  const robots = read('public/robots.txt')
  const sitemap = read('public/sitemap.xml')
  const footer = read('components/Footer.js')
  const produtosPage = read('pages/produtos/index.jsx')
  const categoryPage = read('components/sections/products/CategoryPage.js')
  const productCard = read('components/sections/products/ProductCard.js')
  const tailwindConfig = read('tailwind.config.js')

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

  assert(productCategories.length === 6, 'Quantidade de categorias diferente de 6.')
  ;[
    'chapas-e-compensados',
    'madeira-para-telhado',
    'telhas',
    'portas-e-marcos',
    'servicos-e-sob-encomenda',
    'materiais-de-apoio',
  ].forEach((slug) => {
    assert(
      productCategories.some((category) => category.slug === slug),
      `Categoria ausente: ${slug}`
    )
  })

  const expectedProductSlugs = [
    'compensado-plastificado',
    'compensado-resinado',
    'osb',
    'tabuas',
    'tabuas-pinus',
    'tabuas-angelim',
    'ripas',
    'ripas-angelim',
    'caibros',
    'pecas-paraju',
    'escoras-eucalipto',
    'telha-portuguesa',
    'telha-americana',
    'porta-interna',
    'porta-externa',
    'marcos-de-madeira',
    'dobradicas',
    'fechaduras',
    'pregos',
    'corte-sob-medida',
    'lenha',
    'serragem',
    'bancos-de-madeira-sob-encomenda',
  ]

  assert(products.length === expectedProductSlugs.length, 'Quantidade de produtos diferente de 23.')
  assert(
    new Set(products.map((product) => product.slug)).size === products.length,
    'Slug duplicado.'
  )

  expectedProductSlugs.forEach((slug) => {
    assert(
      products.some((product) => product.slug === slug),
      `Produto ausente: ${slug}`
    )
  })

  products.forEach((product) => {
    assert(product.name, `Produto sem nome: ${product.slug}`)
    assert(product.categorySlug, `Produto sem categoria: ${product.slug}`)
    assert(product.imageAlt && product.imageAlt.length > 20, `Alt text fraco: ${product.slug}`)
    assert(product.highlights.length >= 3, `Highlights insuficientes: ${product.slug}`)
    assert(product.whatsappMessage.startsWith('Olá,'), `Mensagem WhatsApp ausente: ${product.slug}`)
    assert(
      product.image.startsWith('/assets/products/'),
      `Imagem fora de public/assets/products: ${product.slug}`
    )
    assert(
      fs.existsSync(path.join(root, 'public', product.image)),
      `Asset ausente para ${product.slug}: ${product.image}`
    )
  })

  assert(
    new Set(products.map((product) => product.whatsappMessage)).size === products.length,
    'Mensagens de WhatsApp devem ser específicas por produto.'
  )
  assert(
    products.find((product) => product.slug === 'tabuas').image ===
      '/assets/products/tabuas-pinus.png',
    'Fallback de imagem para Tábuas deve usar tabuas-pinus.png.'
  )

  assert(
    pageMetadata.produtos.title === 'Produtos | Madeiras Santos',
    'Title de /produtos inválido.'
  )
  assert(
    pageMetadata.produtos.h1 === 'Produtos Madeiras Santos',
    'H1 configurado de /produtos inválido.'
  )
  assert(
    pageMetadata.produtos.description.includes('OSB') &&
      pageMetadata.produtos.description.includes('bancos de madeira sob encomenda'),
    'Description de /produtos incompleta.'
  )

  assert(countMatches(produtosPage, /<h1/g) === 1, '/produtos deve ter exatamente um H1.')
  assert(produtosPage.includes('ItemListSEO'), '/produtos sem ItemListSEO.')
  assert(produtosPage.includes('Solicitar orçamento pelo WhatsApp'), 'CTA principal ausente.')
  assert(
    productCard.includes('getWhatsAppLink(product.whatsappMessage)'),
    'CTA por produto ausente.'
  )
  assert(productCard.includes('Solicitar pelo WhatsApp'), 'Texto de CTA de produto ausente.')
  assert(productCard.includes('width={1254}'), 'Cards sem largura de imagem definida.')
  assert(productCard.includes('height={1254}'), 'Cards sem altura de imagem definida.')
  assert(productCard.includes('sizes='), 'Cards sem atributo sizes.')

  assert(
    seoComponent.includes("'@type': 'BreadcrumbList'"),
    'Structured data de breadcrumb não encontrado.'
  )
  assert(seoComponent.includes("'@type': 'ItemList'"), 'Structured data de ItemList ausente.')
  assert(!seoComponent.includes("'@type': 'Product'"), 'Não adicionar Product markup no hub.')
  assert(!seoComponent.includes('AggregateRating'), 'Não declarar AggregateRating.')
  assert(!seoComponent.includes("'@type': 'Offer'"), 'Não declarar Offer sem preço.')
  assert(seoComponent.includes('canonicalUrl'), 'Canonical não identificado no SEO component.')

  assert(siteStructure.includes("href: '/produtos'"), 'Header sem link para /produtos.')
  assert(
    footer.includes('siteStructure.productCategories.map'),
    'Footer sem bloco dinâmico de links para categorias.'
  )
  assert(companyInfo.includes('https://api.whatsapp.com/send?phone='), 'Link de WhatsApp inválido.')
  assert(companyInfo.includes('tel:+553136532390'), 'Link de telefone sem protocolo tel:.')
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
  ;[
    'pages/produtos/chapas-e-compensados.jsx',
    'pages/produtos/madeira-para-telhado.jsx',
    'pages/produtos/telhas.jsx',
    'pages/produtos/portas-e-marcos.jsx',
    'pages/produtos/bancos-de-madeira-sob-encomenda.jsx',
  ].forEach((file) => {
    assert(!read(file).includes('productCategories['), `${file} ainda depende de índice fixo.`)
  })

  const impactedContent = [
    produtosPage,
    categoryPage,
    productCard,
    read('data/productCatalog.js'),
    read('data/productCategories.js'),
  ].join('\n')

  assert(
    !impactedContent.includes('Madeiras Santos EIRELI'),
    'Conteúdo impactado ainda contém EIRELI.'
  )
  assert(
    !impactedContent.toLowerCase().includes('a partir de'),
    'Conteúdo não deve usar "a partir de".'
  )
  assert(
    !impactedContent.toLowerCase().includes('preço'),
    'Conteúdo do catálogo não deve exibir preço.'
  )
  assert(tailwindConfig.includes('./pages/**/*.{js,jsx}'), 'Tailwind purge sem páginas JSX.')
  assert(
    tailwindConfig.includes('./components/**/*.{js,jsx}'),
    'Tailwind purge sem componentes JSX.'
  )

  console.log('Validação estrutural/SEO/catálogo concluída com sucesso.')
}

run()
