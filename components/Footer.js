import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import siteStructure from '@/data/config/siteStructure'
import companyInfo from '@/data/config/companyInfo'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Produtos
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {siteStructure.productCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={category.href}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Atendimento
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/entrega">Entrega</Link>
              </li>
              <li>
                <Link href="/contato">Contato e Localização</Link>
              </li>
              <li>
                <a href={companyInfo.links.whatsapp}>WhatsApp</a>
              </li>
              <li>
                <a href={companyInfo.contact.phoneHref}>Telefone</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex mb-3 space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
              <SocialIcon kind="google" href={siteMetadata.google} size="5" />
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{companyInfo.address.full}</p>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              CEP {companyInfo.address.postalCode} • {companyInfo.contact.phoneDisplay}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <div className="mb-2 flex flex-col items-center gap-1 md:flex-row md:gap-2">
            <div>{siteMetadata.author}</div>
            <div className="hidden md:block">•</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div className="hidden md:block">•</div>
            <Link href="/">Madeiras Santos</Link>
          </div>
          <div className="mb-2 text-sm text-gray-500 opacity-90 dark:text-gray-400">
            <Link href="https://auderemg.com.br">
              <Image
                className="h-50 w-50 object-cover sm:h-4 md:h-4 lg:w-100pt lg:h-100pt"
                src="/static/images/audere23.png"
                alt="Logo da desenvolvedora"
                width={100}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
