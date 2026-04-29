import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function ChapasCompensadosPage() {
  const category = siteStructure.productCategories.find(
    (item) => item.slug === 'chapas-e-compensados'
  )

  return <CategoryPage seo={pageMetadata.chapasCompensados} category={category} />
}
