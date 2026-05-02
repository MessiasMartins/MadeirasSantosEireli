import '@/css/tailwind.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const CookieConsentBanner = dynamic(() => import('@/components/ui/CookieConsentBanner'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${inter.variable}`}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
        <CookieConsentBanner />
      </LayoutWrapper>
    </div>
  )
}
