import SVGTopRight from 'public/images/arrow-top-right.svg'
import { useState } from 'react'
import * as S from './styled'

type GetInTouchLinkProps = {
  name: string
}

const GetInTouchLink = ({ name }: GetInTouchLinkProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <>
      <S.ContactLink
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className={`post__wrapper ${isHover ? 'persist__opacity' : ''}`}>
          {name}
        </span>

        <S.SVGLink className="arrow">
          <SVGTopRight />
        </S.SVGLink>
      </S.ContactLink>
    </>
  )
}

export default GetInTouchLink
