import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/dist/client/image'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <div className="flex mb-3 space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
            <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
            <SocialIcon kind="instagram" href={siteMetadata.instgram} size="5" />
            <SocialIcon kind="google" href={siteMetadata.google} size="5" />
          </div>
          <div className="mb-2 flex flex-col items-center gap-1 text-center text-sm text-gray-500 dark:text-gray-400 md:flex-row md:gap-2">
            <div>{siteMetadata.author}</div>
            <div className="hidden md:block">{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div className="hidden md:block">{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-3 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <span>
              <b>Avenida Portugal, 901A - Santa Amélia, Belo Horizonte</b> | Minas Gerais CEP:
              31550-000
            </span>
          </div>
          <div className="mb-1 text-sm text-gray-500 opacity-90 dark:text-gray-400">
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
