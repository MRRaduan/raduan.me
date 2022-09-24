import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``

export const PostDate = styled.time``

export const PostCategory = styled.div`
  font-family: ${theme.font.serif};
  font-size: 1.4rem;
  color: ${theme.colors.white};
  font-weight: 300;
  display: flex;
  align-items: center;
  ${media.greaterThan('medium')`
    font-size: 1.6rem;
  `}
`

export const PostTitle = styled.h1`
  font-family: ${theme.font.serif};
  font-size: 2.2rem;
  color: ${theme.colors.white};
  font-weight: 300;
  margin-bottom: 8px;

  ${media.greaterThan('huge')`
    font-size: 2.4rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.6rem;
  color: ${theme.colors.gray};
  font-weight: 300;
  margin-top: 2px;
`

export const Circles = styled.div`
  display: flex;
  margin-right: 8px;
  > .circle {
    width: 10px;
    height: 10px;
    background: transparent;
    border: solid 1px white;
    border-radius: 100%;
    &:nth-child(2) {
      margin: 0 4px;
    }
  }

  > .red {
    border-color: ${theme.colors.red};
  }
  > .blue {
    border-color: ${theme.colors.blue};
  }
`
