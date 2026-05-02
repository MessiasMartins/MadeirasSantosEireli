const fs = require('fs')
const path = require('path')

const root = process.cwd()

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function exists(file) {
  return fs.existsSync(path.join(root, file))
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

function walkFiles(dir, files = []) {
  if (!exists(dir)) return files

  fs.readdirSync(path.join(root, dir), { withFileTypes: true }).forEach((entry) => {
    const relativePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(relativePath, files)
      return
    }
    files.push(relativePath)
  })

  return files
}

function run() {
  const packageJson = requireFromRoot('package.json')
  const pageMetadata = requireFromRoot('data/config/pageMetadata.js')
  const productCategories = requireFromRoot('data/productCategories.js')
  const { products } = requireFromRoot('data/productCatalog.js')
  const siteMetadataData = requireFromRoot('data/siteMetadata.js')
  const visualAssets = requireFromRoot('data/config/visualAssets.js')
  const companyInfo = read('data/config/companyInfo.js')
  const siteMetadata = read('data/siteMetadata.js')
  const siteStructure = read('data/config/siteStructure.js')
  const nextConfig = read('next.config.js')
  const vercelConfig = read('vercel.json')
  const seoComponent = read('components/SEO.js')
  const robots = read('public/robots.txt')
  const sitemap = read('public/sitemap.xml')
  const manifest = read('public/static/favicons/site.webmanifest')
  const header = read('components/layout/Header.js')
  const footer = read('components/layout/Footer.js')
  const mobileMenu = read('components/layout/MobileMenu.js')
  const layoutWrapper = read('components/LayoutWrapper.js')
  const documentPage = read('pages/_document.jsx')
  const appPage = read('pages/_app.jsx')
  const homeStructuredData = read('lib/homeStructuredData.js')
  const produtosPage = read('pages/produtos/index.jsx')
  const categoryPage = read('components/sections/products/CategoryPage.js')
  const productCard = read('components/sections/products/ProductCard.js')
  const heroSection = read('components/sections/home/HeroSection.js')
  const storySection = read('components/sections/home/StorySection.js')
  const aboutPage = read('pages/about.jsx')
  const faqData = read('data/faqData.js')
  const primaryCtas = read('components/common/PrimaryCtas.js')
  const productImages = read('lib/utils/productImages.js')
  const whatsappUtils = read('lib/utils/whatsapp.js')
  const tailwindCss = read('css/tailwind.css')

  const requiredScripts = ['dev', 'build', 'start', 'serve', 'lint', 'lint:fix', 'test', 'analyze']
  requiredScripts.forEach((script) => {
    assert(packageJson.scripts[script], `Script ausente: ${script}`)
  })
  assert(packageJson.scripts.dev === 'next dev', 'Script dev deve usar next dev.')
  assert(packageJson.scripts.build === 'next build', 'Script build deve usar next build.')
  assert(packageJson.scripts.start === 'next start', 'Script start deve usar next start.')
  assert(packageJson.scripts.serve === 'next start', 'Script serve deve usar next start.')
  assert(packageJson.scripts.lint === 'eslint .', 'Script lint deve usar ESLint CLI.')
  assert(packageJson.scripts['lint:fix'] === 'eslint . --fix', 'Script lint:fix inválido.')
  assert(
    packageJson.scripts.test === 'node scripts/tests/site-validation.js',
    'Script test deve rodar a validação estrutural.'
  )
  assert(
    packageJson.scripts['optimize:images'] === 'node scripts/optimize-images.js',
    'Script optimize:images deve rodar a otimização local de imagens.'
  )
  Object.values(packageJson.scripts).forEach((script) => {
    assert(!script.includes('next lint'), 'Scripts não devem usar next lint.')
    assert(!script.includes('next-remote-watch'), 'Scripts não devem usar next-remote-watch.')
    assert(!script.includes('--legacy-peer-deps'), 'Scripts não devem usar --legacy-peer-deps.')
    assert(!script.includes('--force'), 'Scripts não devem usar --force.')
  })
  assert(packageJson.engines.node === '>=24 <25', 'Engine Node deve travar a linha 24 LTS.')
  assert(packageJson.packageManager === 'npm@11.13.0', 'Package manager deve ser npm 11.13.0.')

  const removedDependencies = [
    '@mailchimp/mailchimp_marketing',
    '@svgr/webpack',
    'dedent',
    'file-loader',
    'github-slugger',
    'globby',
    'gray-matter',
    'image-size',
    'inquirer',
    'mdx-bundler',
    'next-remote-watch',
    'preact',
    'reading-time',
    'rehype-autolink-headings',
    'rehype-katex',
    'rehype-prism-plus',
    'rehype-slug',
    'remark-footnotes',
    'remark-gfm',
    'remark-math',
    'smoothscroll-polyfill',
    'next-themes',
    'unist-util-visit',
  ]
  removedDependencies.forEach((dependency) => {
    assert(
      !packageJson.dependencies[dependency],
      `Dependência legada em dependencies: ${dependency}`
    )
    assert(
      !packageJson.devDependencies[dependency],
      `Dependência legada em devDependencies: ${dependency}`
    )
  })

  assert(packageJson.dependencies.next === '16.2.4', 'Next deve estar em 16.2.4.')
  assert(packageJson.dependencies.react === '19.2.5', 'React deve estar em 19.2.5.')
  assert(packageJson.dependencies['react-dom'] === '19.2.5', 'React DOM deve estar em 19.2.5.')
  assert(packageJson.dependencies.tailwindcss === '4.2.4', 'Tailwind deve estar em 4.2.4.')
  assert(packageJson.devDependencies.eslint === '9.39.4', 'ESLint deve estar em 9.39.4.')
  assert(packageJson.devDependencies.prettier === '3.8.3', 'Prettier deve estar em 3.8.3.')
  assert(
    packageJson.overrides?.postcss === '$postcss',
    'Override de PostCSS deve manter Next fora da versão vulnerável.'
  )

  assert(exists('eslint.config.mjs'), 'Config flat do ESLint ausente.')
  assert(!exists('.eslintrc.js'), 'Config ESLint antiga deve ser removida.')
  assert(!exists('.eslintignore'), 'Config ESLint antiga .eslintignore deve ser removida.')
  assert(
    !exists('.babelrc'),
    'Config Babel antiga deve ser removida para usar o compilador padrão do Next.'
  )
  assert(!exists('tailwind.config.js'), 'Tailwind v4 deve usar configuração CSS-first nesta fase.')
  assert(/@import ['"]tailwindcss['"]/.test(tailwindCss), 'Tailwind CSS v4 não configurado.')
  assert(/@plugin ['"]@tailwindcss\/forms['"]/.test(tailwindCss), 'Plugin forms ausente no CSS.')
  assert(
    /@plugin ['"]@tailwindcss\/typography['"]/.test(tailwindCss),
    'Plugin typography ausente no CSS.'
  )
  assert(tailwindCss.includes('--color-brand-green: #059669'), 'Token verde da marca ausente.')
  assert(tailwindCss.includes('--color-brand-graphite: #1d1d1b'), 'Token grafite da marca ausente.')
  ;[
    'pages/blog.jsx',
    'pages/blog/[...slug].js',
    'pages/tags.jsx',
    'pages/products.jsx',
    'components/NewsletterForm.js',
    'components/comments/index.js',
    'components/Footer.js',
    'components/MobileNav.js',
    'components/ThemeSwitch.js',
    'components/SectionContainer.js',
    'components/Features.js',
    'components/sections/home/WhyChooseSection.js',
    'lib/mdx.js',
    'public/feed.xml',
  ].forEach((file) => {
    assert(!exists(file), `Legado deveria ter sido removido: ${file}`)
  })

  const priorityPages = [
    'pages/index.js',
    'pages/about.jsx',
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
    assert(exists(file), `Rota prioritária ausente: ${file}`)
  })

  const expectedSitemapRoutes = [
    '/',
    '/about',
    '/produtos',
    '/produtos/telhas',
    '/produtos/madeira-para-telhado',
    '/produtos/chapas-e-compensados',
    '/produtos/portas-e-marcos',
    '/produtos/bancos-de-madeira-sob-encomenda',
    '/entrega',
    '/contato',
  ]

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
      exists(path.join('public', product.image)),
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
    pageMetadata.about,
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
  assert(countMatches(aboutPage, /<h1/g) === 1, '/about deve ter exatamente um H1.')
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
  assert(
    productCard.includes('getOptimizedProductImage(product)'),
    'Cards devem usar derivados WebP otimizados para renderização visual.'
  )
  assert(productCard.includes('width={900}'), 'Cards sem largura otimizada de imagem definida.')
  assert(productCard.includes('height={900}'), 'Cards sem altura otimizada de imagem definida.')
  assert(productCard.includes('sizes='), 'Cards sem atributo sizes.')
  assert(productCard.includes('quality={76}'), 'Cards devem limitar qualidade visual otimizada.')
  assert(
    productImages.includes('/assets/products/optimized/') &&
      productImages.includes("replace(/\\.png$/, '.webp')"),
    'Resolver de imagens otimizadas de produto inválido.'
  )

  assert(
    siteMetadataData.siteLogo === visualAssets.brand.logoHorizontal,
    'siteMetadata.siteLogo deve usar a nova logo horizontal.'
  )
  assert(
    siteMetadataData.siteSymbol === visualAssets.brand.symbol,
    'siteMetadata.siteSymbol deve usar o novo símbolo.'
  )
  assert(
    siteMetadataData.image === '/assets/seo/madeiras-santos-search-square.jpg',
    'siteMetadata.image deve usar a imagem SEO quadrada aprovada.'
  )
  assert(
    siteMetadataData.socialBanner === '/assets/seo/madeiras-santos-og-1200x630.jpg',
    'siteMetadata.socialBanner deve usar a imagem OG aprovada.'
  )
  assert(
    visualAssets.images.hero === '/assets/images/hero-forest-generic.webp' &&
      visualAssets.images.heroSource === '/assets/images/hero-forest-generic.jpg',
    'Hero temporário deve usar WebP otimizado e preservar o JPG fonte aprovado.'
  )
  assert(
    visualAssets.images.forklift === '/assets/images/empilhadeira.webp' &&
      visualAssets.images.forkliftSource === '/assets/images/empilhadeira.jpg' &&
      visualAssets.images.forkliftWide === '/assets/images/empilhadeira-wide.webp' &&
      visualAssets.images.forkliftWideSource === '/assets/images/empilhadeira-wide.jpg',
    'Empilhadeira oficial deve preservar fontes JPG e usar derivados WebP.'
  )
  ;['stock', 'yard', 'delivery'].forEach((key) => {
    assert(
      visualAssets.images[key] === visualAssets.images.forkliftWide,
      `Imagem ${key} deve usar a variação oficial wide da empilhadeira.`
    )
  })
  assert(
    header.includes('visualAssets.brand.logoHorizontalWebp') &&
      footer.includes('visualAssets.brand.logoHorizontalWebp') &&
      mobileMenu.includes('visualAssets.brand.logoHorizontalWebp'),
    'Header, footer e menu mobile devem renderizar a logo WebP otimizada.'
  )
  assert(
    documentPage.includes('/assets/brand/madeiras-santos-favicon.ico') &&
      documentPage.includes('/assets/brand/favicon-16x16.png') &&
      documentPage.includes('/assets/brand/favicon-32x32.png') &&
      documentPage.includes('/assets/brand/favicon-48x48.png') &&
      documentPage.includes('/assets/brand/apple-touch-icon.png'),
    'Favicon novo deve estar configurado no document.'
  )
  assert(
    manifest.includes('/assets/brand/android-chrome-192x192.png') &&
      manifest.includes('/assets/brand/android-chrome-512x512.png'),
    'Manifest deve apontar para os favicons regenerados.'
  )
  assert(
    homeStructuredData.includes('visualAssets.seo.searchSquare') &&
      homeStructuredData.includes('siteMetadata.siteLogo'),
    'Store structured data deve usar imagem SEO e logo novas.'
  )
  assert(!appPage.includes('ThemeProvider'), 'Dark mode provider deve ser removido.')
  assert(appPage.includes('next/font/google'), 'Fonte deve ser carregada via next/font.')
  assert(
    !documentPage.includes('fonts.googleapis.com'),
    'Google Fonts externo não deve bloquear render.'
  )
  assert(
    !documentPage.includes('fonts.gstatic.com'),
    'Preconnect de Google Fonts não deve permanecer.'
  )
  assert(
    vercelConfig.includes('"source": "/assets/(.*)"') &&
      vercelConfig.includes('"value": "public, max-age=31536000, immutable"'),
    'Assets públicos devem ter cache longo configurado na Vercel.'
  )
  assert(
    appPage.includes("import CookieConsent from 'react-cookie-consent'") &&
      appPage.includes('cookieName="madeiras-santos-cookie-consent"') &&
      appPage.includes('buttonText="Aceitar cookies"'),
    'Cookie banner aprovado deve usar react-cookie-consent com a configuração original.'
  )
  assert(
    heroSection.includes('preload') &&
      heroSection.includes('fetchPriority="high"') &&
      !read('pages/index.js').includes('rel="preload" as="image"'),
    'Preload do hero deve ser delegado ao next/image.'
  )
  assert(
    !heroSection.includes('<Reveal') && heroSection.includes('<h1'),
    'Conteúdo crítico do hero não deve depender de reveal pós-hidratação.'
  )
  assert(!layoutWrapper.includes('ThemeSwitch'), 'Layout não deve renderizar toggle de tema.')
  assert(mobileMenu.includes('aria-expanded'), 'Menu mobile deve expor estado acessível.')

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
    productCard.includes('id={`produto-${product.slug}`}'),
    'ProductCard deve expor âncora produto-${slug}.'
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

  assert(siteStructure.includes("href: '/produtos'"), 'Header sem link para /produtos.')
  assert(siteStructure.includes("href: '/about'"), 'Navegação sem link para /about.')
  assert(
    footer.includes('siteStructure.productCategories.map'),
    'Footer sem bloco dinâmico de links para categorias.'
  )
  assert(footer.includes('href="/about"'), 'Footer sem link institucional para /about.')
  assert(aboutPage.includes('BreadcrumbSEO'), '/about deve preservar BreadcrumbList.')
  assert(
    nextConfig.includes("source: '/sobre'") && nextConfig.includes("destination: '/about'"),
    'Redirect /sobre -> /about ausente.'
  )
  assert(
    !nextConfig.includes("source: '/about', destination: '/contato'"),
    'Redirect /about -> /contato deve ser removido.'
  )
  assert(companyInfo.includes('https://api.whatsapp.com/send?phone='), 'Link de WhatsApp inválido.')
  assert(companyInfo.includes('tel:+553136532390'), 'Link de telefone sem protocolo tel:.')
  assert(
    companyInfo.includes('send?phone=553136532390'),
    'WhatsApp deve apontar para +55 31 3653-2390.'
  )
  assert(whatsappUtils.includes("WHATSAPP_PHONE = '553136532390'"), 'Helper de WhatsApp inválido.')
  const deprecatedWhatsAppPhone = ['5531', '99', '248', '2390'].join('')
  assert(
    !companyInfo.includes(deprecatedWhatsAppPhone) &&
      !primaryCtas.includes(deprecatedWhatsAppPhone) &&
      !whatsappUtils.includes(deprecatedWhatsAppPhone),
    'Número antigo de WhatsApp não deve permanecer em CTAs.'
  )

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
  ;['/blog', '/construction', '/sobre', '/tags', '[', ']'].forEach((forbiddenRoute) => {
    assert(!sitemap.includes(forbiddenRoute), `Sitemap contém rota indevida: ${forbiddenRoute}`)
  })

  assert(robots.includes('User-agent: *'), 'robots.txt sem User-agent global.')
  assert(robots.includes('Allow: /'), 'robots.txt deve permitir indexação das páginas.')
  assert(!robots.includes('Disallow: /'), 'robots.txt bloqueia o site indevidamente.')
  assert(
    robots.includes('Sitemap: https://www.madeirassantos.com.br/sitemap.xml'),
    'robots.txt sem sitemap correto.'
  )

  const publicContent = [
    produtosPage,
    categoryPage,
    productCard,
    heroSection,
    storySection,
    aboutPage,
    read('components/sections/home/CategoryHighlights.js'),
    read('components/sections/home/ContactSection.js'),
    read('components/sections/home/DeliverySection.js'),
    read('components/sections/home/FeaturedProducts.js'),
    faqData,
    primaryCtas,
    siteMetadata,
    read('data/config/pageMetadata.js'),
    read('data/productCatalog.js'),
    read('data/productCategories.js'),
    read('pages/entrega.jsx'),
    read('pages/contato.jsx'),
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
  ;[
    'public/assets/brand/madeiras-santos-logo-horizontal.png',
    'public/assets/brand/madeiras-santos-logo-horizontal.webp',
    'public/assets/brand/madeiras-santos-symbol.png',
    'public/assets/brand/madeiras-santos-favicon.ico',
    'public/assets/brand/madeiras-santos-favicon-512.png',
    'public/assets/brand/favicon-16x16.png',
    'public/assets/brand/favicon-32x32.png',
    'public/assets/brand/favicon-48x48.png',
    'public/assets/brand/android-chrome-192x192.png',
    'public/assets/brand/android-chrome-512x512.png',
    'public/assets/brand/apple-touch-icon.png',
    'public/assets/seo/madeiras-santos-search-square.jpg',
    'public/assets/seo/madeiras-santos-og-1200x630.jpg',
    'public/assets/images/hero-forest-generic.jpg',
    'public/assets/images/hero-forest-generic.webp',
    'public/assets/images/empilhadeira.jpg',
    'public/assets/images/empilhadeira.webp',
    'public/assets/images/empilhadeira-wide.jpg',
    'public/assets/images/empilhadeira-wide.webp',
    'public/assets/images/madeiras-santos-fachada.jpg',
    'public/assets/images/madeiras-santos-fachada.webp',
    'public/assets/images/madeiras-santos-loja.webp',
    'public/static/favicons/favicon.ico',
    'public/static/favicons/favicon-16x16.png',
    'public/static/favicons/favicon-32x32.png',
    'public/static/favicons/favicon-48x48.png',
    'public/static/favicons/android-chrome-192x192.png',
    'public/static/favicons/android-chrome-512x512.png',
    'public/static/favicons/apple-touch-icon.png',
    'public/static/favicons/site.webmanifest',
    'public/social-icons/mail.svg',
    'public/social-icons/whatsapp.svg',
    'public/social-icons/instagram.svg',
    'public/social-icons/google.svg',
    'public/other-icons/mastercardlogo.svg',
    'public/other-icons/visa.svg',
    'public/favicon.ico',
  ].forEach((file) => {
    assert(exists(file), `Asset essencial ausente: ${file}`)
  })

  products.forEach((product) => {
    const optimizedProductImage = path.join(
      'public/assets/products/optimized',
      path.basename(product.image).replace(/\.png$/, '.webp')
    )
    assert(
      exists(optimizedProductImage),
      `Asset WebP otimizado ausente para ${product.slug}: ${optimizedProductImage}`
    )
  })

  walkFiles('pages').forEach((file) => {
    assert(!file.includes('/blog/'), `Rota de blog remanescente: ${file}`)
    assert(!file.includes('/tags/'), `Rota de tag remanescente: ${file}`)
  })

  const sourceFiles = walkFiles('components')
    .concat(walkFiles('pages'))
    .concat(walkFiles('data'))
    .filter((file) => /\.(js|jsx|mjs|json|css)$/.test(file))

  sourceFiles.forEach((file) => {
    const content = read(file)
    assert(!content.includes('dark:'), `Classe dark mode remanescente: ${file}`)
    assert(!content.includes('next-themes'), `next-themes remanescente: ${file}`)
    assert(!content.toLowerCase().includes('newsletter'), `Newsletter remanescente: ${file}`)
    assert(!content.includes('giscus'), `Comentários legados remanescentes: ${file}`)
    assert(!content.includes('disqus'), `Comentários legados remanescentes: ${file}`)
    assert(!content.includes('utterances'), `Comentários legados remanescentes: ${file}`)
  })

  console.log('Validação estrutural/SEO/catálogo/tooling concluída com sucesso.')
}

run()
