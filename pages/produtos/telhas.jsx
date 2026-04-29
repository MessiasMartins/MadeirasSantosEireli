import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function TelhasPage() {
  const category = siteStructure.productCategories.find((item) => item.slug === 'telhas')

  return <CategoryPage seo={pageMetadata.telhas} category={category} />
}
