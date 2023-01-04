import Image from 'next/image'
import { TPost } from 'src/pages/blog'
import PostLink from '../PostLink'
import * as S from './styled'

type TShowcasePostProps = TPost
const ShowcasePost = (props: TShowcasePostProps) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <PostLink {...props} isShowcase />
      </S.ContentWrapper>
      <S.ImgWrapper>
        <Image src="/images/nqn.jpeg" layout="fill" objectFit="cover" />
      </S.ImgWrapper>
    </S.Wrapper>
  )
}

export default ShowcasePost
