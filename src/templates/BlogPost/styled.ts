import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const PostContent = styled.div`
  background-color: ${theme.colors.black};
  margin-top: 2px;
  ${media.greaterThan('large')`
    margin-top: 3px;
  `}
`

export const PostContentWrapper = styled.div`
  width: calc(100% - 80px);
  margin: 40px auto;
  display: block;
  max-width: 680px;
  font-size: 1.6rem;
  line-height: 1.6em;
  ${media.greaterThan('large')`
    font-size: 2rem;
    margin-top: 80px;
  `}

  h2 {
    font-family: ${theme.font.serif};
    line-height: 1.6em;
    margin-top: 2rem;
  }

  p {
    margin-top: 2rem;
  }
`
