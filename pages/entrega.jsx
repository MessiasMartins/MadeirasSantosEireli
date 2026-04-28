import Link from '@/components/Link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO } from '@/components/SEO'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'

export default function EntregaPage() {
  const seo = pageMetadata.entrega
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Entrega', href: '/entrega' },
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

        <div className="py-10 space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Como funciona</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Atendemos Belo Horizonte e região metropolitana sob consulta.</li>
            <li>Prazo e custo variam conforme volume, distância e tipo de produto.</li>
            <li>Para pedidos maiores, nossa equipe orienta o melhor agendamento.</li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={companyInfo.links.whatsapp}
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700"
            >
              Solicitar entrega pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Ver contato e localização
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
