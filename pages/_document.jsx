import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/assets/brand/madeiras-santos-favicon.ico" />
          <link rel="icon" href="/assets/brand/madeiras-santos-favicon.ico" sizes="any" />
          <link rel="icon" href="/assets/brand/madeiras-santos-favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/assets/brand/madeiras-santos-favicon-512.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#059669" />
          <meta name="theme-color" content="#059669" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-stone-50 font-sans text-brand-graphite antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
