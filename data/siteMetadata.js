const companyInfo = require('./config/companyInfo')
const pageMetadata = require('./config/pageMetadata')

const siteMetadata = {
  title: pageMetadata.home.title,
  author: 'Audere',
  headerTitle: companyInfo.brandName,
  description: pageMetadata.home.description,
  language: 'pt-BR',
  siteUrl: 'https://www.madeirassantos.com.br',
  siteRepo: '#',
  siteLogo: '/static/images/logo_google2.png',
  siteName: companyInfo.brandName,
  image: '/static/images/logo_google2.png',
  socialBanner: '/static/images/L-1.png',
  otherTitle: 'Madeiras Santos. Qualidade, Preço e Tradição',
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
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
