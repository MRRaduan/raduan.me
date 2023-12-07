import '../styles/globals.css'
import GlobalStyles from 'src/styles/global'
import Head from 'next/head'
import { FirstRenderProvider } from '../context/first-render'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matheus Raduan - raduan.me</title>
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta
          name="description"
          content="I'm Matheus Raduan. Frontend Developer "
        />
      </Head>
      <GlobalStyles />
      <FirstRenderProvider>
        <Component {...pageProps} />
      </FirstRenderProvider>
    </>
  )
}

export default App
