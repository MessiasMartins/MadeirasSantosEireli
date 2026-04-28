import CategoryPage from '@/components/sections/products/CategoryPage'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function BancosSobEncomendaPage() {
  const category = siteStructure.productCategories.find(
    (item) => item.slug === 'servicos-e-sob-encomenda'
  )

  return <CategoryPage seo={pageMetadata.bancosSobEncomenda} category={category} />
}
