const companyInfo = require('./companyInfo')
const productCategories = require('../productCategories')

const primaryNavLinks = [
  { href: '/', title: 'Início' },
  { href: '/produtos', title: 'Produtos' },
  { href: '/about', title: 'Sobre' },
  { href: '/entrega', title: 'Entrega' },
  { href: '/contato', title: 'Contato' },
]

const priorityRoutes = [
  '/',
  '/about',
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
