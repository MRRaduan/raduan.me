import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from 'src/styles/global'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>raduan.me - Hello!</title>
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta
          name="description"
          content="I'm Matheus Raduan. Frontend Developer "
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
