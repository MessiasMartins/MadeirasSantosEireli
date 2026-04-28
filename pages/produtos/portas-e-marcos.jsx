import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function PortasMarcosPage() {
  const category = siteStructure.productCategories.find((item) => item.slug === 'portas-e-marcos')

  return <CategoryPage seo={pageMetadata.portasMarcos} category={category} />
}
