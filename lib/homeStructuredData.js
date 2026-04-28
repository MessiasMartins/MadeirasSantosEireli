import siteMetadata from '@/data/siteMetadata'
import faqData from '@/data/faqData'
import companyInfo from '@/data/config/companyInfo'

export function getHomeStructuredData() {
  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: companyInfo.brandName,
    url: `${siteMetadata.siteUrl}/`,
    image: `${siteMetadata.siteUrl}/static/images/wood.jpg`,
    logo: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    telephone: companyInfo.contact.phoneRaw,
    email: companyInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.country,
    },
    openingHoursSpecification: companyInfo.openingHoursSpecification,
    areaServed: ['Belo Horizonte', 'Região Metropolitana de Belo Horizonte'],
    sameAs: [companyInfo.links.instagram, companyInfo.links.googleBusiness],
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answerLines.join(' '),
      },
    })),
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyInfo.brandName,
    alternateName: 'Madeireira Madeiras Santos',
    url: `${siteMetadata.siteUrl}/`,
  }

  const siteNavigationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Início',
        url: `${siteMetadata.siteUrl}/`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Produtos',
        url: `${siteMetadata.siteUrl}/produtos`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Entrega',
        url: `${siteMetadata.siteUrl}/entrega`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Contato e Localização',
        url: `${siteMetadata.siteUrl}/contato`,
      },
    ],
  }

  return [
    localBusinessStructuredData,
    faqStructuredData,
    websiteStructuredData,
    siteNavigationStructuredData,
  ]
}
