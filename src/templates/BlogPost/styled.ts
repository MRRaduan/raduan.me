import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const PostContent = styled.div`
  background-color: ${theme.colors.black};
  margin-top: 2px;
  padding: 0px 0px 40px 0;
  ${media.greaterThan('large')`
    margin-top: 3px;
    padding: 40px 0 60px 0;
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
  ul,
  li {
    margin-left: 1em;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    > iframe {
      width: 100%;
      aspect-ratio: 16 / 9;
      /* position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%; */
    }
  }
`
