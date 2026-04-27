import Link from '@/components/Link'
import siteStructure from '@/data/config/siteStructure'

export default function CategoryHighlights() {
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Linhas principais
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Navegue pelas categorias principais para encontrar o material ideal.
        </p>
      </div>
      <ul className="grid gap-3 py-8 sm:grid-cols-2">
        {siteStructure.productCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={category.href}
              className="block rounded-lg border border-gray-200 px-4 py-3 text-gray-700 hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:text-primary-300"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
