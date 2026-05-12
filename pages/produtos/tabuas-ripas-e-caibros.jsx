import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function TabuasRipasCaibrosPage() {
  const category = siteStructure.productCategories.find(
    (item) => item.slug === 'tabuas-ripas-e-caibros'
  )

  return <CategoryPage seo={pageMetadata.tabuasRipasCaibros} category={category} />
}
