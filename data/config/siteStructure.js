const companyInfo = require('./companyInfo')

const productCategories = [
  {
    title: 'Telhas',
    slug: 'telhas',
    href: '/produtos/telhas',
    description:
      'Encontre telhas para diferentes tipos de cobertura, reformas e obras com orientação na escolha do material.',
    applications: ['Coberturas residenciais', 'Reformas', 'Áreas externas', 'Galpões e apoio'],
    imageAlt: 'Telhas para obras e coberturas na Madeiras Santos',
  },
  {
    title: 'Madeira para Telhado',
    slug: 'madeira-para-telhado',
    href: '/produtos/madeira-para-telhado',
    description:
      'Madeiras para telhado, estruturas, apoio e cobertura com estoque no local e atendimento direto.',
    applications: ['Estrutura de telhado', 'Apoios', 'Reforços', 'Coberturas em geral'],
    imageAlt: 'Madeiras para estrutura de telhado na Madeiras Santos',
  },
  {
    title: 'Chapas e Compensados',
    slug: 'chapas-e-compensados',
    href: '/produtos/chapas-e-compensados',
    description:
      'Chapas, compensados, OSB e opções versáteis para obra, forma, fechamento e uso geral.',
    applications: ['Formas para concreto', 'Fechamentos', 'Tapumes', 'Projetos diversos'],
    imageAlt: 'Chapas e compensados para construção na Madeiras Santos',
  },
  {
    title: 'Portas e Marcos',
    slug: 'portas-e-marcos',
    href: '/produtos/portas-e-marcos',
    description:
      'Portas de madeira, marcos e soluções para acabamento com orientação na escolha do material.',
    applications: ['Portas internas', 'Portas externas', 'Marcos', 'Acabamentos'],
    imageAlt: 'Portas e marcos de madeira disponíveis na Madeiras Santos',
  },
  {
    title: 'Bancos de Madeira Sob Encomenda',
    slug: 'bancos-de-madeira-sob-encomenda',
    href: '/produtos/bancos-de-madeira-sob-encomenda',
    description:
      'Bancos de madeira sob encomenda para jardins, áreas externas, sítios, condomínios e projetos especiais.',
    applications: ['Jardins', 'Áreas externas', 'Sítios e chácaras', 'Condomínios'],
    imageAlt: 'Banco de madeira sob encomenda da Madeiras Santos',
  },
]

const primaryNavLinks = [
  { href: '/', title: 'Início' },
  { href: '/produtos', title: 'Produtos' },
  { href: '/entrega', title: 'Entrega' },
  { href: '/contato', title: 'Contato' },
]

const priorityRoutes = [
  '/',
  '/produtos',
  ...productCategories.map((category) => category.href),
  '/entrega',
  '/contato',
]

module.exports = {
  companyInfo,
  productCategories,
  primaryNavLinks,
  priorityRoutes,
}
