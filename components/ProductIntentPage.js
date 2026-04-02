import { PageSEO } from '@/components/SEO'
import FAQSection from '@/components/FAQSection'
import siteMetadata from '@/data/siteMetadata'
import Head from 'next/head'
import { sharedCities, sharedHours } from '@/data/productLandingData'
import Link from '@/components/Link'

const ProductIntentPage = ({
  title,
  description,
  h1,
  subtitle,
  whenTitle,
  whenText,
  usesTitle,
  usesText,
  budgetText,
  ctaLabel,
  faq,
  path,
  related = [],
}) => {
  const canonical = `${siteMetadata.siteUrl}${path}`

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: `${siteMetadata.siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Produtos',
        item: `${siteMetadata.siteUrl}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: h1,
        item: canonical,
      },
    ],
  }

  return (
    <>
      <PageSEO title={title} description={description} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <section className="rounded-2xl bg-emerald-50 p-6 dark:bg-gray-800/70">
        <p className="text-sm font-semibold text-primary-600">Linha de produto</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {h1}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
          {subtitle}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            {ctaLabel}
          </a>
          <Link
            href="/products"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-yellow-100"
          >
            Voltar para produtos
          </Link>
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            {whenTitle}
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{whenText}</p>
        </div>
        <div className="pt-6 space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            {usesTitle}
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{usesText}</p>
        </div>
        <div className="pt-6 space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            O que informar no orçamento
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{budgetText}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Produtos relacionados
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl bg-green-600 p-4 text-white transition-colors duration-200 hover:bg-green-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            Atendimento em Belo Horizonte e região metropolitana
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Atendemos clientes em Belo Horizonte, Contagem, Betim, Nova Lima, Vespasiano, Lagoa
            Santa, Santa Luzia, Sabará, Ribeirão das Neves, Pedro Leopoldo e outras cidades da
            região.
          </p>
          <ul className="flex flex-wrap gap-2 pt-1 text-sm">
            {sharedCities.map((city) => (
              <li key={city} className="rounded-full bg-green-600 px-3 py-1.5 text-white">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Horário de funcionamento
        </h2>
        <ul className="mt-3 space-y-1 text-base text-gray-700 dark:text-gray-300">
          {sharedHours.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-yellow-100"
          >
            Ver localização
          </a>
        </div>
      </section>

      <FAQSection
        faqs={faq}
        title="Dúvidas frequentes sobre produtos e atendimento"
        description="Respostas diretas para agilizar seu orçamento e melhorar sua decisão de compra."
      />
    </>
  )
}

export default ProductIntentPage
