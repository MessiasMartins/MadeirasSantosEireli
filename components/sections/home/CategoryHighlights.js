import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import siteStructure from '@/data/config/siteStructure'
import { getProductBySlug } from '@/data/productCatalog'
import { getOptimizedProductImage } from '@/lib/utils/productImages'

function getCategoryHref(category) {
  return category.href === '/produtos' ? '/produtos#catalogo-produtos' : category.href
}

export default function CategoryHighlights() {
  return (
    <section className="bg-stone-50 py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Linhas principais"
          title="Produtos organizados para compra rápida."
          description="Escolha a categoria, veja as opções principais e fale com a equipe para confirmar estoque, medidas e entrega sob consulta."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteStructure.productCategories.map((category) => {
            const featuredProduct = getProductBySlug(category.featuredProductSlug)
            return (
              <Reveal key={category.slug}>
                <Card as="article" className="h-full overflow-hidden">
                  {featuredProduct && (
                    <Image
                      src={getOptimizedProductImage(featuredProduct)}
                      alt={category.imageAlt}
                      width={900}
                      height={900}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={76}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <Badge>{category.name}</Badge>
                    <h3 className="mt-4 text-xl font-black text-brand-graphite">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-700">{category.description}</p>
                    <Link
                      href={getCategoryHref(category)}
                      className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-md text-sm font-black text-primary-700 transition hover:text-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    >
                      {category.ctaLabel}
                      <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
