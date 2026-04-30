import Image from 'next/image'
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ShoppingBagIcon,
  TruckIcon,
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

const deliverySteps = [
  {
    title: 'Consulte o material',
    description: 'Informe produto, medidas aproximadas, volume e endereço para a equipe orientar.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Combine as condições',
    description:
      'A entrega é avaliada conforme produto, volume, endereço e disponibilidade logística.',
    icon: TruckIcon,
  },
  {
    title: 'Retire ou receba',
    description:
      'Você também pode visitar a loja e combinar retirada conforme disponibilidade do estoque.',
    icon: ShoppingBagIcon,
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

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <Badge>Entrega sob consulta</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                  Consulte condições conforme produto, volume, endereço e disponibilidade logística
                  para facilitar sua obra em Belo Horizonte e região.
                </p>
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
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Empilhadeira com madeiras preparadas para entrega sob consulta"
                  priority
                  className="aspect-[4/3] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black text-brand-graphite">
                    Atendimento para obra, reforma, varejo e volumes maiores.
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
            eyebrow="Como funciona"
            title="A equipe orienta o melhor caminho para cada pedido."
            description="A logística depende do produto, volume, endereço e disponibilidade. O atendimento pelo WhatsApp agiliza essa avaliação."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {deliverySteps.map((step) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title}>
                  <Card className="h-full p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-xl font-black text-brand-graphite">{step.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">{step.description}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Card className="h-full overflow-hidden">
                <Image
                  src={visualAssets.images.yard}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Empilhadeira e estoque físico da Madeiras Santos para retirada"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </Card>
            </Reveal>

            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="Retirada na loja"
                  title="Também é possível visitar a Madeiras Santos."
                  description="Veja o material no local, fale com a equipe e combine a retirada quando fizer sentido para sua compra."
                />
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contato" icon={MapPinIcon}>
                    Ver contato e localização
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
