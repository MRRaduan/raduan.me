import Link from 'next/link'
import Button from '../Button'
import Post from '../Post'
import * as S from './styled'

const LatestPosts = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Latest posts</S.Title>
        <Button>see all</Button>
      </S.TitleWrapper>
      <S.PostList>
        {[0, 1].map((post) => (
          <Link href="/post" key={post}>
            <a>
              <Post />
            </a>
          </Link>
        ))}
      </S.PostList>
    </S.Wrapper>
  )
}

export default LatestPosts
