import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background-color: ${theme.colors.black};
  width: 100%;
  height: 100%;
  padding: 40px 0px 80px 0;
  ${media.greaterThan('medium')`
    padding: 40px  40px ;
  `}
`

export const TitleWrapper = styled.div`
  padding: 0 20px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  ${media.greaterThan('huge')`
    margin-bottom: 2rem;
  `}
`

export const Title = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  display: block;
  font-weight: 300;
`

export const PostList = styled.div`
  display: grid;

  ${media.greaterThan('huge')`
    grid-gap: 20px;
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
