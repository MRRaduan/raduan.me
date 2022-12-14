import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  width: 100%;
  min-height: 357px;
  height: 100%;
  background-color: ${theme.colors.black};
  /* position: relative; */
  ${media.greaterThan('medium')`
    height: auto;
  `}
  > h1 {
    position: relative;
  }
`

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.black};
  z-index: 149;
`

export const ImageBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: 0;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, black -4%, transparent 150%),
      linear-gradient(26deg, black 24%, transparent 59%);
  }
`

export const Content = styled.div`
  z-index: 1;
  position: relative;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding-top: 120px;
  z-index: 150;
  ${media.greaterThan('medium')`
    padding: 6rem 0 6rem 6rem;
    height: 344px;
  `}
`

export const Hello = styled.h1`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${theme.colors.white};
`

export const Function = styled.h2`
  font-size: 40px;
  font-weight: 300;
  line-height: 1.175em;
  margin-top: 4px;
  ${media.greaterThan('medium')`
    font-size: 5.7rem;
  `} ${media.greaterThan('large')`
    font-size: 7.2rem;
  `} > .italic,
    .e {
    font-family: ${theme.font.serif};
    font-style: italic;
    font-weight: bold;
  }

  > .italic {
    color: ${theme.colors.white};
  }

  > .e {
    font-weight: 300;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
`
