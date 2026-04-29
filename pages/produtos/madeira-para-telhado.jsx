import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function MadeiraParaTelhadoPage() {
  const category = siteStructure.productCategories.find(
    (item) => item.slug === 'madeira-para-telhado'
  )

  return <CategoryPage seo={pageMetadata.madeiraTelhado} category={category} />
}
