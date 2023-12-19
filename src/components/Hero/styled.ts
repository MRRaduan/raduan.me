import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  width: 100%;
  background-color: ${theme.colors.black};
  ${media.greaterThan('medium')`
    flex-grow: 1;
    display: flex;
    align-items: center;
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
  padding-bottom: 40px;
  z-index: 147;
  ${media.greaterThan('medium')`
    margin: 0;
    padding: 4rem 0 4rem 6rem;
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
    font-size: clamp(
    5.0rem,
    calc(4.5rem + (100 - 50) * (100vw - 320px) / (1920 - 320)),
    10.0rem
  );
  `} ${media.greaterThan('large')`
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
