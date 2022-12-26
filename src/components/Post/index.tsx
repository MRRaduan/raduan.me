import { useState } from 'react'
import { TPost } from 'src/pages/blog'
import * as S from './styled'

type TPostProps = TPost

const Post = ({ title, description, tag, date }: TPostProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <S.Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`post__wrapper ${isHover ? 'persist__opacity' : ''}`}
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
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostDescription>{description}</S.PostDescription>
    </S.Wrapper>
  )
}

export default Post
