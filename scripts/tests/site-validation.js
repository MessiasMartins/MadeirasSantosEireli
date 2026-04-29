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
  const siteMetadata = read('data/siteMetadata.js')
  const siteStructure = read('data/config/siteStructure.js')
  const seoComponent = read('components/SEO.js')
  const robots = read('public/robots.txt')
  const sitemap = read('public/sitemap.xml')
  const footer = read('components/Footer.js')
  const produtosPage = read('pages/produtos/index.jsx')
  const categoryPage = read('components/sections/products/CategoryPage.js')
  const productCard = read('components/sections/products/ProductCard.js')
  const heroSection = read('components/sections/home/HeroSection.js')
  const features = read('components/Features.js')
  const faqData = read('data/faqData.js')
  const primaryCtas = read('components/common/PrimaryCtas.js')
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
  const expectedSitemapRoutes = [
    '/',
    '/produtos',
    '/produtos/telhas',
    '/produtos/madeira-para-telhado',
    '/produtos/chapas-e-compensados',
    '/produtos/portas-e-marcos',
    '/produtos/bancos-de-madeira-sob-encomenda',
    '/entrega',
    '/contato',
  ]

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
    assert(
      /^[a-z0-9]+(?:-[a-z0-9]+)*\.png$/.test(path.basename(product.image)),
      `Nome de asset deve ser kebab-case sem acentos: ${product.image}`
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
      pageMetadata.produtos.description.includes('serviços sob consulta'),
    'Description de /produtos incompleta.'
  )
  ;[
    pageMetadata.home,
    pageMetadata.produtos,
    pageMetadata.telhas,
    pageMetadata.madeiraTelhado,
    pageMetadata.chapasCompensados,
    pageMetadata.portasMarcos,
    pageMetadata.bancosSobEncomenda,
    pageMetadata.entrega,
    pageMetadata.contato,
  ].forEach((metadata) => {
    assert(metadata.title && metadata.title.length <= 70, `Title inválido: ${metadata.title}`)
    assert(
      metadata.description && metadata.description.length <= 170,
      `Description inválida: ${metadata.title}`
    )
    assert(metadata.h1, `H1 configurado ausente: ${metadata.title}`)
  })

  assert(countMatches(heroSection, /<h1/g) === 1, 'Home deve ter exatamente um H1.')
  assert(countMatches(produtosPage, /<h1/g) === 1, '/produtos deve ter exatamente um H1.')
  assert(countMatches(categoryPage, /<h1/g) === 1, 'Páginas de categoria devem ter um H1.')
  assert(countMatches(read('pages/entrega.jsx'), /<h1/g) === 1, '/entrega deve ter um H1.')
  assert(countMatches(read('pages/contato.jsx'), /<h1/g) === 1, '/contato deve ter um H1.')
  assert(produtosPage.includes('ItemListSEO'), '/produtos sem ItemListSEO.')
  assert(produtosPage.includes('ogTitle={seo.ogTitle}'), '/produtos sem ogTitle específico.')
  assert(
    produtosPage.includes('ogDescription={seo.ogDescription}'),
    '/produtos sem ogDescription específico.'
  )
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
  assert(
    seoComponent.includes('ogTitle = title') &&
      seoComponent.includes('ogDescription = description'),
    'PageSEO deve aceitar título e descrição Open Graph específicos.'
  )
  assert(
    seoComponent.includes('`${siteMetadata.siteUrl}${itemListId}#produto-${item.slug}`'),
    'ItemListSEO deve apontar para âncoras únicas por produto.'
  )
  assert(
    !seoComponent.includes('item.categoryHref ||'),
    'ItemListSEO não deve reutilizar URLs de categoria para vários produtos.'
  )

  const hubItemListUrls = products.map(
    (product) => `https://www.madeirassantos.com.br/produtos#produto-${product.slug}`
  )
  assert(
    new Set(hubItemListUrls).size === products.length,
    'ItemList do hub deve gerar URLs únicas por produto.'
  )
  productCategories.forEach((category) => {
    const categoryProducts = products.filter((product) => product.categorySlug === category.slug)
    const categoryItemListUrls = categoryProducts.map(
      (product) => `https://www.madeirassantos.com.br${category.href}#produto-${product.slug}`
    )
    assert(
      new Set(categoryItemListUrls).size === categoryProducts.length,
      `ItemList da categoria deve gerar URLs únicas: ${category.slug}`
    )
  })
  products.forEach((product) => {
    assert(
      productCard.includes('id={`produto-${product.slug}`}'),
      'ProductCard deve expor âncora produto-${slug}.'
    )
    assert(
      hubItemListUrls.includes(
        `https://www.madeirassantos.com.br/produtos#produto-${product.slug}`
      ),
      `Âncora do produto ausente no ItemList esperado: ${product.slug}`
    )
  })

  assert(siteStructure.includes("href: '/produtos'"), 'Header sem link para /produtos.')
  assert(
    footer.includes('siteStructure.productCategories.map'),
    'Footer sem bloco dinâmico de links para categorias.'
  )
  assert(companyInfo.includes('https://api.whatsapp.com/send?phone='), 'Link de WhatsApp inválido.')
  assert(companyInfo.includes('tel:+553136532390'), 'Link de telefone sem protocolo tel:.')
  assert(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'Sitemap sem XML header.')
  assert(sitemap.includes('<urlset'), 'Sitemap sem urlset.')
  const sitemapLocs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  const expectedSitemapLocs = expectedSitemapRoutes.map(
    (route) => `https://www.madeirassantos.com.br${route}`
  )
  assert(
    sitemapLocs.length === expectedSitemapLocs.length,
    'Sitemap deve conter apenas as rotas prioritárias.'
  )
  expectedSitemapRoutes.forEach((route) => {
    assert(
      sitemap.includes(`<loc>https://www.madeirassantos.com.br${route}</loc>`),
      `Sitemap sem rota ${route}`
    )
  })
  ;['/blog/[...slug]', '/construction', '/tags', '[', ']'].forEach((forbiddenRoute) => {
    assert(!sitemap.includes(forbiddenRoute), `Sitemap contém rota indevida: ${forbiddenRoute}`)
  })

  assert(robots.includes('User-agent: *'), 'robots.txt sem User-agent global.')
  assert(robots.includes('Allow: /'), 'robots.txt deve permitir indexação das páginas.')
  assert(!robots.includes('Disallow: /'), 'robots.txt bloqueia o site indevidamente.')
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

  const publicContent = [
    produtosPage,
    categoryPage,
    productCard,
    heroSection,
    features,
    faqData,
    primaryCtas,
    siteMetadata,
    read('data/config/pageMetadata.js'),
    read('data/productCatalog.js'),
    read('data/productCategories.js'),
  ].join('\n')

  assert(
    !publicContent.includes('Madeiras Santos EIRELI'),
    'Conteúdo público revisado ainda contém EIRELI.'
  )
  assert(
    !publicContent.toLowerCase().includes('a partir de'),
    'Conteúdo não deve usar "a partir de".'
  )
  assert(
    !publicContent.toLowerCase().includes('preço'),
    'Conteúdo público revisado não deve exibir preço.'
  )
  ;[
    'logística própria',
    'logistica propria',
    'diponível',
    'quilidade',
    'enterga',
    'incluído PIX',
  ].forEach((forbiddenText) => {
    assert(
      !publicContent.toLowerCase().includes(forbiddenText.toLowerCase()),
      `Texto público contém termo incorreto: ${forbiddenText}`
    )
  })
  assert(
    !primaryCtas.includes('rel="noreferrer"'),
    'Links com target blank devem usar noopener noreferrer.'
  )
  ;[
    'pages/produtos/index.jsx',
    'pages/contato.jsx',
    'components/Link.js',
    'components/social-icons/index.js',
  ].forEach((file) => {
    const lines = read(file).split('\n')
    lines.forEach((line, index) => {
      if (line.includes('target="_blank"')) {
        const nearby = lines.slice(index, index + 4).join('\n')
        assert(
          nearby.includes('rel="noopener noreferrer"'),
          `${file} usa target="_blank" sem rel seguro.`
        )
      }
    })
  })
  assert(tailwindConfig.includes('./pages/**/*.{js,jsx}'), 'Tailwind purge sem páginas JSX.')
  assert(
    tailwindConfig.includes('./components/**/*.{js,jsx}'),
    'Tailwind purge sem componentes JSX.'
  )

  console.log('Validação estrutural/SEO/catálogo concluída com sucesso.')
}

run()
