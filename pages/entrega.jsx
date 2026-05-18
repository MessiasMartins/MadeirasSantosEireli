import Image from 'next/image'
import { ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import FAQSection from '@/components/FAQSection'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO, WebPageSEO } from '@/components/SEO'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'
import visualAssets from '@/data/config/visualAssets'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

const deliverySteps = [
  'Informe produto, medidas e quantidade.',
  'Envie o endereço de entrega.',
  'A equipe consulta disponibilidade e condições.',
  'O valor da entrega é informado antes da confirmação.',
  'Você também pode optar por retirar o material na loja.',
]

const coveredCities = [
  'Belo Horizonte',
  'Betim',
  'Sabará',
  'Ibirité',
  'Contagem',
  'Nova Lima',
  'Santa Luzia',
  'Pedro Leopoldo',
  'Esmeraldas',
  'Confins',
  'Ribeirão das Neves',
  'Brumadinho',
  'Vespasiano',
  'Lagoa Santa',
  'São José da Lapa',
]

const deliveryProducts = [
  'Chapas e compensados',
  'Compensado plastificado',
  'Compensado resinado',
  'OSB',
  'Tábuas de Pinus',
  'Ripas',
  'Caibros de Pinus e Eucalipto',
  'Peças de Paraju',
  'Telhas',
  'Portas e marcos',
  'Ferragens e materiais de apoio',
]

const internalLinks = [
  { label: 'Produtos', href: '/produtos' },
  { label: 'Chapas e Compensados', href: '/produtos/chapas-e-compensados' },
  { label: 'Tábuas, Ripas e Caibros', href: '/produtos/tabuas-ripas-e-caibros' },
  { label: 'Madeira para Telhado', href: '/produtos/madeira-para-telhado' },
  { label: 'Contato', href: '/contato' },
]

const faqs = [
  {
    question: 'Vocês entregam em toda a Região Metropolitana de Belo Horizonte?',
    answerLines: [
      'A entrega é feita sob consulta para Belo Horizonte e cidades da Região Metropolitana. A possibilidade de entrega depende do produto, volume, endereço, rota e disponibilidade logística.',
    ],
  },
  {
    question: 'O valor da entrega é informado antes da compra?',
    answerLines: [
      'Sim. O valor da entrega é consultado antes da confirmação do pedido, conforme endereço, quantidade e características do material.',
    ],
  },
  {
    question: 'Posso retirar o material na loja?',
    answerLines: [
      'Sim. A retirada pode ser feita na loja da Avenida Portugal, 901A, Santa Amélia, em Belo Horizonte. Consulte disponibilidade antes de ir até a unidade.',
    ],
  },
  {
    question: 'Quais informações devo enviar para consultar entrega?',
    answerLines: [
      'Informe produto, medidas aproximadas, quantidade e endereço completo. Isso ajuda a equipe a verificar disponibilidade e condições de entrega.',
    ],
  },
  {
    question: 'A entrega tem prazo fixo?',
    answerLines: [
      'Não trabalhamos com promessa de prazo fixo na página. O prazo e as condições são informados pela equipe conforme disponibilidade, rota e volume do pedido.',
    ],
  },
]

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
      <WebPageSEO title={seo.title} description={seo.description} />

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                  Consulte condições de entrega para madeiras, chapas, compensados, telhas, portas,
                  caibros e materiais de apoio em Belo Horizonte e cidades da Região Metropolitana.
                </p>
                <div className="mt-5 space-y-3 text-base leading-7 text-stone-700">
                  <p>
                    A Madeiras Santos atende clientes no varejo, empresas, construtoras e
                    empreiteiros com retirada na loja e entrega sob consulta. As condições variam
                    conforme produto, quantidade, endereço, rota e disponibilidade logística.
                  </p>
                  <p>
                    Antes de fechar o pedido, fale com a equipe para confirmar disponibilidade do
                    material, prazo estimado, possibilidade de entrega e valor do frete.
                  </p>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(
                      'Olá, gostaria de consultar condições de entrega para minha obra.'
                    )}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    Consultar entrega pelo WhatsApp
                  </Button>
                  <Button
                    href={companyInfo.links.routeMap}
                    icon={MapPinIcon}
                    variant="secondary"
                    external
                  >
                    Ver rota da loja
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-lg shadow-md shadow-stone-900/10">
                <Image
                  src={visualAssets.images.delivery}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Madeiras, empilhadeira e marca Madeiras Santos"
                  preload
                  fetchPriority="high"
                  quality={78}
                  className="aspect-square w-full bg-white object-contain"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <SectionHeader
                  title="Como funciona a entrega"
                  description="A entrega é avaliada caso a caso. Para agilizar o atendimento, informe o produto desejado, medidas aproximadas, quantidade e endereço completo. Com essas informações, a equipe verifica disponibilidade, condições de entrega e valor do frete antes da confirmação do pedido."
                />
                <ol className="mt-6 space-y-3">
                  {deliverySteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-base leading-7 text-stone-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary-600 text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <SectionHeader
                  title="Cidades atendidas sob consulta"
                  description="A entrega pode ser consultada para Belo Horizonte e cidades da Região Metropolitana. O atendimento depende de produto, volume, endereço, rota e disponibilidade logística."
                />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {coveredCities.map((city) => (
                    <li key={city} className="flex gap-3 text-base leading-7 text-stone-700">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600"
                      />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Card className="h-full overflow-hidden">
                <Image
                  src={visualAssets.images.yard}
                  width={1600}
                  height={1600}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Madeiras, empilhadeira e marca Madeiras Santos"
                  quality={76}
                  className="aspect-square w-full bg-white object-contain"
                />
              </Card>
            </Reveal>

            <Reveal>
              <div className="space-y-6">
                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-black text-brand-graphite">Retirada na loja</h2>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    Se preferir, você pode retirar o material diretamente na unidade da Avenida
                    Portugal, 901A, Santa Amélia, Belo Horizonte / MG. Antes de ir até a loja,
                    consulte a equipe para confirmar disponibilidade do produto e medidas desejadas.
                  </p>
                </Card>

                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-black text-brand-graphite">
                    Produtos com entrega sob consulta
                  </h2>
                  <p className="mt-4 text-base leading-7 text-stone-700">
                    A entrega pode ser consultada para diferentes linhas do catálogo, conforme
                    disponibilidade e volume do pedido.
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {deliveryProducts.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-7 text-stone-700">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {internalLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-black text-brand-graphite transition hover:border-primary-300 hover:bg-emerald-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection faqs={faqs} />
    </>
  )
}
