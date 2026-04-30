import ProductCard from '@/components/sections/products/ProductCard'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { getProductBySlug } from '@/data/productCatalog'

const featuredProductSlugs = [
  'compensado-plastificado',
  'compensado-resinado',
  'osb',
  'ripas',
  'caibros',
  'telha-portuguesa',
  'porta-interna',
  'bancos-de-madeira-sob-encomenda',
]

export default function FeaturedProducts() {
  const featuredProducts = featuredProductSlugs.map(getProductBySlug).filter(Boolean)

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Produtos em destaque"
          title="O essencial para obra, reforma e acabamento."
          description="Produtos do catálogo comercial com consulta rápida pelo WhatsApp e atendimento direto da equipe."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.slug}>
              <ProductCard product={product} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
