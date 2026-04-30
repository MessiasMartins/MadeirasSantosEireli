import Head from 'next/head'
import { PageSEO } from '@/components/SEO'
import pageMetadata from '@/data/config/pageMetadata'
import faqData from '@/data/faqData'
import FAQSection from '@/components/FAQSection'
import HeroSection from '@/components/sections/home/HeroSection'
import ContactSection from '@/components/sections/home/ContactSection'
import CategoryHighlights from '@/components/sections/home/CategoryHighlights'
import DeliverySection from '@/components/sections/home/DeliverySection'
import FeaturedProducts from '@/components/sections/home/FeaturedProducts'
import visualAssets from '@/data/config/visualAssets'
import { getHomeStructuredData } from '@/lib/homeStructuredData'

export default function Home() {
  const mapsEmbedSrc = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Avenida+Portugal+901A,+Santa+Am%C3%A9lia,+Belo+Horizonte,+MG,+Brasil`
    : 'https://maps.google.com/maps?width=100%25&height=400&hl=pt-BR&q=Avenida%20Portugal%20901A%20Santa%20Am%C3%A9lia%20Belo%20Horizonte%20MG&t=&z=15&ie=UTF8&iwloc=B&output=embed'

  const structuredDataList = getHomeStructuredData()

  return (
    <>
      <PageSEO title={pageMetadata.home.title} description={pageMetadata.home.description} />
      <Head>
        <link rel="preload" as="image" href={visualAssets.images.hero} />
        {structuredDataList.map((item) => (
          <script
            key={item['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </Head>

      <HeroSection />
      <CategoryHighlights />
      <FeaturedProducts />
      <DeliverySection />
      <ContactSection mapsEmbedSrc={mapsEmbedSrc} />
      <FAQSection faqs={faqData} />
    </>
  )
}
