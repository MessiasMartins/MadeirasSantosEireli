import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO, BreadcrumbSEO } from '@/components/SEO'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import siteMetadata from '@/data/siteMetadata'
import companyInfo from '@/data/config/companyInfo'
import siteStructure from '@/data/config/siteStructure'

export default function CategoryPage({ seo, category }) {
  const relatedCategories = siteStructure.productCategories.filter((item) => item.slug !== category.slug)
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: category.title, href: category.href },
  ]

  return (
    <>
      <PageSEO title={seo.title} description={seo.description} />
      <BreadcrumbSEO items={breadcrumbs} />

      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-4 md:space-y-5">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            {seo.h1}
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">{category.description}</p>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Aplicações comuns</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                {category.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Como comprar</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Solicite orientação da equipe da {siteMetadata.siteName} para definir medidas,
                disponibilidade e melhor solução para a sua obra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Entrega sob consulta</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Entrega para Belo Horizonte e região metropolitana sob consulta de rota, volume e prazo.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src="/static/images/wood.jpg"
              width={900}
              height={600}
              alt={category.imageAlt}
              className="h-auto w-full rounded-xl border border-gray-200 object-cover dark:border-gray-700"
            />
            <a
              href={companyInfo.links.whatsapp}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
            <Link
              href="/produtos"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ver todos os produtos
            </Link>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Produtos relacionados</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedCategories.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-gray-200 px-4 py-3 text-gray-700 hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:text-primary-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
