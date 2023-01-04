import * as S from './styled'

import SVGLines from 'public/images/lines-horizontal.svg'
import { TPost } from 'src/pages/blog'

type TPostHeroProps = TPost

const PostHero = ({
  title,
  description,
  date,
  tag,
  thumbnail,
}: TPostHeroProps) => {
  return (
    <S.Wrapper>
      <S.PageTitle>Post</S.PageTitle>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
      <S.SVGWrapper>
        <SVGLines />
      </S.SVGWrapper>
    </S.Wrapper>
  )
}

export default PostHero
