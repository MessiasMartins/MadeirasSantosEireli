import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Head from 'next/head'
import FAQSection from '@/components/FAQSection'
import faqData from '@/data/faqData'
import NewsletterForm from '@/components/NewsletterForm'

const products = [
  {
    name: 'Compensado plastificado',
    description:
      'Boa opção para aplicações que exigem resistência, durabilidade e melhor acabamento.',
  },
  {
    name: 'Compensado resinado',
    description: 'Versátil para diferentes usos na obra, com ótimo custo-benefício.',
  },
  {
    name: 'OSB',
    description: 'Solução prática para fechamentos, divisórias, tapumes e outras aplicações.',
  },
  {
    name: 'Madeira para telhado',
    description: 'Peças para estrutura com atendimento mais direto na escolha do material.',
  },
  {
    name: 'Portas de madeira',
    description: 'Opções para quem busca praticidade e qualidade em um só lugar.',
  },
  {
    name: 'Outros itens sob consulta',
    description: 'Fale com a equipe para verificar disponibilidade e necessidades específicas.',
  },
]

const whyChoose = [
  {
    name: 'Atendimento rápido',
    description: 'Contato direto para agilizar orçamento e atendimento.',
  },
  {
    name: 'Foco local',
    description: 'Atendimento para Belo Horizonte e região metropolitana.',
  },
  {
    name: 'Apoio na escolha',
    description: 'Mais clareza para quem precisa comprar com segurança.',
  },
  {
    name: 'Relação custo-benefício',
    description: 'Busca por qualidade com negociação objetiva.',
  },
]

const quoteSteps = [
  {
    title: 'Envie sua necessidade',
    description: 'Fale pelo WhatsApp e informe os materiais que precisa.',
  },
  {
    title: 'Receba orientação',
    description: 'A equipe ajuda a validar os itens e esclarecer dúvidas.',
  },
  {
    title: 'Avance com mais rapidez',
    description:
      'Você recebe retorno para seguir com retirada ou entrega, conforme disponibilidade.',
  },
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Portugal 901A - Santa Amélia',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '31550-000',
      addressCountry: 'BR',
    },
    areaServed: ['Belo Horizonte', 'Contagem', 'Betim', 'Nova Lima', 'Vespasiano'],
    sameAs: [siteMetadata.instgram, siteMetadata.google],
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answerLines.join(' '),
      },
    })),
  }

  return (
    <>
      <PageSEO
        title="Madeiras Santos | Madeireira em Belo Horizonte e região metropolitana"
        description="Compensado plastificado, compensado resinado, OSB, madeira para telhado e portas de madeira. Solicite seu orçamento com a Madeiras Santos em Belo Horizonte e região metropolitana."
      />
      <Head>
        <link rel="preload" as="image" href="/static/images/wood.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <section
        className="relative overflow-hidden divide-y divide-gray-200 dark:divide-gray-300"
        aria-labelledby="hero-title"
      >
        <div className="relative min-h-[72vh] lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/static/images/wood.jpg"
            alt="Pátio com estoque de madeiras da Madeiras Santos em Belo Horizonte"
            width="1000"
            height="1000"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/75" />
          <main className="relative z-10 px-4 pt-5 pb-10">
            <h1
              id="hero-title"
              className="max-w-[20ch] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl"
            >
              <span className="block">Madeiras de qualidade para o seu</span>
              <span className="block text-primary-600">Projeto!</span>
            </h1>
            <p className="mt-4 max-w-[36ch] text-base leading-relaxed text-gray-800 sm:text-lg">
              Qualidade, preço justo e atendimento rápido para obras, reformas e marcenaria em Belo
              Horizonte e região metropolitana.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <a
                href={siteMetadata.whatsapp}
                className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-green-700"
              >
                Solicitar orçamento no WhatsApp
              </a>
              <a
                href="#localizacao"
                className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 hover:bg-yellow-100"
              >
                Ver localização
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-700">
              Atendimento em Belo Horizonte e região metropolitana • Orçamento rápido • Entrega sob
              consulta
            </p>
          </main>
        </div>

        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-100 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="#059669"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <p className="pt-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  <span className="block xl:inline">Madeiras de qualidade para o seu</span>{' '}
                  <span className="block text-primary-500 xl:inline">Projeto!</span>
                </p>
                <p className="mt-5 text-base text-gray-600 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                  Qualidade, preço justo e atendimento rápido para obras, reformas e marcenaria em
                  Belo Horizonte e região metropolitana.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 sm:justify-center lg:justify-start">
                  <a
                    href={siteMetadata.whatsapp}
                    className="min-h-[48px] rounded-md bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:text-lg"
                  >
                    Solicitar orçamento no WhatsApp
                  </a>
                  <a
                    href="#localizacao"
                    className="min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-8 py-3 text-base font-medium text-gray-800 hover:bg-yellow-100 md:py-4 md:text-lg"
                  >
                    Ver localização
                  </a>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Atendimento em Belo Horizonte e região metropolitana • Orçamento rápido • Entrega
                  sob consulta
                </p>
              </div>
            </main>
          </div>
        </div>

        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/static/images/wood.jpg"
            alt="Pátio com estoque de madeiras da Madeiras Santos em Belo Horizonte"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900 sm:p-6">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Atendimento objetivo para quem precisa comprar com mais rapidez
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-4">
          <li className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">Orçamento rápido</li>
          <li className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">Atendimento local</li>
          <li className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
            Apoio na escolha dos materiais
          </li>
          <li className="rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800">
            WhatsApp como canal principal
          </li>
        </ul>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Principais produtos
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Materiais para obras, reformas e demandas recorrentes com mais agilidade e clareza no
            atendimento.
          </p>
        </div>
        <div className="pt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Por que comprar com a Madeiras Santos?
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Nosso foco é oferecer atendimento direto, mais agilidade no orçamento e apoio na escolha
            dos materiais para facilitar sua compra.
          </p>
        </div>
        <div className="pt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <article key={item.name} className="rounded-xl bg-emerald-50 p-5 dark:bg-gray-800/70">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="localizacao" className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Atendimento em Belo Horizonte e região metropolitana
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Atendemos clientes em Belo Horizonte e também na região metropolitana, com foco em
            agilidade no orçamento, clareza comercial e apoio no processo de compra.
          </p>
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            Belo Horizonte, Contagem, Betim, Nova Lima, Vespasiano, Lagoa Santa, Santa Luzia, Sabará
            e outras cidades da região.
          </p>
        </div>
        <div className="pt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <iframe
              title="Mapa da Madeiras Santos em Belo Horizonte"
              src={mapsEmbedSrc}
              className="h-64 w-full md:h-full md:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa com localização da Madeiras Santos"
              allowFullScreen
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-3">
            <a
              href={siteMetadata.whatsapp}
              className="w-full min-h-[48px] rounded-md bg-green-600 px-8 py-3 text-center text-base font-medium text-white hover:bg-green-700 md:py-4"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
              className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-8 py-3 text-center text-base font-medium text-gray-800 hover:bg-yellow-100 md:py-4"
            >
              Ver localização
            </a>
          </div>
        </div>
      </section>

      <section className="divide-y divide-gray-200 pt-10 dark:divide-gray-700">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Como solicitar seu orçamento
          </h2>
        </div>
        <ol className="pt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quoteSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
            >
              <p className="text-sm font-semibold text-primary-600">{index + 1}.</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <FAQSection faqs={faqData} />

      <section className="mt-10 rounded-2xl border border-gray-200 bg-emerald-50 p-6 dark:border-gray-700 dark:bg-gray-800/70">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Solicite seu orçamento
        </h2>
        <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-300">
          Fale com a Madeiras Santos para consultar disponibilidade, orçamento e atendimento em Belo
          Horizonte e região metropolitana.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteMetadata.whatsapp}
            className="w-full min-h-[48px] rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-green-700"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#localizacao"
            className="w-full min-h-[48px] rounded-md border border-yellow-200 bg-yellow-50 px-6 py-3 text-center text-base font-medium text-gray-800 hover:bg-yellow-100"
          >
            Ver localização
          </a>
        </div>
      </section>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-6">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
