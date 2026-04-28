import Link from '@/components/Link'
import Image from '@/components/Image'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO } from '@/components/SEO'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

export default function Produtos() {
  const seo = pageMetadata.produtos
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
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
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">{seo.description}</p>
        </div>

        <div className="py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteStructure.productCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="rounded-xl border border-gray-200 p-4 transition hover:border-primary-500 dark:border-gray-700"
              >
                <Image
                  src="/static/images/wood.jpg"
                  width={600}
                  height={350}
                  alt={category.imageAlt}
                  className="mb-3 h-40 w-full rounded-md object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
