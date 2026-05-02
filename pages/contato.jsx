import Image from 'next/image'
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import Link from '@/components/Link'
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

const contactItems = [
  {
    label: 'Endereço',
    value: companyInfo.address.full,
    icon: MapPinIcon,
  },
  {
    label: 'Telefone',
    value: companyInfo.contact.phoneDisplay,
    href: companyInfo.contact.phoneHref,
    icon: PhoneIcon,
  },
  {
    label: 'E-mail',
    value: companyInfo.contact.email,
    href: `mailto:${companyInfo.contact.email}`,
    icon: EnvelopeIcon,
  },
  {
    label: 'Atendimento',
    value: 'Segunda a sexta, 8h às 18h. Sábado, 8h às 12h.',
    icon: ClockIcon,
  },
]

export default function ContatoPage() {
  const seo = pageMetadata.contato
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Contato e Localização', href: '/contato' },
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
                <Badge>Loja em Belo Horizonte</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                  Fale com a Madeiras Santos pelo WhatsApp, ligue para a loja ou veja a rota para
                  atendimento presencial em Santa Amélia.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href={companyInfo.links.whatsapp} icon={ChatBubbleLeftRightIcon}>
                    Falar no WhatsApp
                  </Button>
                  <Button
                    href={companyInfo.links.routeMap}
                    icon={MapPinIcon}
                    variant="secondary"
                    external
                  >
                    Ver rota
                  </Button>
                  <Button href={companyInfo.contact.phoneHref} icon={PhoneIcon} variant="subtle">
                    Ligar
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-lg shadow-md shadow-stone-900/10">
                <Image
                  src={visualAssets.images.facadeOptimized}
                  width={1280}
                  height={900}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Fachada e acesso da Madeiras Santos em Belo Horizonte"
                  preload
                  fetchPriority="high"
                  quality={78}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black text-brand-graphite">
                    {companyInfo.address.street}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-stone-600">
                    Santa Amélia, Belo Horizonte / MG
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
            eyebrow="Atendimento"
            title="Caminhos rápidos para falar com a loja."
            description="Use o WhatsApp para consulta ágil, telefone para contato direto ou venha conferir o estoque físico."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <Card className="h-full p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-stone-500">
                    {item.label}
                  </h2>
                  <p className="mt-2 text-base font-bold leading-6 text-brand-graphite">
                    {item.value}
                  </p>
                </Card>
              )

              return (
                <Reveal key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
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
                  src={visualAssets.images.storeOptimized}
                  width={1280}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt="Loja da Madeiras Santos com produtos para obra e reforma"
                  quality={76}
                  className="aspect-[4/3] w-full object-cover"
                />
              </Card>
            </Reveal>

            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="Visite a loja"
                  title="Veja o material no local e fale direto com a equipe."
                  description="A loja fica em Santa Amélia, com fácil acesso para retirada, consulta de produtos e orientação para sua obra ou reforma."
                />
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href={companyInfo.links.routeMap} icon={MapPinIcon} external>
                    Ver rota no Google Maps
                  </Button>
                  <Button href="/produtos" variant="secondary">
                    Ver linhas de produtos
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
