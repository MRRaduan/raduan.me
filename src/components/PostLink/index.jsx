import { useState } from 'react'
import Button from '../Button'
import * as S from './styled'
import { formatDate } from 'src/utils'

const PostLink = ({
  title,
  description,
  sys,
  tagCollection,
  isShowCase,
  customDate,
}) => {
  const postDate = formatDate(customDate ? customDate : sys.publishedAt)

  const [isHover, setIsHover] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`post__wrapper ${isHover ? 'persist__opacity' : ''} ${
        isShowCase ? '--showcase' : ' '
      }`}
    >
      <S.PostCategory>
        <S.Circles>
          <div className="circle blue"></div>
          <div className="circle red"></div>
          <div className="circle white"></div>
        </S.Circles>
        {tagCollection.items[0].tagName} &nbsp;
        <S.PostDate> - {postDate}</S.PostDate>
      </S.PostCategory>
      <S.PostDescriptionWrapper>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
        {isShowCase && (
          <S.ButtonWrapper>
            <Button>read post</Button>
          </S.ButtonWrapper>
        )}
      </S.PostDescriptionWrapper>
    </S.Wrapper>
  )
}

export default PostLink
