import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'
import Post from '../Post'

export const Wrapper = styled.section`
  background-color: ${theme.colors.black};
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  ${media.greaterThan('medium')`
    padding: 40px 60px;
  `}
`

export const Title = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  display: block;
  font-weight: 300;
  margin-bottom: 1.6rem;
  ${media.greaterThan('huge')`
    margin-bottom: 3.2rem;
  `}
`

export const PostList = styled.div`
  display: grid;
  grid-gap: 24px;

  ${media.greaterThan('huge')`
    grid-gap: 40px;
  `}

  .post__wrapper {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .post__wrapper {
      opacity: 0.5;
      transition: all 0.32s ease-in-out;
    }
    .persist__opacity {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
`
