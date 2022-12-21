import type { NextPage } from 'next'
import Hero from 'src/components/Hero'
import Layout from '../components/Layout'
import * as S from './styled'
import GetInTouch from 'src/components/GetInTouch'
import LatestPosts from 'src/components/LatestPosts'

const Home: NextPage = (pageProps) => {
  console.log(pageProps)
  return (
    <>
      <Layout>
        <Hero />
        <S.Wrapper>
          <GetInTouch />
          <LatestPosts />
        </S.Wrapper>
      </Layout>
    </>
  )
}

export default Home
