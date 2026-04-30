const companyInfo = require('./config/companyInfo')
const pageMetadata = require('./config/pageMetadata')
const visualAssets = require('./config/visualAssets')

const siteMetadata = {
  title: pageMetadata.home.title,
  author: companyInfo.brandName,
  headerTitle: companyInfo.brandName,
  description: pageMetadata.home.description,
  language: 'pt-BR',
  siteUrl: 'https://www.madeirassantos.com.br',
  siteRepo: '#',
  siteLogo: visualAssets.brand.logoHorizontal,
  siteSymbol: visualAssets.brand.symbol,
  siteName: companyInfo.brandName,
  image: visualAssets.seo.searchSquare,
  socialBanner: visualAssets.seo.socialBanner,
  otherTitle: 'Madeiras Santos. Qualidade e Tradição',
  email: companyInfo.contact.email,
  instagram: companyInfo.links.instagram,
  // Backward compatibility for existing component imports
  instgram: companyInfo.links.instagram,
  whatsapp: companyInfo.links.whatsapp,
  google: companyInfo.links.googleBusiness,
  locale: 'pt-BR',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    googleAnalyticsId: 'G-68R4LB4DQ6',
  },
}

module.exports = siteMetadata
