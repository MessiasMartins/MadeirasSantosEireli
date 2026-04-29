import Image from '@/components/Image'
import Link from '@/components/Link'
import ProductCard from '@/components/sections/products/ProductCard'
import { BreadcrumbSEO, ItemListSEO, PageSEO } from '@/components/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import siteStructure from '@/data/config/siteStructure'
import { getProductBySlug, getProductsByCategory } from '@/data/productCatalog'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

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

      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                {category.name}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                {seo.h1}
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
                {category.seoDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppLink(`Olá, gostaria de consultar ${category.name}.`)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  {category.ctaLabel}
                </a>
                <Link
                  href="/produtos"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
                >
                  Ver todos os produtos
                </Link>
              </div>
            </div>

            {featuredProduct && (
              <Image
                src={featuredProduct.image}
                width={1254}
                height={1254}
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt={featuredProduct.imageAlt}
                priority
                className="h-auto w-full rounded-lg border border-gray-200 object-cover dark:border-gray-700"
              />
            )}
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Aplicações comuns
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              {category.applications.map((application) => (
                <li key={application} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Como comprar</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Fale com a equipe para consultar medidas, disponibilidade, retirada na loja e
                entrega sob consulta.
              </p>
              <a
                href={getWhatsAppLink(
                  `Olá, gostaria de falar com a equipe sobre ${category.name}.`
                )}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
              >
                Falar com a equipe
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Produtos desta categoria
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {categoryProducts.map((product, index) => (
                <ProductCard key={product.slug} product={product} priority={index === 0} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Outras categorias</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedCategories.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href === '/produtos' ? '/produtos#catalogo-produtos' : item.href}
                  className="block rounded-lg border border-gray-200 px-4 py-3 text-gray-700 hover:border-primary-500 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-300 dark:hover:text-primary-300 dark:focus-visible:ring-offset-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
