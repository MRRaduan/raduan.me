import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-color: ${theme.colors.black};
  position: relative;
  height: calc(100vh - 150px);
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${media.greaterThan('large')`
    max-width: 30vw;
    left: inherit;
    right: 0;
  `}
  .aboutMe__img {
    object-fit: cover;
    object-position: center;
    position: relative;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      359.89deg,
      #000000 25.44%,
      rgba(0, 0, 0, 0) 71.28%
    );
    ${media.greaterThan('large')`
      display: none;
  `}
  }
`

export const PageTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  z-index: 1;
  position: relative;
  padding: 28px 0 0 20px;
  ${media.greaterThan('large')`
    font-size: 1.6rem;
    padding: 52px 0 0 60px;
  `}
`

export const TitleWrapper = styled.div`
  width: 320px;
  position: relative;
  margin: 0 auto;
  display: block;

  ${media.greaterThan('medium')`
    width: 490px;
  `}
  ${media.greaterThan('large')`
    width: max-content;
    /* margin-left: 70px; */
    /* margin-right: clamp(100px, 25vw, 200px); */
    margin-right: 25vw;
   
  `}
`

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 56px;
  width: 100%;
  ${media.greaterThan('large')`
    bottom: inherit;
    top: 22vh;
  `}
`

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 1.2em;
  ${media.greaterThan('medium')`
    font-size: 4.2rem;
  `}
  ${media.greaterThan('large')`
    font-size: 6.2rem;
  `}
`

export const CaptionWrapper = styled.div`
  position: relative;
`

export const Caption = styled.span`
  margin: 1.2rem 0 0 6rem;
  font-size: 1.2rem;
  display: block;
  ${media.greaterThan('large')`
    font-size: 2.2rem;
    margin-top: 2.2rem;
  `}
`

export const Subtitle = styled.span`
  font-size: 0.9rem;
  display: block;
  margin: 16px 0 0 20px;
  ${media.greaterThan('large')`
    font-size: 1.2rem;
    margin-top: 70px;
  `}
`
