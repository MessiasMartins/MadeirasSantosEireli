const companyInfo = require('./companyInfo')
const productCategories = require('../productCategories')

const primaryNavLinks = [
  { href: '/', title: 'Início' },
  { href: '/produtos', title: 'Produtos' },
  { href: '/about', title: 'Sobre' },
  { href: '/entrega', title: 'Entrega' },
  { href: '/contato', title: 'Contato' },
]

const productDetailRoutes = [
  '/produtos/compensado-plastificado',
  '/produtos/compensado-resinado',
  '/produtos/tabuas-de-pinus',
  '/produtos/caibros-pinus-eucalipto',
]

const priorityRoutes = [
  '/',
  '/about',
  '/produtos',
  ...productCategories.map((category) => category.href),
  ...productDetailRoutes,
  '/entrega',
  '/contato',
]

module.exports = {
  companyInfo,
  productCategories,
  productDetailRoutes,
  primaryNavLinks,
  priorityRoutes,
}
