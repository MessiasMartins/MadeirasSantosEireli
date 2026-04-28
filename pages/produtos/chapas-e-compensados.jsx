import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function ChapasCompensadosPage() {
  return (
    <CategoryPage
      seo={pageMetadata.chapasCompensados}
      category={siteStructure.productCategories[2]}
    />
  )
}
