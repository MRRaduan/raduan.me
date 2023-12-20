import '../styles/globals.css'
import GlobalStyles from 'src/styles/global'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FirstRenderProvider } from '../context/first-render'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matheus Raduan - raduan.me</title>
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta name="theme-color" content="#000000"></meta>
        <meta
          name="description"
          content="Personal website of Matheus Raduan, a frontend developer"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <FirstRenderProvider>
        <NextNProgress
          color="linear-gradient( 90deg,#BC5A55 0%,#D49C73 74.48% )"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
          options={{
            showSpinner: false,
          }}
        />
        <Component {...pageProps} />
      </FirstRenderProvider>
    </>
  )
}

export default App
