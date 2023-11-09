import * as S from './styled'

import SVGLines from 'public/images/lines-horizontal.svg'
import { TPost } from 'src/pages/blog'
import { formatDate } from 'src/utils'

type TPostHeroProps = TPost

const PostHero = ({ title, image, description, tagCollection, sys }) => {
  return (
    <S.Bg>
      <S.Wrapper>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <S.PageTitle>Post</S.PageTitle>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
          <S.SVGWrapper>
            <SVGLines />
          </S.SVGWrapper>
        </div>
        <S.ImgBg style={{ backgroundImage: `url(${image.url})` }} />
      </S.Wrapper>
      <S.Divider />
      <S.Wrapper>
        <S.DateWrapper>
          <S.PostReadingInfo>
            DATE
            <div className="small">{formatDate(sys.publishedAt)}</div>
          </S.PostReadingInfo>
          <S.PostReadingInfo>
            TIME
            <div className="small">12 min</div>
          </S.PostReadingInfo>
          <S.PostReadingInfo>
            TAGS
            <div className="small">{tagCollection.items[0].tagName}</div>
          </S.PostReadingInfo>
        </S.DateWrapper>
      </S.Wrapper>
    </S.Bg>
  )
}

export default PostHero
