import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function BancosSobEncomendaPage() {
  return (
    <CategoryPage
      seo={pageMetadata.bancosSobEncomenda}
      category={siteStructure.productCategories[4]}
    />
  )
}
