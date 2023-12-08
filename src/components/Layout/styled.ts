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
  ${media.greaterThan('medium')` 
    padding: 15px;
  `}

  .layout-direction {
    margin-top: 67px;
    height: calc(100% - 73px);
    ${media.greaterThan('medium')` 
    height: 100%;
      display: flex;
      margin-top: 0;
      margin-left: 323px;
    `}
  }
`

export const Borders = styled.div`
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  border-radius: 24px;
  border: double 0px transparent;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(
      180deg,
      ${theme.colors.blue} 0%,
      ${theme.colors.red} 74.48%,
      ${theme.colors.orange} 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.greaterThan('medium')` 
    border-width: 15px;
  `}
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin-top: -2px;

  ${media.greaterThan('medium')` 
    position: fixed;
    overflow-y: auto;
    width: calc(100% - 353px);
    height: calc(100% - 30px);
    border-radius: 0 15px 15px 0;
    margin-top: 0;
  `}
`

export const ContentWrapperScroll = styled.div`
  ${media.greaterThan('medium')` 
    overflow-y: clip;
  `}
`
