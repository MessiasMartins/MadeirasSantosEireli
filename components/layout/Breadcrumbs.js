import Link from '@/components/Link'

export default function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-600 dark:text-gray-300">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary-600 dark:hover:text-primary-400">
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
