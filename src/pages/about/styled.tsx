import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-color: ${theme.colors.black};
  position: relative;
  min-height: calc(100vh - 190px);
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${media.greaterThan('large')`
    max-width: 35vw;
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

export const AboutMeContent = styled.section`
  background-color: ${theme.colors.black};
  width: 100%;
  margin-top: 2px;

  ${media.greaterThan('large')`
    padding-top: 100px;
    margin-top: 3px;
  `}

  .img {
    display: block;
    object-fit: cover;
    object-position: center center;
  }

  .img-border {
    border: solid 1px ${theme.colors.white};
  }
`

export const AboutContentWrapper = styled.div`
  width: calc(100% - 40px);
  display: block;
  margin: 0 auto;
  max-width: 700px;
  padding-bottom: 100px;

  h1 {
    font-family: ${theme.font.serif};
    font-size: 3.2rem;
    font-weight: 300;
    line-height: 1em;
    margin: 56px 0 32px 0;

    ${media.greaterThan('large')`
      font-size: 4rem;
    `}
  }

  h2 {
    margin: 56px 0 32px 0;
    font-size: 2.4rem;
    font-weight: bold;
  }

  p {
    font-family: ${theme.font.normal};
    font-size: 1.8rem;
    color: #ffffff;
    line-height: 1.5em;
    margin: 16px 0 0;

    ${media.greaterThan('large')`
      font-size: 2rem;
    `}
  }

  a {
    text-decoration: underline;
    background-color: #f3ec78;
    background-image: linear-gradient(
      45deg,
      ${theme.colors.blue},
      ${theme.colors.red} 60%,
      ${theme.colors.orange}
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`

export const QuoteWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${media.greaterThan('large')`
    padding: 56px 0;
  `}
`

export const QuoteAuthor = styled.p`
  font-family: ${theme.font.serif};
`

export const Quote = styled.q`
  color: ${theme.colors.white};
  font-family: ${theme.font.serif};
  font-style: italic;
  font-size: 1.8rem;
  text-align: center;
  display: block;

  ${media.greaterThan('large')`
    font-size: 2.8rem;
  `}
`

export const IllustrationWrapper = styled.figure`
  width: 100%;
  height: 115px;
  position: relative;
  margin-top: 32px;

  ${media.greaterThan('large')`
    height: 246px;
  `}
`

export const FigCaption = styled.figcaption`
  display: block;
  font-size: 1.2rem;
  margin-top: 0.8rem;
  line-height: 1.5em;
  max-width: 386px;
  margin: 0 auto;
`

export const HistoryContentWrapper = styled.div`
  ${media.greaterThan('large')`
    display: flex;
  `}
`

export const HistoryTextWrapper = styled.div`
  ${media.greaterThan('large')`
     width: 292px;
  `}
`

export const UnblackMetalPicWrapper = styled.div`
  ${media.greaterThan('large')`
     width: 386px;
     margin-left: 2.2rem;
     margin-top: 56px;
  `}
`

export const UnblackMetalPic = styled.figure`
  position: relative;
  width: 100%;
  height: 405px;
  margin-top: 2.2rem;
  .img {
    object-fit: contain;
  }

  ${media.greaterThan('large')`
    height: 489px;
  `}
`
