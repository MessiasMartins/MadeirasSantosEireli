import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/assets/brand/madeiras-santos-favicon.ico" />
          <link rel="icon" href="/assets/brand/madeiras-santos-favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/assets/brand/favicon-48x48.png" />
          <link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#059669" />
          <meta name="theme-color" content="#059669" />
        </Head>
        <body className="bg-stone-50 text-brand-graphite antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
