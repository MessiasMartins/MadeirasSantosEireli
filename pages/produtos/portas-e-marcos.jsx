import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function PortasMarcosPage() {
  return <CategoryPage seo={pageMetadata.portasMarcos} category={siteStructure.productCategories[3]} />
}
