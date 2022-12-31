import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from 'src/components/Button'

export const Wrapper = styled.div`
  width: 100%;
  height: 341px;
  position: relative;
  background-color: ${theme.colors.black};
  background-image: linear-gradient(to right, #000 40%, #212121);
  ${media.greaterThan('large')`
    height: 100%;
    padding: 20px;
  `}
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
`
export const ImgWrapper = styled.div`
  img {
    filter: grayscale(100) blur(1px);
    opacity: 0.4;
  }
`

export const ButtonWrapper = styled.div`
  margin-left: 20px;
`
