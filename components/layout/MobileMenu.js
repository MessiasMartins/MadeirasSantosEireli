import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import Link from '@/components/Link'
import Button from '@/components/ui/Button'
import companyInfo from '@/data/config/companyInfo'
import siteStructure from '@/data/config/siteStructure'
import visualAssets from '@/data/config/visualAssets'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone-200 bg-white text-brand-graphite shadow-sm transition hover:border-primary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      <div
        className={`fixed inset-0 z-50 bg-brand-graphite/40 transition ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Menu principal"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <Link href="/" aria-label="Madeiras Santos" onClick={() => setIsOpen(false)}>
            <Image
              src={visualAssets.brand.logoHorizontalWebp}
              alt="Madeiras Santos"
              width={900}
              height={297}
              className="h-12 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Fechar menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-graphite hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <div className="space-y-2">
            {siteStructure.primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-3 text-lg font-black text-brand-graphite hover:bg-emerald-50 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-stone-200 pt-6">
            <p className="px-3 text-xs font-black uppercase tracking-[0.18em] text-stone-500">
              Produtos
            </p>
            <div className="mt-3 space-y-1">
              {siteStructure.productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.href}
                  className="block rounded-md px-3 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="border-t border-stone-200 p-5">
          <div className="grid gap-3">
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
      </aside>
    </div>
  )
}
