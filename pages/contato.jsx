import Link from '@/components/Link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO } from '@/components/SEO'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'

export default function ContatoPage() {
  const seo = pageMetadata.contato
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Contato e Localização', href: '/contato' },
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

        <div className="py-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Endereço:</strong> {companyInfo.address.full}
            </p>
            <p>
              <strong>CEP:</strong> {companyInfo.address.postalCode}
            </p>
            <p>
              <strong>Telefone:</strong> {companyInfo.contact.phoneDisplay}
            </p>
            <p>
              <strong>E-mail:</strong> {companyInfo.contact.email}
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={companyInfo.links.whatsapp}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700"
            >
              Falar no WhatsApp
            </a>
            <a
              href={companyInfo.contact.phoneHref}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ligar para a loja
            </a>
            <a
              href={companyInfo.links.routeMap}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ver rota no mapa
            </a>
            <Link
              href="/produtos"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ver linhas de produtos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
