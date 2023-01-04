import Link from 'next/link'
import { TPost } from 'src/pages/blog'
import Button from '../Button'
import PostLink from '../PostLink'
import * as S from './styled'

type TLatestPostsProps = {
  allPostsData: TPost[]
}

const LatestPosts = ({ allPostsData }: TLatestPostsProps) => {
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
        {allPostsData.slice(0, 2).map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <a>
              <PostLink {...post} />
            </a>
          </Link>
        ))}
      </S.PostList>
    </S.Wrapper>
  )
}

export default LatestPosts
