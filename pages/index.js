import Image from 'next/image'
import Head from 'next/head'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

const categories = [
  {
    title: 'Telhas',
    description: 'Modelos para diferentes tipos de cobertura.',
    href: '/products/telhas-em-belo-horizonte',
  },
  {
    title: 'Tábuas',
    description: 'Madeiras para diversas aplicações e necessidades.',
    href: '/products',
  },
  {
    title: 'Madeira para Telhado',
    description: 'Estrutura, resistência e apoio para sua cobertura.',
    href: '/products/madeira-para-telhado-belo-horizonte',
  },
  {
    title: 'Chapas e Compensados',
    description: 'Opções versáteis para obra, forma e fechamento.',
    href: '/products/compensado-plastificado-belo-horizonte',
  },
  {
    title: 'Portas',
    description: 'Portas de madeira para diferentes ambientes.',
    href: '/products/portas-de-madeira-belo-horizonte',
  },
  {
    title: 'Marcos',
    description: 'Modelos variados para compor seu projeto.',
    href: '/products',
  },
]

const trustPillars = [
  'Veja o material no local',
  'Atendimento rápido no WhatsApp',
  'Entrega sob consulta',
  'Fácil acesso em Belo Horizonte',
]

const steps = [
  'Chame no WhatsApp ou visite a loja',
  'Confirme o material e as medidas',
  'Retire no local ou solicite entrega',
]

export default function Home() {
  const mapsEmbedSrc = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Avenida+Portugal+901A,+Santa+Am%C3%A9lia,+Belo+Horizonte,+MG,+Brasil`
    : 'https://maps.google.com/maps?width=100%25&height=400&hl=pt-BR&q=Avenida%20Portugal%20901A%20Santa%20Am%C3%A9lia%20Belo%20Horizonte%20MG&t=&z=15&ie=UTF8&iwloc=B&output=embed'

  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Madeiras Santos',
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}/static/images/wood.jpg`,
    telephone: '+55 31 3653-2390',
    email: siteMetadata.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Portugal 901A - Santa Amélia',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '31550-000',
      addressCountry: 'BR',
    },
    areaServed: 'Belo Horizonte e região metropolitana',
    sameAs: [siteMetadata.instgram, siteMetadata.google],
  }

  return (
    <>
      <PageSEO
        title="Madeiras Santos | Madeireira em Belo Horizonte e região"
        description="Telhas, tábuas, madeira para telhado, chapas, portas e marcos com atendimento rápido, estoque no local e entrega sob consulta em Belo Horizonte e região."
        ogTitle="Madeiras Santos | Estoque no local e atendimento rápido"
        ogDescription="Solicite orçamento no WhatsApp, visite a loja e consulte entrega para Belo Horizonte e região metropolitana."
      />
      <Head>
        <link rel="preload" as="image" href="/static/images/wood.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
      </Head>

      <section className="relative overflow-hidden rounded-2xl" aria-labelledby="hero-title">
        <Image
          src="/static/images/wood.jpg"
          alt="Pátio com telhas, chapas e pilhas de madeira disponíveis no estoque da Madeiras Santos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/65" />
        <div className="relative z-10 px-5 py-14 sm:px-8 sm:py-20">
          <h1
            id="hero-title"
            className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
          >
            Madeiras, telhas, chapas, portas e marcos com atendimento rápido em Belo Horizonte e
            região.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/95 sm:text-lg">
            Estoque no local, orientação na escolha do material e entrega sob consulta para obra,
            reforma e atendimento no varejo.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:max-w-2xl sm:grid-cols-3">
            <a
              href={siteMetadata.whatsapp}
              className="min-h-[48px] rounded-md bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 motion-reduce:transform-none motion-reduce:transition-none"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#visite-a-loja"
              className="min-h-[48px] rounded-md border border-white/60 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
            >
              Visitar a loja
            </a>
            <a
              href="tel:+553136532390"
              className="min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-5 py-3 text-center text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-yellow-100"
            >
              Ligar agora
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-xs font-medium sm:max-w-3xl sm:grid-cols-4 sm:text-sm">
            {['Estoque no local', 'Entrega ágil', 'Atacado e varejo', 'Mais de 35 anos de experiência'].map(
              (item) => (
                <li key={item} className="rounded-full bg-white/15 px-3 py-2 text-center text-white">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="pt-10">
        <div className="mb-5 space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Categorias principais
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Escolha a categoria e solicite atendimento rápido pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-emerald-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md motion-reduce:transform-none"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-md bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-100"
              >
                Solicitar pelo WhatsApp
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Diferenciais</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div key={pillar} className="rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-gray-800">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Como comprar</h2>
        <ol className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-3xl font-extrabold text-emerald-600">{index + 1}</p>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-10">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="relative min-h-[280px]">
            <Image
              src="/static/images/audere21.png"
              alt="Empilhadeira carregando madeira para apoiar entrega e logística"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/55" />
            <div className="relative z-10 p-6 sm:p-8">
              <h2 className="text-3xl font-extrabold text-white">Entrega ágil para facilitar sua obra.</h2>
              <p className="mt-3 max-w-2xl text-base text-white/95">
                Consulte disponibilidade e condições para entrega em Belo Horizonte e região.
              </p>
              <a
                href={siteMetadata.whatsapp}
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="visite-a-loja" className="pt-10">
        <div className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 lg:grid-cols-2">
          <div className="relative min-h-[260px] overflow-hidden rounded-xl">
            <Image
              src="/static/images/audere23.png"
              alt="Fachada da Madeiras Santos para visitação presencial"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Visite a loja</h2>
            <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
              Prefere ver o material de perto? Visite a Madeiras Santos e conte com atendimento
              direto no local.
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Avenida Portugal, 901A - Santa Amélia, Belo Horizonte - MG
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteMetadata.google}
                className="min-h-[44px] rounded-md border border-yellow-200 bg-yellow-50 px-5 py-2 text-center text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-yellow-100"
              >
                Traçar rota no mapa
              </a>
              <a
                href={siteMetadata.whatsapp}
                className="min-h-[44px] rounded-md bg-green-600 px-5 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="rounded-2xl border border-gray-200 bg-emerald-50 p-6 dark:border-gray-700 dark:bg-gray-800/70">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
            Confiança de quem compra no dia a dia
          </h2>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Estrutura pronta para exibir avaliações reais do Google e depoimentos de clientes.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {['Bom atendimento', 'Preço justo', 'Cordialidade', 'Satisfação com o produto'].map(
              (topic) => (
                <article key={topic} className="rounded-xl border border-emerald-200 bg-white p-4 text-sm">
                  <p className="font-semibold text-gray-900">{topic}</p>
                  <p className="mt-2 text-gray-600">Bloco preparado para avaliações reais.</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Onde estamos</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <iframe
              title="Mapa da Madeiras Santos"
              src={mapsEmbedSrc}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <a
        href={siteMetadata.whatsapp}
        className="fixed bottom-4 right-4 z-40 inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-5 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-green-700 sm:hidden"
      >
        WhatsApp
      </a>
    </>
  )
}
