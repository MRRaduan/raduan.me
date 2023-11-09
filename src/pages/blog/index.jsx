import Link from 'next/link'
import Layout from 'src/components/Layout'
import PostLink from 'src/components/PostLink'
import ShowcasePost from 'src/components/ShowcasePost'
import { getAllPosts } from 'src/utils/contentful'

import * as S from './styled'

const Posts = ({ posts }) => {
  const showCasePosts = posts.slice(0, 2)
  const ramainingPosts = posts.slice(2)

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
              <Link href={`/blog/${props.slug}`} key={props.slug}>
                <S.ShowcasePostItem key={props.slug}>
                  <ShowcasePost {...props} />
                </S.ShowcasePostItem>
              </Link>
            ))}
          </S.ShowcasePostList>
        </S.ShowcasePostsWrapper>
      </S.BlogWrapper>
      {ramainingPosts.length !== 0 && (
        <S.RemainingPosts>
          <S.ReaminingPostsList>
            {ramainingPosts.map((props) => (
              <Link href={`/blog/${props.slug}`} key={props.slug}>
                <a>
                  <S.ReaminingPostsItem key={props.slug}>
                    <PostLink {...props} />
                  </S.ReaminingPostsItem>
                </a>
              </Link>
            ))}
          </S.ReaminingPostsList>
        </S.RemainingPosts>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Posts
