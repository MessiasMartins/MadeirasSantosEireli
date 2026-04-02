import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Head from 'next/head'
import Link from '@/components/Link'

const mainLines = [
  {
    title: 'Compensado plastificado',
    description:
      'Boa opção para aplicações que exigem resistência, durabilidade e melhor acabamento.',
    href: '/products/compensado-plastificado-belo-horizonte',
    cta: 'Ver página de compensado plastificado',
  },
  {
    title: 'Compensado resinado',
    description:
      'Boa alternativa para diferentes usos na obra, com versatilidade e bom custo-benefício.',
    href: '/products/compensado-resinado-belo-horizonte',
    cta: 'Ver página de compensado resinado',
  },
  {
    title: 'OSB',
    description: 'Solução prática para fechamentos, divisórias, tapumes e outras aplicações.',
    href: '/products/osb-belo-horizonte',
    cta: 'Ver página de OSB',
  },
  {
    title: 'Madeira para telhado',
    description: 'Peças para estrutura com atendimento mais direto na escolha dos materiais.',
    href: '/products/madeira-para-telhado-belo-horizonte',
    cta: 'Ver página de madeira para telhado',
  },
  {
    title: 'Portas de madeira',
    description: 'Opções para quem busca praticidade, qualidade e atendimento objetivo.',
    href: '/products/portas-de-madeira-belo-horizonte',
    cta: 'Ver página de portas de madeira',
  },
]

const otherProductsAndServices = [
  {
    title: 'Madeiras em geral',
    description:
      'Peças para diferentes necessidades de obra e estrutura, conforme disponibilidade e aplicação.',
    href: '/products',
    cta: 'Consultar madeiras em geral',
  },
  {
    title: 'Marcos e rodapés',
    description: 'Itens para complementar portas e acabamentos com mais praticidade.',
    href: '/products',
    cta: 'Consultar marcos e rodapés',
  },
  {
    title: 'Telhas em geral',
    description:
      'Opções para cobertura e necessidades relacionadas ao telhado, conforme disponibilidade.',
    href: '/products/telhas-em-belo-horizonte',
    cta: 'Ver página de telhas',
  },
  {
    title: 'Lenha para lareira e churrasco',
    description: 'Atendimento sob consulta para uso residencial e demandas sazonais.',
    href: '/products/lenha-para-lareira-e-churrasco-belo-horizonte',
    cta: 'Ver página de lenha',
  },
  {
    title: 'Serragem',
    description: 'Residuo de madeira disponível sob consulta para necessidades específicas.',
    href: '/products/serragem-em-belo-horizonte',
    cta: 'Consultar serragem',
  },
  {
    title: 'Corte de madeiras sob encomenda',
    description:
      'Serviço sob consulta para pedidos que exigem preparação ou adequação do material.',
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    cta: 'Consultar corte sob encomenda',
  },
  {
    title: 'Bancos de madeira sob encomenda',
    description:
      'Produto fabricado sob encomenda para quem busca solução em madeira com proposta mais personalizada.',
    href: '/products/bancos-de-madeira-sob-encomenda-belo-horizonte',
    cta: 'Ver página de bancos sob encomenda',
  },
  {
    title: 'Ferragens e itens complementares',
    description: 'Produtos de apoio para instalação, acabamento e andamento do projeto.',
    href: '/products',
    cta: 'Consultar itens complementares',
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
      itemListElement: [...mainLines, ...otherProductsAndServices].map((item, index) => ({
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
        title="Produtos de madeira em Belo Horizonte | Compensados, OSB, telhado, portas e mais | Madeiras Santos"
        description="Compensados, OSB, madeira para telhado, portas, telhas, corte sob encomenda, lenha, serragem e outros itens em Belo Horizonte e região metropolitana. Solicite orçamento pelo WhatsApp."
        ogTitle="Produtos de madeira em Belo Horizonte | Madeiras Santos"
        ogDescription="Conheça as principais linhas e serviços da Madeiras Santos e solicite orçamento pelo WhatsApp."
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

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-700/50 dark:bg-gray-800/70">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Produtos para obras, reformas e marcenaria em Belo Horizonte e região metropolitana
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
          Encontre com mais rapidez as principais linhas da Madeiras Santos e solicite orçamento
          pelo WhatsApp para obras, reformas, marcenaria e outras demandas recorrentes.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Solicitar orçamento no WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Ver localização
          </a>
        </div>
        <p className="mt-4 border-l-4 border-emerald-500 pl-3 text-sm text-gray-700 dark:text-gray-300">
          Compensados, OSB, madeira para telhado, portas, telhas, corte sob encomenda e itens
          complementares • Atendimento de segunda a sexta, das 8h às 17h30, e sábado, das 8h às 12h
        </p>
      </section>

      <section className="divide-y divide-emerald-100 pt-10 dark:divide-emerald-900/40">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Linhas principais
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Linhas principais para orçamento
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Selecione a linha que melhor se aproxima da sua necessidade para acessar uma página mais
            específica e agilizar o orçamento.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {mainLines.map((card) => (
            <article
              key={card.title}
              className="group flex h-full flex-col rounded-xl border border-emerald-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-emerald-800/50 dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-4 inline-flex min-h-[44px] min-w-[220px] items-center justify-center rounded-md border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-all duration-200 hover:bg-emerald-100 group-hover:border-emerald-500 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 dark:hover:bg-emerald-900/35"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="divide-y divide-emerald-100 pt-10 dark:divide-emerald-900/40">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            Outros produtos e serviços
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Outros produtos e serviços
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Também atendemos outras demandas recorrentes, itens complementares e serviços sob
            consulta, conforme disponibilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:grid-cols-4">
          {otherProductsAndServices.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-600 dark:text-gray-100 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/30"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="atendimento"
        className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-700/40 dark:bg-gray-800/70"
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
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
