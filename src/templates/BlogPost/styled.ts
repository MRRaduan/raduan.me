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
  width: calc(100% - 40px);
  margin: 0 auto;
  display: block;
  max-width: 680px;
  font-size: 1.6rem;
  line-height: 1.6em;
  ${media.greaterThan('large')`
    font-size: 2rem;
  `}

  h2 {
    font-family: ${theme.font.serif};
    line-height: 1.6em;
    margin-top: 3rem;
  }

  h3,
  h4 {
    font-family: ${theme.font.serif};
    margin-top: 3rem;
  }

  p {
    margin-top: 2rem;
    display: inline-block;
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
