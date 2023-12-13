import * as S from './styled'

import SVGLines from 'public/images/lines-horizontal.svg'
import { formatDate } from 'src/utils'
import BackPage from 'src/components/BackPage'

const PostHero = ({ title, image, description, tagCollection, sys }) => {
  return (
    <S.Bg>
      <S.Wrapper>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <S.PageTitleWrapper>
            <BackPage title="post" />
          </S.PageTitleWrapper>
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
            DATE:
            <span className="small"> {formatDate(sys.publishedAt)}</span>
          </S.PostReadingInfo>
          <S.PostReadingInfo>
            TIME:
            <span className="small"> 12 min</span>
          </S.PostReadingInfo>
          <S.PostReadingInfo>
            TAGS:
            <span className="small"> {tagCollection.items[0].tagName}</span>
          </S.PostReadingInfo>
        </S.DateWrapper>
      </S.Wrapper>
    </S.Bg>
  )
}

export default PostHero
