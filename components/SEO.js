import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  ogTitle = title,
  ogDescription = description,
}) => {
  const router = useRouter()
  const canonicalUrl = `${siteMetadata.siteUrl}${router.asPath}`.split('?')[0]
  const images = Array.isArray(ogImage) ? ogImage : [ogImage]

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="author" content={siteMetadata.author} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:author" content={siteMetadata.author} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:title" content={ogTitle} />
      {images.map((image) => {
        const imageUrl = typeof image === 'string' ? image : image.url
        return <meta property="og:image" content={imageUrl} key={imageUrl} />
      })}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitter && <meta name="twitter:site" content={siteMetadata.twitter} />}
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={twImage} />
    </Head>
  )
}

export const PageSEO = ({ title, description, ogTitle, ogDescription, ogImage }) => {
  const selectedImage = ogImage || siteMetadata.socialBanner
  const ogImageUrl = selectedImage.startsWith('http')
    ? selectedImage
    : siteMetadata.siteUrl + selectedImage
  const twImageUrl = ogImageUrl

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

export const BreadcrumbSEO = ({ items = [] }) => {
  if (items.length === 0) return null

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteMetadata.siteUrl}${item.href === '/' ? '/' : item.href}`,
    })),
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  )
}

export const ItemListSEO = ({ items = [], itemListId = '/produtos' }) => {
  if (items.length === 0) return null

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteMetadata.siteUrl}${itemListId}#itemlist`,
    name: 'Catálogo de produtos Madeiras Santos',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteMetadata.siteUrl}${itemListId}#produto-${item.slug}`,
      name: item.name,
      description: item.seoDescription,
    })),
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  )
}
