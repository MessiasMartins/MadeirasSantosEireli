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
  const home = read('pages/index.js')
  const seo = read('data/siteMetadata.js')
  const companyInfo = read('data/config/companyInfo.js')

  assert(home.includes('HeroSection'), 'Home page não usa seção Hero refatorada.')
  assert(home.includes('WhyChooseSection'), 'Home page não usa seção de diferenciais.')
  assert(home.includes('ContactSection'), 'Home page não usa seção de contato.')

  assert(home.includes('FAQSection'), 'Home page não renderiza FAQSection.')
  assert(home.includes('PageSEO'), 'Home page sem PageSEO.')

  assert(companyInfo.includes("label: 'WhatsApp'") || read('components/common/PrimaryCtas.js').includes('WhatsApp'), 'CTA de WhatsApp ausente.')
  assert(read('components/common/PrimaryCtas.js').includes("label: 'Ligar'"), 'CTA de ligação ausente.')
  assert(read('components/common/PrimaryCtas.js').includes("label: 'Visitar loja'"), 'CTA de visita à loja ausente.')

  assert(companyInfo.includes('tel:+553136532390'), 'Link de telefone não usa protocolo tel:.')
  assert(companyInfo.includes('https://api.whatsapp.com/send?phone='), 'Link de WhatsApp inválido.')

  assert(seo.includes('title:'), 'Title SEO ausente em siteMetadata.')
  assert(seo.includes('description:'), 'Description SEO ausente em siteMetadata.')

  const repositoryText = [
    read('pages/index.js'),
    read('data/siteMetadata.js'),
    read('data/authors/default.md'),
    read('README.md'),
  ].join('\n')

  assert(!repositoryText.includes('Madeiras Santos EIRELI'), 'Referência legada EIRELI ainda encontrada.')
  assert(repositoryText.includes('Madeiras Santos'), 'Marca Madeiras Santos não encontrada.')

  console.log('Validação de qualidade da home concluída com sucesso.')
}

run()
