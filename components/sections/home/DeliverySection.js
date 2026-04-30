import Image from 'next/image'
import { ChatBubbleLeftRightIcon, TruckIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import companyInfo from '@/data/config/companyInfo'
import visualAssets from '@/data/config/visualAssets'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

export default function DeliverySection() {
  return (
    <section className="bg-brand-graphite py-14 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <Image
                src={visualAssets.images.delivery}
                alt="Madeiras carregadas para entrega sob consulta"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-600">
                <TruckIcon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-balance text-3xl font-black tracking-tight sm:text-4xl">
                Entrega sob consulta para facilitar sua obra.
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/82">
                Consulte condições conforme produto, volume, endereço e disponibilidade logística.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={getWhatsAppLink('Olá, gostaria de consultar entrega para minha obra.')}
                  icon={ChatBubbleLeftRightIcon}
                >
                  Consultar entrega pelo WhatsApp
                </Button>
                <Button href={companyInfo.contact.phoneHref} variant="secondary">
                  Ligar para a loja
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
