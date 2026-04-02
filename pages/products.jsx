import { PageSEO } from '@/components/SEO'
import FAQSection from '@/components/FAQSection'
import siteMetadata from '@/data/siteMetadata'
import Head from 'next/head'
import { productFaq, sharedCities, sharedHours } from '@/data/productLandingData'

const intentCards = [
  {
    title: 'Compensado plastificado em Belo Horizonte',
    description: 'Aplicações que exigem resistência, durabilidade e melhor acabamento.',
    href: '/products/compensado-plastificado-belo-horizonte',
    cta: 'Ver compensado plastificado em Belo Horizonte',
  },
  {
    title: 'Compensado resinado em Belo Horizonte',
    description: 'Boa opção para diferentes usos na obra com ótimo custo-benefício.',
    href: '/products/compensado-resinado-belo-horizonte',
    cta: 'Ver compensado resinado em Belo Horizonte',
  },
  {
    title: 'OSB em Belo Horizonte',
    description: 'Solução prática para fechamentos, divisórias, tapumes e outras aplicações.',
    href: '/products/osb-belo-horizonte',
    cta: 'Consultar OSB em Belo Horizonte',
  },
  {
    title: 'Madeira para telhado em Belo Horizonte',
    description: 'Peças para estrutura com atendimento mais direto na escolha do material.',
    href: '/products/madeira-para-telhado-belo-horizonte',
    cta: 'Ver madeira para telhado em Belo Horizonte',
  },
  {
    title: 'Portas de madeira em Belo Horizonte',
    description: 'Opções para quem busca praticidade, qualidade e atendimento objetivo.',
    href: '/products/portas-de-madeira-belo-horizonte',
    cta: 'Solicitar orçamento de portas de madeira',
  },
]

const complementary = [
  {
    title: 'Madeiras em geral',
    description:
      'Peças para diferentes necessidades de obra e estrutura, conforme disponibilidade e aplicação.',
  },
  {
    title: 'Marcos e rodapés',
    description: 'Opções para complementar portas e acabamentos com mais praticidade.',
  },
  {
    title: 'Telhas',
    description:
      'Itens para cobertura e necessidades relacionadas ao telhado, conforme disponibilidade.',
  },
  {
    title: 'Deck de madeira',
    description: 'Soluções para áreas internas e externas com foco em estética e funcionalidade.',
  },
  {
    title: 'Ferragens e itens complementares',
    description: 'Produtos complementares para apoiar o andamento do projeto e da instalação.',
  },
]

const quoteSteps = [
  {
    title: 'Envie sua necessidade',
    description: 'Fale pelo WhatsApp e informe os materiais que precisa.',
  },
  {
    title: 'Receba orientação',
    description: 'A equipe ajuda a esclarecer dúvidas e orientar a compra.',
  },
  {
    title: 'Avance com mais rapidez',
    description:
      'Você recebe retorno para seguir com retirada ou entrega, conforme disponibilidade.',
  },
]

export default function ProductsHubPage() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteMetadata.siteUrl}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Produtos',
        item: `${siteMetadata.siteUrl}/products`,
      },
    ],
  }

  const collectionData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Produtos para obras, reformas e marcenaria em Belo Horizonte e região metropolitana',
    url: `${siteMetadata.siteUrl}/products`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: intentCards.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${siteMetadata.siteUrl}${item.href}`,
      })),
    },
  }

  return (
    <>
      <PageSEO
        title="Produtos para obras, reformas e marcenaria em Belo Horizonte e região metropolitana"
        description="Conheça compensado plastificado, compensado resinado, OSB, madeira para telhado e portas de madeira com atendimento local e orçamento pelo WhatsApp."
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }}
        />
      </Head>

      <section className="rounded-2xl bg-emerald-50 p-6 dark:bg-gray-800/70">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Produtos para obras, reformas e marcenaria em Belo Horizonte e região metropolitana
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
          Conheça as principais linhas da Madeiras Santos e encontre com mais rapidez o material
          certo para sua necessidade, com atendimento direto pelo WhatsApp.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            Solicitar orçamento no WhatsApp
          </a>
          <a
            href="#atendimento"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-yellow-100"
          >
            Ver localização
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Atendimento em Belo Horizonte e região metropolitana • Segunda a sexta: 8h às 17h30 •
          Sábado: 8h às 12h
        </p>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Encontre com mais rapidez o que você procura
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Selecionamos as linhas mais buscadas para facilitar seu orçamento e tornar a navegação
            mais objetiva.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {intentCards.map((card) => (
            <article key={card.title} className="rounded-xl bg-green-600 p-5 text-white">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/95">{card.description}</p>
              <a
                href={card.href}
                className="mt-4 inline-flex min-h-[44px] items-center rounded-md border border-white/40 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Outras linhas e itens complementares
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {complementary.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="atendimento" className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Atendimento em Belo Horizonte e região metropolitana
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Atendemos clientes em Belo Horizonte e também em cidades da região metropolitana, com
            foco em agilidade no orçamento, clareza comercial e apoio no processo de compra.
          </p>
          <ul className="flex flex-wrap gap-2 pt-1 text-sm">
            {sharedCities.map((city) => (
              <li key={city} className="rounded-full bg-green-600 px-3 py-1.5 text-white">
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-5">
          <a
            href={siteMetadata.whatsapp}
            className="inline-flex min-h-[48px] items-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Horário de funcionamento
          </h2>
        </div>
        <ul className="space-y-1 pt-5 text-base text-gray-700 dark:text-gray-300">
          {sharedHours.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Como solicitar seu orçamento
          </h2>
        </div>
        <ol className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-3">
          {quoteSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm font-semibold text-primary-600">{index + 1}.</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <FAQSection
        faqs={productFaq}
        title="Dúvidas frequentes sobre produtos e atendimento"
        description="Respostas diretas para apoiar sua decisão de compra e agilizar o orçamento."
      />
    </>
  )
}
