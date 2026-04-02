import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Head from 'next/head'
import Link from '@/components/Link'

const primaryIntentCards = [
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

const secondaryIntentCards = [
  {
    title: 'Telhas em geral em Belo Horizonte',
    description: 'Atendimento para demandas de cobertura e itens relacionados ao telhado.',
    href: '/products/telhas-em-belo-horizonte',
    cta: 'Ver telhas em Belo Horizonte',
  },
  {
    title: 'Corte de madeira sob encomenda em Belo Horizonte',
    description: 'Serviço sob consulta para pedidos que exigem adequação de medidas.',
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    cta: 'Consultar corte de madeira sob encomenda',
  },
  {
    title: 'Lenha para lareira e churrasco em Belo Horizonte',
    description: 'Atendimento sob consulta para uso residencial e demandas sazonais.',
    href: '/products/lenha-para-lareira-e-churrasco-belo-horizonte',
    cta: 'Ver lenha para lareira e churrasco',
  },
  {
    title: 'Bancos de madeira sob encomenda em Belo Horizonte',
    description: 'Produto sob encomenda para projetos com proposta mais personalizada.',
    href: '/products/bancos-de-madeira-sob-encomenda-belo-horizonte',
    cta: 'Consultar bancos de madeira sob encomenda',
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
    description: 'Itens para complementar portas e acabamentos com mais praticidade.',
  },
  {
    title: 'Telhas em geral',
    description:
      'Opções para cobertura e necessidades relacionadas ao telhado, conforme disponibilidade.',
  },
  {
    title: 'Lenha para lareira e churrasco',
    description:
      'Atendimento sob consulta para quem busca lenha para uso residencial, lareira e churrasco.',
  },
  {
    title: 'Serragem',
    description: 'Residuo de madeira disponível sob consulta para necessidades específicas.',
  },
  {
    title: 'Corte de madeiras sob encomenda',
    description:
      'Serviço sob consulta para apoiar pedidos que exigem preparação ou adequação do material.',
  },
  {
    title: 'Bancos de madeira sob encomenda',
    description:
      'Produto fabricado sob encomenda para quem busca solução em madeira com proposta mais personalizada.',
  },
  {
    title: 'Ferragens e itens complementares',
    description: 'Produtos de apoio para instalação, acabamento e andamento do projeto.',
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
      itemListElement: [...primaryIntentCards, ...secondaryIntentCards].map((item, index) => ({
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
        title="Produtos de madeira em Belo Horizonte | Compensados, OSB, telhado e portas | Madeiras Santos"
        description="Compensado plastificado, compensado resinado, OSB, madeira para telhado, portas, telhas e serviços sob encomenda em Belo Horizonte e região metropolitana. Solicite orçamento pelo WhatsApp."
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
          Encontre com mais rapidez as principais linhas da Madeiras Santos e solicite orçamento
          pelo WhatsApp para Belo Horizonte e região metropolitana.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            Solicitar orçamento no WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 transition-colors duration-200 hover:bg-yellow-100"
          >
            Ver localização
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Compensados, OSB, madeira para telhado, portas, telhas, corte sob encomenda e itens
          complementares • Atendimento de segunda a sexta, das 8h às 17h30, e sábado, das 8h às 12h
        </p>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Linhas mais buscadas para orçamento em Belo Horizonte
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Selecione a linha que melhor se aproxima da sua necessidade para acessar uma página mais
            específica e agilizar o orçamento.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {primaryIntentCards.map((card) => (
            <article key={card.title} className="rounded-xl bg-green-600 p-5 text-white">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/95">{card.description}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex min-h-[44px] items-center rounded-md border border-white/40 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
        <div className="pt-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Outras demandas recorrentes
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {secondaryIntentCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {card.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex min-h-[44px] items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  {card.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Outras linhas, serviços e itens complementares
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Também trabalhamos com outros itens, serviços e soluções sob encomenda para atender
            diferentes necessidades de obra, estrutura, acabamento e uso residencial.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-4">
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

      <section
        id="atendimento"
        className="mt-10 rounded-2xl border border-gray-200 bg-emerald-50 p-6 dark:border-gray-700 dark:bg-gray-800/70"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Não encontrou exatamente o que procura?
        </h2>
        <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-300">
          Fale com a Madeiras Santos para consultar disponibilidade, orçamento e atendimento em Belo
          Horizonte e região metropolitana.
        </p>
        <div className="mt-5">
          <a
            href={siteMetadata.whatsapp}
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
