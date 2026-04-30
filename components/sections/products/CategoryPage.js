import Image from '@/components/Image'
import Link from '@/components/Link'
import ProductCard from '@/components/sections/products/ProductCard'
import { BreadcrumbSEO, ItemListSEO, PageSEO } from '@/components/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import siteStructure from '@/data/config/siteStructure'
import visualAssets from '@/data/config/visualAssets'
import { getProductBySlug, getProductsByCategory } from '@/data/productCatalog'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function CategoryPage({ seo, category }) {
  const categoryProducts = getProductsByCategory(category.slug)
  const featuredProduct =
    getProductBySlug(category.featuredProductSlug) || categoryProducts[0] || null
  const relatedCategories = siteStructure.productCategories.filter(
    (item) => item.slug !== category.slug
  )
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: seo.h1, href: category.href },
  ]

  return (
    <>
      <PageSEO title={seo.title} description={seo.description} ogImage={featuredProduct?.image} />
      <BreadcrumbSEO items={breadcrumbs} />
      <ItemListSEO items={categoryProducts} itemListId={category.href} />

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <Badge>{category.name}</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 text-lg leading-8 text-stone-700">{category.seoDescription}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(`Olá, gostaria de consultar ${category.name}.`)}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    {category.ctaLabel}
                  </Button>
                  <Button href="/produtos" variant="secondary">
                    Ver todos os produtos
                  </Button>
                </div>
              </div>
            </Reveal>

            {featuredProduct && (
              <Reveal>
                <Image
                  src={featuredProduct.image}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt={featuredProduct.imageAlt}
                  priority
                  className="aspect-[4/3] w-full rounded-lg object-cover shadow-md shadow-stone-900/10"
                />
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-black text-brand-graphite">Aplicações comuns</h2>
                  <ul className="mt-5 space-y-3 text-stone-700">
                    {category.applications.map((application) => (
                      <li key={application} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600"
                        />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src={visualAssets.images.yard}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    alt="Pátio da Madeiras Santos com estoque físico"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-black text-brand-graphite">Como comprar</h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      Fale com a equipe para consultar medidas, disponibilidade, retirada na loja e
                      entrega sob consulta.
                    </p>
                    <Button
                      href={getWhatsAppLink(
                        `Olá, gostaria de falar com a equipe sobre ${category.name}.`
                      )}
                      icon={ChatBubbleLeftRightIcon}
                      className="mt-5"
                    >
                      Falar com a equipe
                    </Button>
                  </div>
                </Card>
              </div>
            </Reveal>

            <div>
              <SectionHeader
                eyebrow="Produtos da categoria"
                title={`Opções de ${category.name}`}
                description="Consulte disponibilidade pelo WhatsApp e receba orientação da equipe."
              />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {categoryProducts.map((product, index) => (
                  <Reveal key={product.slug}>
                    <ProductCard product={product} priority={index === 0} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Outras linhas"
            title="Continue navegando pelo catálogo."
            description="Veja outras categorias ou volte para o hub de produtos."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCategories.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href === '/produtos' ? '/produtos#catalogo-produtos' : item.href}
                  className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-black text-brand-graphite transition hover:border-primary-300 hover:bg-emerald-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
