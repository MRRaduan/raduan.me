import { useState } from 'react'
import { TPost } from 'src/pages/blog'
import Button from '../Button'
import * as S from './styled'

type TPostLinkProps = TPost & { isShowcase?: boolean }

const PostLink = ({
  title,
  description,
  tag,
  date,
  isShowcase,
}: TPostLinkProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`post__wrapper ${isHover ? 'persist__opacity' : ''} ${
        isShowcase ? '--showcase' : ' '
      }`}
    >
      <S.PostCategory>
        <S.Circles>
          <div className="circle blue"></div>
          <div className="circle red"></div>
          <div className="circle white"></div>
        </S.Circles>
        {tag} &nbsp;
        <S.PostDate> - {date}</S.PostDate>
      </S.PostCategory>
      <S.PostDescriptionWrapper>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
        {isShowcase && (
          <S.ButtonWrapper>
            <Button>read post</Button>
          </S.ButtonWrapper>
        )}
      </S.PostDescriptionWrapper>
    </S.Wrapper>
  )
}

export default PostLink
