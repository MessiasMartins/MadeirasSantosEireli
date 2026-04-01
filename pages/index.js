//import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
//import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
//import formatDate from '@/lib/utils/formatDate'
import features from '@/components/Features'
import Head from 'next/head'
import FAQSection from '@/components/FAQSection'
import faqData from '@/data/faqData'

import NewsletterForm from '@/components/NewsletterForm'
export default function Home() {
  const businessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
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
    areaServed: ['Belo Horizonte', 'Região Metropolitana de Belo Horizonte'],
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
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
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
      <div className="relative overflow-hidden divide-y divide-gray-200 dark:divide-gray-300">
        <section className="relative min-h-[72vh] lg:hidden">
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
          <div className="absolute inset-0 bg-white/70" />
          <main className="relative z-10 px-4 pt-4 pb-8">
            <h1 className="max-w-[20ch] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              <span className="block">Madeiras de qualidade para o seu</span>
              <span className="block text-primary-600">Projeto!</span>
            </h1>
            <p className="mt-4 max-w-[28ch] text-lg leading-relaxed text-gray-800 sm:text-2xl">
              O conhecimento de mais de 40 anos de experiência no setor madeireiro aliado a uma
              administração dinâmica e atendimento intimista.
            </p>
            <p className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">Conte conosco!</p>
            <div className="mt-6 space-y-3">
              <a
                href={siteMetadata.whatsapp}
                className="w-full min-h-[48px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Whatsapp
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="w-full min-h-[48px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200"
              >
                E-Mail
              </a>
              <a
                href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
                className="w-full min-h-[48px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200"
              >
                Como Chegar?
              </a>
            </div>
          </main>
        </section>

        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="#059669"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl pt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  <span className="block xl:inline">Madeiras de qualidade para o seu</span>{' '}
                  <span className="block text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 xl:inline">
                    {' '}
                    Projeto!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  O conhecimento de mais de 40 anos de experiência no setor madeireiro aliado a uma
                  administração dinâmica e atendimento intimista.<br></br>
                  <br></br>
                  <b>Conte conosco!</b>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href={siteMetadata.whatsapp}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
                    md:text-lg md:px-10"
                    >
                      Whatsapp
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                    md:text-lg md:px-10"
                    >
                      E-Mail
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                        text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                        md:text-lg md:px-5 sm:text-center"
                    >
                      Como Chegar?
                    </a>
                  </div>
                </div>
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
      </div>

      <div className="grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Por que a Madeiras Santos?
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="mt-8 rounded-2xl bg-emerald-50 p-4 dark:bg-gray-800/60 sm:p-6">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-2xl bg-green-600 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <dt>
                    <div className="mb-3 inline-flex rounded-full bg-white/15 p-3">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xl font-bold leading-7 text-white">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-white/95">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Localização e Contatos
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <p className=" pt-6 pb-8 text-lg text-gray-500 dark:text-gray-400">
              Avenida Portugal 901A - Santa Amélia, Belo Horizonte / MG <br></br>
              CEP: 31550-000 <br></br>
              Telefone: 031 3653-2390 <br></br>
              E-mail: comercial@madeirassantos.com.br<br></br>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 lg:justify-start">
              <div className="mt-0">
                <a
                  href={siteMetadata.whatsapp}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 
                    md:text-lg md:px-10"
                >
                  Whatsapp
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                    md:text-lg md:px-5"
                >
                  E-Mail
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/Madeiras+Santos+EIRELI/@-19.8436181,-43.9877025,15z/data=!4m5!3m4!1s0x0:0xeae93a7279947fed!8m2!3d-19.8436181!4d-43.9877025"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent 
                    text-base font-medium rounded-md text-gray-900 bg-indigo-100 hover:bg-indigo-200 md:py-4 
                    md:text-lg md:px-5 sm: text-center"
                >
                  Como Chegar?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection faqs={faqData} />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
