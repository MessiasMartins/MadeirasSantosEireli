import Image from 'next/image'
import { ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline'
import companyInfo from '@/data/config/companyInfo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import visualAssets from '@/data/config/visualAssets'

export default function ContactSection({ mapsEmbedSrc }) {
  return (
    <section className="bg-stone-50 py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-primary-700">
                Visite a loja
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-brand-graphite sm:text-4xl">
                Estoque físico e atendimento direto em Belo Horizonte.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                {companyInfo.address.full}. Fale no WhatsApp, ligue ou veja a rota para chegar à
                loja.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Button href={companyInfo.links.routeMap} icon={MapPinIcon} external full>
                  Ver rota
                </Button>
                <Button
                  href={companyInfo.links.whatsapp}
                  icon={ChatBubbleLeftRightIcon}
                  variant="secondary"
                  full
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src={visualAssets.images.facadeOptimized}
                alt="Fachada da loja Madeiras Santos em Belo Horizonte"
                width={1280}
                height={900}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
                quality={76}
                className="aspect-[4/3] rounded-lg object-cover shadow-md shadow-stone-900/10"
              />
              <Image
                src={visualAssets.images.stock}
                alt="Empilhadeira e madeiras no pátio da Madeiras Santos"
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
                quality={76}
                className="aspect-[4/3] rounded-lg object-cover object-center shadow-md shadow-stone-900/10"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm shadow-stone-900/5">
            <iframe
              title="Mapa da Madeiras Santos em Belo Horizonte"
              src={mapsEmbedSrc}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa com localização da Madeiras Santos"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
