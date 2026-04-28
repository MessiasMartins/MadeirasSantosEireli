import Image from '@/components/Image'
import Link from '@/components/Link'
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
      className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="relative bg-gray-100 dark:bg-gray-800">
        <Image
          src={product.image}
          width={1254}
          height={1254}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          alt={product.imageAlt}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-7 text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
          {product.shortDescription}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {product.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-green-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-5">
          <a
            href={getWhatsAppLink(product.whatsappMessage)}
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            aria-label={`${product.primaryCtaLabel} pelo WhatsApp`}
          >
            Solicitar pelo WhatsApp
          </a>
          <Link
            href={detailHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-offset-gray-900"
          >
            {detailLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
