import type { NextPage } from 'next'
import Hero from 'src/components/Hero'
import Layout from '../components/Layout'
import * as S from './styled'
import GetInTouch from 'src/components/GetInTouch'
import LatestPosts from 'src/components/LatestPosts'
import { getSortedPostsData } from 'src/lib/posts'
import { TPost } from './blog'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type THomeProps = {
  allPostsData: TPost[]
}

const Home: NextPage<THomeProps> = ({ allPostsData }: THomeProps) => {
  return (
    <>
      <Layout>
        <Hero />
        <S.Wrapper>
          <GetInTouch />
          <LatestPosts allPostsData={allPostsData} />
        </S.Wrapper>
      </Layout>
    </>
  )
}

export default Home
