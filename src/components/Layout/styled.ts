import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(transparent, transparent),
    linear-gradient(
      180deg,
      ${theme.colors.blue} 0%,
      ${theme.colors.red} 74.48%,
      ${theme.colors.orange} 100%
    );
  z-index: 1;
  padding: 6px;
  overflow-y: auto;
  ${media.greaterThan('medium')` 
    padding: 15px;
  `}

  .layout-direction {
    margin-top: 73px;
    ${media.greaterThan('medium')` 
    height: 100%;
      display: flex;
      margin-top: 0;
      margin-left: 190px;
    `}
  }
`

export const Borders = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  border-radius: 24px;
  border: double 6px transparent;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(
      180deg,
      ${theme.colors.blue} 0%,
      ${theme.colors.red} 74.48%,
      ${theme.colors.orange} 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  ${media.greaterThan('medium')` 
    border-width: 15px;
    /* overflow-y: hidden; */
  `}
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
