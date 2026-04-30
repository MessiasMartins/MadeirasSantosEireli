import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import siteStructure from '@/data/config/siteStructure'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="py-4 sm:py-10">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" aria-label="Madeiras Santos">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Image
                      src="/static/images/logo.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10"
                      priority
                    />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="-mt-1 h-6 text-xl font-semibold leading-tight sm:block sm:text-2xl lg:mt-0">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>

          <nav
            aria-label="Categorias de produtos"
            className="mt-4 hidden flex-wrap gap-2 border-t border-gray-200 pt-4 text-sm sm:flex dark:border-gray-700"
          >
            {siteStructure.productCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="rounded-full border border-gray-200 px-3 py-1 text-gray-700 hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-300 dark:hover:text-primary-300"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
