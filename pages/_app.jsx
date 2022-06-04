import '@/css/tailwind.css'
import '@/css/prism.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import CookieConsent from 'react-cookie-consent'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
        <CookieConsent
          overlay="true"
          buttonText="Estou de Acordo"
          style={{ background: '#059669' }}
          buttonClasses="border border-transparent"
        >
          Este site utiliza Cookies para melhorar a experiência do usuário.
        </CookieConsent>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
