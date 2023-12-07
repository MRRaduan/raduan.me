import Image from 'next/image'
import PostLink from '../PostLink'
import * as S from './styled'

const ShowcasePost = (props) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <PostLink {...props} isShowCase />
      </S.ContentWrapper>
      <S.ImgWrapper>
        {props.image && (
          <Image src={props.image.url} layout="fill" objectFit="cover" />
        )}
      </S.ImgWrapper>
    </S.Wrapper>
  )
}

export default ShowcasePost
