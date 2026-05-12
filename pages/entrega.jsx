import Image from 'next/image'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO } from '@/components/SEO'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import pageMetadata from '@/data/config/pageMetadata'
import visualAssets from '@/data/config/visualAssets'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

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
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                  Consulte condições de entrega para madeiras, telhas, chapas, portas e outros
                  produtos em Belo Horizonte e região.
                </p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-stone-700">
                  A entrega é combinada conforme produto, volume, endereço e disponibilidade
                  logística. Para agilizar o atendimento, informe pelo WhatsApp o material desejado,
                  quantidade aproximada e local de entrega.
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

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
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
              <div>
                <SectionHeader
                  title="Retirada na loja"
                  description="Se preferir, você pode retirar o material diretamente na Madeiras Santos, na Avenida Portugal, 901A, Santa Amélia, Belo Horizonte."
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
