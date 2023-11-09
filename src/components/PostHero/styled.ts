import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Bg = styled.section`
  width: 100%;
  background-color: ${theme.colors.black};
`

export const ImgBg = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9) 20%,
      rgba(0, 0, 0, 0.45)
    );
    width: 100%;
    height: 100%;
  }
`

export const Wrapper = styled.section`
  padding: 0 20px;
  position: relative;

  ${media.greaterThan('large')`
    padding: 40px;
  `}
`

export const PageTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  z-index: 1;
  position: relative;
  padding: 28px 0 0 0px;

  ${media.greaterThan('large')`
    font-size: 1.6rem;
    padding: 12px 0 0 0px;
  `}
`

export const PostTitle = styled.h1`
  font-family: ${theme.font.serif};
  font-size: 3.2rem;
  color: ${theme.colors.white};
  margin-top: 16px;
  font-weight: 300;
  line-height: 1.2em;
  ${media.greaterThan('large')`
    margin-top: 28px;
    font-size: 7.2rem;
    width: 840px;
  `}
`

export const PostDescription = styled.h2`
  margin-top: 8px;
  font-size: 2rem;
  font-weight: 300;
  font-family: ${theme.font.sans};
  color: ${theme.colors.white};
  ${media.greaterThan('large')`
    margin-top: 20px;
    font-size: 3.2rem;
    width: 600px;
  `}
`

export const SVGWrapper = styled.div`
  margin: 32px 0;
  ${media.greaterThan('large')`
    margin: 40px 0 0 0;
  `}
`

export const PostMetadataWrapper = styled.div`
  border-top: solid 1px #fcfcfc;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(252, 252, 252, 0.2);
`

export const DateWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  ${media.greaterThan('large')`
    padding: 0;
  `}
`

export const PostReadingInfo = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;

  .small {
    text-transform: none;
    font-size: 1.4rem;
    margin-top: 4px;
  }

  &:nth-child(2) {
    padding: 0 20px;
  }
`
