import Link from 'next/link'
import { TPost } from 'src/pages/blog'
import Button from '../Button'
import PostLink from '../PostLink'
import * as S from './styled'

type TLatestPostsProps = {
  posts: TPost[]
}

const LatestPosts = ({ posts }) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Latest posts</S.Title>
        <Link href="/blog" passHref>
          <a>
            <Button>see all</Button>
          </a>
        </Link>
      </S.TitleWrapper>
      <S.PostList>
        {posts.slice(0, 2).map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a>
              <PostLink {...post} isShowCase={false} />
            </a>
          </Link>
        ))}
      </S.PostList>
    </S.Wrapper>
  )
}

export default LatestPosts
