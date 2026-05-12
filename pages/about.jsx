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
import pageMetadata from '@/data/config/pageMetadata'
import visualAssets from '@/data/config/visualAssets'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

const aboutSections = [
  {
    title: 'Experiência que ajuda na escolha do material',
    description:
      'Comprar madeira, chapa, telha, porta ou ferragem exige mais do que escolher um item no catálogo. Cada obra tem medidas, aplicações e necessidades diferentes. Por isso, a equipe orienta o cliente sobre disponibilidade, usos comuns, retirada no local e entrega sob consulta.',
    icon: ClockIcon,
  },
  {
    title: 'Estoque físico e atendimento local',
    description:
      'A loja está localizada na Avenida Portugal, 901A, no bairro Santa Amélia, em Belo Horizonte. O cliente pode visitar a unidade, verificar materiais disponíveis e conversar diretamente com a equipe antes de fechar a compra.',
    icon: MapPinIcon,
  },
  {
    title: 'Atendimento para varejo, empresas e obras',
    description:
      'Atendemos compras no varejo e demandas maiores sob consulta, sempre com foco em clareza, agilidade e relação de confiança. Nosso catálogo inclui chapas e compensados, telhas, portas, marcos, ferragens, tábuas, ripas, caibros, peças de Paraju, materiais de apoio e serviços sob consulta.',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Relação de confiança',
    description:
      'Mais do que vender madeira, buscamos facilitar a compra, reduzir dúvidas e manter uma relação próxima com quem constrói, reforma ou precisa de materiais para o dia a dia.',
    icon: UsersIcon,
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
                <Badge>Sobre a Madeiras Santos</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                  A Madeiras Santos atua desde 2018 em Belo Horizonte, reunindo a experiência de
                  gestores com mais de 30 anos no setor madeireiro. A empresa atende clientes do
                  varejo, construtoras, empreiteiros e empresas que buscam materiais para obra,
                  reforma e acabamento com orientação próxima e atendimento objetivo.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(
                      'Olá, gostaria de falar com a Madeiras Santos sobre produtos e atendimento.'
                    )}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    Falar com a equipe no WhatsApp
                  </Button>
                  <Button href="/produtos" variant="secondary">
                    Ver produtos
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-lg shadow-md shadow-stone-900/10">
                <Image
                  src={visualAssets.images.yard}
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
          <div className="grid gap-4 md:grid-cols-2">
            {aboutSections.map((section) => {
              const Icon = section.icon
              return (
                <Reveal key={section.title}>
                  <Card className="h-full p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-xl font-black text-brand-graphite">{section.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">{section.description}</p>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
