import Link from '@/components/Link'

export default function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm font-semibold text-stone-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-black text-brand-graphite">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
