import Image from 'next/image'
import { ChatBubbleLeftRightIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import SocialIcon from '@/components/social-icons'
import companyInfo from '@/data/config/companyInfo'
import siteMetadata from '@/data/siteMetadata'
import siteStructure from '@/data/config/siteStructure'
import visualAssets from '@/data/config/visualAssets'

function formatHours() {
  return 'Segunda a sexta, 8h às 18h. Sábado, 8h às 12h.'
}

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <Container className="py-10 pb-24 md:pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <Image
              src={visualAssets.brand.logoHorizontal}
              alt="Madeiras Santos"
              width={300}
              height={99}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-6 text-stone-700">
              Madeireira em Belo Horizonte com estoque físico, atendimento rápido e entrega sob
              consulta para obra, reforma e varejo.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="6" />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
              <SocialIcon kind="google" href={siteMetadata.google} size="6" />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-graphite">
              Produtos
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-stone-700">
              {siteStructure.productCategories.map((category) => (
                <li key={category.slug}>
                  <Link className="hover:text-primary-700" href={category.href}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-graphite">
              Atendimento
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-semibold text-stone-700">
              <li>
                <Link className="hover:text-primary-700" href="/entrega">
                  Entrega
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary-700" href="/contato">
                  Contato e localização
                </Link>
              </li>
              <li>
                <a className="hover:text-primary-700" href={companyInfo.links.instagram}>
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-primary-700" href={companyInfo.links.googleBusiness}>
                  Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-graphite">
              Loja
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
              <p>{companyInfo.address.full}</p>
              <p>{formatHours()}</p>
            </div>
            <div className="mt-5 grid gap-3">
              <Button href={companyInfo.links.whatsapp} icon={ChatBubbleLeftRightIcon} full>
                WhatsApp
              </Button>
              <Button
                href={companyInfo.links.routeMap}
                icon={MapPinIcon}
                variant="secondary"
                external
                full
              >
                Ver rota
              </Button>
              <Button href={companyInfo.contact.phoneHref} icon={PhoneIcon} variant="subtle" full>
                Ligar
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Madeiras Santos. Todos os direitos reservados.</p>
          <Link href="https://auderemg.com.br" className="hover:text-primary-700">
            Desenvolvimento Audere
          </Link>
        </div>
      </Container>
    </footer>
  )
}
