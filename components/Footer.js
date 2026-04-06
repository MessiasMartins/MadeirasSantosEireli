import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Madeiras Santos
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Avenida Portugal, 901A - Santa Amélia, Belo Horizonte - MG
              <br />
              CEP: 31550-000
              <br />
              Telefone: (31) 3653-2390
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              <Link href={siteMetadata.whatsapp}>WhatsApp para orçamento</Link>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Horário de funcionamento
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Segunda a sexta: 8h às 17h30
              <br />
              Sábado: 8h às 12h
              <br />
              Domingos e feriados: fechado
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              <Link href={siteMetadata.google}>Ver localização</Link>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Links úteis
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/products">Produtos</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <Link href="/about">Sobre</Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
              <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
              <SocialIcon kind="instagram" href={siteMetadata.instgram} size="5" />
              <SocialIcon kind="google" href={siteMetadata.google} size="5" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()} Madeiras Santos`}</div>
          <Link href="https://auderemg.com.br">
            <Image
              className="h-auto w-auto"
              src="/static/images/audere23.png"
              alt="Logo da desenvolvedora"
              width={100}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
