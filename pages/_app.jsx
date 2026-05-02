import '@/css/tailwind.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import CookieConsent from 'react-cookie-consent'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
        <CookieConsent
          location="bottom"
          buttonText="Aceitar cookies"
          cookieName="madeiras-santos-cookie-consent"
          expires={180}
          containerClasses="cookie-consent-banner"
          contentClasses="cookie-consent-content"
          buttonClasses="cookie-consent-button"
        >
          Utilizamos cookies para melhorar sua navegação, analisar tráfego e personalizar sua
          experiência.
        </CookieConsent>
      </LayoutWrapper>
    </div>
  )
}
