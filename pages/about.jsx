import Image from 'next/image'
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO } from '@/components/SEO'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import companyInfo from '@/data/config/companyInfo'
import pageMetadata from '@/data/config/pageMetadata'
import visualAssets from '@/data/config/visualAssets'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

const pillars = [
  {
    title: 'Tradição familiar',
    description:
      'A experiência da família no setor madeireiro orienta a forma de atender, selecionar produtos e construir relações de confiança.',
    icon: UsersIcon,
  },
  {
    title: 'Presença física em BH',
    description:
      'A loja em Belo Horizonte permite atendimento direto, retirada conforme disponibilidade e orientação próxima para cada necessidade.',
    icon: MapPinIcon,
  },
  {
    title: 'Atendimento ágil',
    description:
      'O WhatsApp ajuda a consultar produtos, medidas, volumes, retirada e entrega sob consulta com mais rapidez.',
    icon: ClockIcon,
  },
]

export default function AboutPage() {
  const seo = pageMetadata.about
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/about' },
  ]

  return (
    <>
      <PageSEO title={seo.title} description={seo.description} />
      <BreadcrumbSEO items={breadcrumbs} />

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal>
              <div>
                <Badge>História e presença local</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                  A Madeiras Santos nasceu da tradição familiar no setor madeireiro e segue
                  atendendo Belo Horizonte e região com presença física, estoque no local e
                  orientação direta para quem está construindo, reformando ou comprando para
                  demandas maiores.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(
                      'Olá, gostaria de falar com a Madeiras Santos sobre produtos e atendimento.'
                    )}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    Falar no WhatsApp
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
                  src={visualAssets.images.forkliftWide}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Empilhadeira e madeiras no pátio da Madeiras Santos"
                  priority
                  className="aspect-[4/3] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black text-brand-graphite">
                    Atendimento para varejo, obra, reforma e demandas maiores.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Como trabalhamos"
            title="Relação direta, orientação prática e compromisso de longo prazo."
            description="A equipe entende que quem procura uma madeireira precisa de clareza, disponibilidade e confiança para seguir com a compra certa."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title}>
                  <Card className="h-full p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-xl font-black text-brand-graphite">{pillar.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">{pillar.description}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                  <ShoppingBagIcon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-black text-brand-graphite">
                  Uma loja feita para resolver com proximidade.
                </h2>
                <p className="mt-3 leading-7 text-stone-700">
                  O atendimento combina experiência acumulada, conversa direta e cuidado para
                  indicar caminhos viáveis conforme produto, uso, volume e disponibilidade.
                </p>
              </Card>
            </Reveal>

            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="Visite ou chame no WhatsApp"
                  title="A Madeiras Santos atende quem compra para casa, obra, reforma e volumes maiores."
                  description={`Estamos em ${companyInfo.address.neighborhood}, Belo Horizonte. O caminho mais rápido para consultar disponibilidade é falar com a equipe pelo WhatsApp.`}
                />
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(
                      'Olá, gostaria de consultar atendimento na Madeiras Santos.'
                    )}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    Chamar no WhatsApp
                  </Button>
                  <Button href="/produtos" variant="secondary">
                    Ver produtos
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
