import Link from '@/components/Link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductCard from '@/components/sections/products/ProductCard'
import { BreadcrumbSEO, ItemListSEO, PageSEO } from '@/components/SEO'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'
import productCategories from '@/data/productCategories'
import { products } from '@/data/productCatalog'
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
    answer:
      'Sim. A Madeiras Santos atende clientes no varejo e também consultas para volumes maiores, conforme disponibilidade de estoque.',
  },
  {
    question: 'Posso pedir orçamento pelo WhatsApp?',
    answer:
      'Sim. O WhatsApp é o canal mais rápido para consultar produtos, medidas, disponibilidade e condições de entrega.',
  },
  {
    question: 'Vocês fazem entrega?',
    answer:
      'A entrega é feita sob consulta, conforme produto, volume, endereço e disponibilidade logística para Belo Horizonte e região.',
  },
  {
    question: 'Posso retirar o material na loja?',
    answer:
      'Sim. O cliente pode visitar a loja, verificar o material no local e combinar a retirada conforme disponibilidade.',
  },
  {
    question: 'Vocês trabalham com produtos sob encomenda?',
    answer:
      'Sim. Alguns serviços e produtos, como corte sob medida e bancos de madeira, são realizados sob consulta de viabilidade, medidas e disponibilidade.',
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

      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                Catálogo Madeiras Santos
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
                {seo.h1}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-300">
                Madeiras, telhas, chapas, portas, marcos, ferragens e serviços para obra, reforma e
                uso geral, com atendimento rápido em Belo Horizonte e região.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppLink(
                    'Olá, gostaria de solicitar orçamento de produtos da Madeiras Santos.'
                  )}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  Solicitar orçamento pelo WhatsApp
                </a>
                <a
                  href={companyInfo.links.routeMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
                >
                  Ver localização da loja
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3">
              {proofPoints.map((proofPoint) => (
                <li
                  key={proofPoint}
                  className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                >
                  {proofPoint}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Categorias de produtos
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Consulte as principais linhas do catálogo e fale com a equipe para confirmar medidas,
              disponibilidade e melhor opção para sua necessidade.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <article
                key={category.slug}
                id={`categoria-${category.slug}`}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
                <Link
                  href={getCategoryHref(category)}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
                >
                  {category.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div id="catalogo-produtos" className="scroll-mt-24 py-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Produtos em destaque
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Confira as opções do catálogo e solicite atendimento pelo WhatsApp para consultar
              disponibilidade, medidas e entrega sob consulta.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 3} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 py-10 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Não sabe exatamente qual material escolher?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Nossa equipe ajuda você a avaliar o tipo de uso, medidas, disponibilidade e melhor
              opção para sua obra, reforma ou necessidade específica.
            </p>
            <a
              href={getWhatsAppLink(
                'Olá, preciso de ajuda para escolher materiais para minha obra ou reforma.'
              )}
              className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            >
              Falar com a equipe
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Entrega sob consulta para facilitar sua compra
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Consulte disponibilidade e condições de entrega para Belo Horizonte e região. Também é
              possível retirar o material diretamente na loja.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppLink(
                  'Olá, gostaria de consultar disponibilidade e condições de entrega.'
                )}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
              >
                Consultar entrega pelo WhatsApp
              </a>
              <Link
                href="/entrega"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
              >
                Ver informações de entrega
              </Link>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Perguntas frequentes
          </h2>
          <dl className="mt-5 grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <dt className="font-semibold text-gray-900 dark:text-gray-100">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
