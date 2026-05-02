import Image from 'next/image'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import MobileMenu from '@/components/layout/MobileMenu'
import companyInfo from '@/data/config/companyInfo'
import siteStructure from '@/data/config/siteStructure'
import visualAssets from '@/data/config/visualAssets'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label="Madeiras Santos" className="shrink-0">
            <Image
              src={visualAssets.brand.logoHorizontalWebp}
              alt="Madeiras Santos"
              width={900}
              height={297}
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">
            {siteStructure.primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-stone-700 transition hover:bg-emerald-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={companyInfo.contact.phoneHref}
              className="text-sm font-bold text-stone-700 transition hover:text-primary-700"
            >
              {companyInfo.contact.phoneDisplay}
            </a>
            <Button href={companyInfo.links.whatsapp} icon={ChatBubbleLeftRightIcon}>
              WhatsApp
            </Button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
