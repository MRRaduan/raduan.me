import Link from 'next/link'
import Post from '../Post'
import * as S from './styled'

const LatestPosts = () => {
  return (
    <S.Wrapper>
      <S.Title>Latest posts</S.Title>
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
