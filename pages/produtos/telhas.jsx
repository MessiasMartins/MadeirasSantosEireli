import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function TelhasPage() {
  return <CategoryPage seo={pageMetadata.telhas} category={siteStructure.productCategories[0]} />
}
