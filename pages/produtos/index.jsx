import Image from 'next/image'
import { ChatBubbleLeftRightIcon, MapPinIcon, TruckIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import ProductCard from '@/components/sections/products/ProductCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { BreadcrumbSEO, ItemListSEO, PageSEO } from '@/components/SEO'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'
import visualAssets from '@/data/config/visualAssets'
import productCategories from '@/data/productCategories'
import { getProductBySlug, products } from '@/data/productCatalog'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

const proofPoints = [
  'Estoque no local',
  'Atendimento rápido',
  'Entrega sob consulta',
  'Atacado e varejo',
]

const faqs = [
  {
    question: 'Vocês vendem no varejo?',
    answerLines: [
      'Sim. A Madeiras Santos atende clientes no varejo e também consultas para volumes maiores, conforme disponibilidade de estoque.',
    ],
  },
  {
    question: 'Posso pedir orçamento pelo WhatsApp?',
    answerLines: [
      'Sim. O WhatsApp é o canal mais rápido para consultar produtos, medidas, disponibilidade e condições de entrega.',
    ],
  },
  {
    question: 'Vocês fazem entrega?',
    answerLines: [
      'A entrega é feita sob consulta, conforme produto, volume, endereço e disponibilidade logística para Belo Horizonte e região.',
    ],
  },
  {
    question: 'Posso retirar o material na loja?',
    answerLines: [
      'Sim. O cliente pode visitar a loja, verificar o material no local e combinar a retirada conforme disponibilidade.',
    ],
  },
]

function getCategoryHref(category) {
  return category.href === '/produtos' ? '/produtos#catalogo-produtos' : category.href
}

export default function Produtos() {
  const seo = pageMetadata.produtos
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
  ]

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogImage={seo.ogImage}
      />
      <BreadcrumbSEO items={breadcrumbs} />
      <ItemListSEO items={products} />

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <Badge>Catálogo Madeiras Santos</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                  Madeiras, telhas, chapas, portas, marcos, ferragens e serviços para obra, reforma
                  e uso geral, com atendimento rápido em Belo Horizonte e região.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(
                      'Olá, gostaria de solicitar orçamento de produtos da Madeiras Santos.'
                    )}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    Solicitar orçamento pelo WhatsApp
                  </Button>
                  <Button
                    href={companyInfo.links.routeMap}
                    icon={MapPinIcon}
                    variant="secondary"
                    external
                  >
                    Ver localização da loja
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={visualAssets.images.stock}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Empilhadeira e estoque físico de produtos na Madeiras Santos"
                  priority
                  className="aspect-[4/3] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2">
                  {proofPoints.map((proofPoint) => (
                    <span
                      key={proofPoint}
                      className="rounded-md bg-white/92 px-3 py-2 text-xs font-black text-brand-graphite shadow-sm backdrop-blur"
                    >
                      {proofPoint}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Categorias"
            title="Encontre a linha certa para sua obra."
            description="Cada categoria reúne produtos próximos para agilizar a consulta de disponibilidade, medidas e uso indicado."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => {
              const featuredProduct = getProductBySlug(category.featuredProductSlug)
              return (
                <Reveal key={category.slug}>
                  <Card
                    as="article"
                    id={`categoria-${category.slug}`}
                    className="h-full overflow-hidden"
                  >
                    {featuredProduct && (
                      <Image
                        src={featuredProduct.image}
                        alt={category.imageAlt}
                        width={1254}
                        height={1254}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    )}
                    <div className="p-5">
                      <h2 className="text-xl font-black text-brand-graphite">{category.name}</h2>
                      <p className="mt-3 text-sm leading-6 text-stone-700">
                        {category.description}
                      </p>
                      <Link
                        href={getCategoryHref(category)}
                        className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-sm font-bold text-brand-graphite transition hover:border-primary-500 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                      >
                        {category.ctaLabel}
                      </Link>
                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section id="catalogo-produtos" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Catálogo"
            title="Produtos em destaque"
            description="Confira as opções do catálogo e solicite atendimento pelo WhatsApp para consultar disponibilidade, medidas e entrega sob consulta."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.slug}>
                <ProductCard product={product} priority={index < 4} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <h2 className="text-2xl font-black text-brand-graphite">
                  Não sabe exatamente qual material escolher?
                </h2>
                <p className="mt-3 text-stone-700">
                  Nossa equipe ajuda você a avaliar o tipo de uso, medidas, disponibilidade e melhor
                  opção para sua obra, reforma ou necessidade específica.
                </p>
                <Button
                  href={getWhatsAppLink(
                    'Olá, preciso de ajuda para escolher materiais para minha obra ou reforma.'
                  )}
                  icon={ChatBubbleLeftRightIcon}
                  className="mt-6"
                >
                  Falar com a equipe
                </Button>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="h-full overflow-hidden">
                <Image
                  src={visualAssets.images.delivery}
                  alt="Empilhadeira com madeiras para entrega sob consulta"
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[5/3] w-full object-cover object-center"
                />
                <div className="p-6 sm:p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                    <TruckIcon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-2xl font-black text-brand-graphite">
                    Entrega sob consulta para facilitar sua compra
                  </h2>
                  <p className="mt-3 text-stone-700">
                    Consulte disponibilidade e condições de entrega para Belo Horizonte e região.
                    Também é possível retirar o material diretamente na loja.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={getWhatsAppLink(
                        'Olá, gostaria de consultar disponibilidade e condições de entrega.'
                      )}
                      icon={ChatBubbleLeftRightIcon}
                    >
                      Consultar entrega pelo WhatsApp
                    </Button>
                    <Button href="/entrega" variant="secondary">
                      Ver informações de entrega
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection faqs={faqs} />
    </>
  )
}
