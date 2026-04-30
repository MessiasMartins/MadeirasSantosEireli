import Image from '@/components/Image'
import Link from '@/components/Link'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'

export default function ProductCard({ product, priority = false }) {
  const detailHref =
    product.categoryHref === '/produtos'
      ? `/produtos#produto-${product.slug}`
      : product.categoryHref
  const detailLabel = product.categoryHref === '/produtos' ? 'Ver no catálogo' : 'Ver categoria'

  return (
    <article
      id={`produto-${product.slug}`}
      className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm shadow-stone-900/5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md hover:shadow-stone-900/10"
    >
      <div className="relative bg-stone-100">
        <Image
          src={product.image}
          width={1254}
          height={1254}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          alt={product.imageAlt}
          priority={priority}
          className="aspect-square w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Badge>{product.category}</Badge>
        <h3 className="mt-4 text-xl font-black leading-7 text-brand-graphite">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-700">{product.shortDescription}</p>

        <ul className="mt-4 space-y-2 text-sm text-stone-700">
          {product.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-5">
          <Button
            href={getWhatsAppLink(product.whatsappMessage)}
            icon={ChatBubbleLeftRightIcon}
            full
            aria-label={`${product.primaryCtaLabel} pelo WhatsApp`}
          >
            Solicitar pelo WhatsApp
          </Button>
          <Link
            href={detailHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-center text-sm font-bold text-brand-graphite transition hover:border-primary-500 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            {detailLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
