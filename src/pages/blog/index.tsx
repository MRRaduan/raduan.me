import Link from 'next/link'
import Layout from 'src/components/Layout'
import PostLink from 'src/components/PostLink'
import ShowcasePost from 'src/components/ShowcasePost'

import { getSortedPostsData } from 'src/lib/posts'
import * as S from './styled'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export type TPost = {
  id: string
  date: string
  title: string
  description: string
  tag: string
}

type PostsProps = {
  allPostsData: TPost[]
}

const Posts = ({ allPostsData }: PostsProps) => {
  const showCasePosts = allPostsData.slice(0, 2)
  const ramainingPosts = allPostsData.slice(2)
  return (
    <Layout>
      <S.BlogWrapper>
        <S.BlogHero>
          <S.BlogHeroPageTitle>blog</S.BlogHeroPageTitle>
          <S.BlogHeroTitleWrapper>
            <S.BlogHeroTitle>
              Some tech stuff <br /> and another <br /> things
            </S.BlogHeroTitle>
            <S.BlogHeroText>
              Lorem ipsum dolor <br /> sit amet, consectetur
            </S.BlogHeroText>
          </S.BlogHeroTitleWrapper>
        </S.BlogHero>
        <S.ShowcasePostsWrapper>
          <S.ShowcasePostList>
            {showCasePosts.map((props) => (
              <Link href={`/blog/${props.id}`} key={props.id}>
                <S.ShowcasePostItem key={props.id}>
                  <ShowcasePost {...props} />
                </S.ShowcasePostItem>
              </Link>
            ))}
          </S.ShowcasePostList>
        </S.ShowcasePostsWrapper>
      </S.BlogWrapper>
      <S.RemainingPosts>
        <S.ReaminingPostsList>
          {ramainingPosts.map((props) => (
            <Link href={`/blog/${props.id}`} key={props.id}>
              <a>
                <S.ReaminingPostsItem key={props.id}>
                  <PostLink {...props} />
                </S.ReaminingPostsItem>
              </a>
            </Link>
          ))}
        </S.ReaminingPostsList>
      </S.RemainingPosts>
    </Layout>
  )
}

export default Posts
