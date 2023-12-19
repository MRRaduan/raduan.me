import Hero from 'src/components/Hero'
import Layout from '../components/Layout'
import * as S from './styled'
import GetInTouch from 'src/components/GetInTouch'
import LatestPosts from 'src/components/LatestPosts'
import { getAllPosts } from 'src/utils/contentful'

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts,
    },
  }
}

const Home = (props) => {
  const { posts } = props

  return (
    <>
      <Layout>
        <S.FixedHeightScroll>
          <Hero />
          <S.Wrapper>
            <GetInTouch />
            <LatestPosts posts={posts} />
          </S.Wrapper>
        </S.FixedHeightScroll>
      </Layout>
    </>
  )
}

export default Home
