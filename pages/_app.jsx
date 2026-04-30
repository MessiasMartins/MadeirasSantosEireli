import '@/css/tailwind.css'
import Head from 'next/head'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import CookieConsent from 'react-cookie-consent'

export default function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}
