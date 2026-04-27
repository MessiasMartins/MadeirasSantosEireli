import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function MadeiraParaTelhadoPage() {
  return (
    <CategoryPage seo={pageMetadata.madeiraTelhado} category={siteStructure.productCategories[1]} />
  )
}
