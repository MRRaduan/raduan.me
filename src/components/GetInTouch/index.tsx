import * as S from './styled'
import CircleArrows from 'public/images/circle-get-in-touch.svg'

const GetInTouch = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Get in touch
        <S.CircleWrapper>
          <CircleArrows />
        </S.CircleWrapper>
      </S.Title>
      <S.Lines>
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20,
        ].map((line) => (
          <div key={line} className="line"></div>
        ))}
      </S.Lines>
    </S.Wrapper>
  )
}

export default GetInTouch
