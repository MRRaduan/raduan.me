import Link from 'next/link'
import { TPost } from 'src/pages/blog'
import Button from '../Button'
import Post from '../Post'
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
        {allPostsData.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <a>
              <Post {...post} />
            </a>
          </Link>
        ))}
      </S.PostList>
    </S.Wrapper>
  )
}

export default LatestPosts
