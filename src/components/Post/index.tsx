import { useState } from 'react'
import * as S from './styled'

const Post = () => {
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
        JS &nbsp;
        <S.PostDate> - 07 de setembro de 2022</S.PostDate>
      </S.PostCategory>
      <S.PostTitle>Improve your motion with Styled Components</S.PostTitle>
      <S.PostDescription>
        How use StyledComponents to animate in smart way
      </S.PostDescription>
    </S.Wrapper>
  )
}

export default Post
