import Image from 'next/image'
import { TPost } from 'src/pages/blog'
import Button from '../Button'
import Post from '../Post'
import * as S from './styled'

type TShowcasePostProps = TPost
const ShowcasePost = (props: TShowcasePostProps) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Post {...props} />
        <S.ButtonWrapper>
          <Button>read post</Button>
        </S.ButtonWrapper>
      </S.ContentWrapper>
      <S.ImgWrapper>
        <Image src="/images/nqn.jpeg" layout="fill" objectFit="cover" />
      </S.ImgWrapper>
    </S.Wrapper>
  )
}

export default ShowcasePost
