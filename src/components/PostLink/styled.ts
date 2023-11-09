import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

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

export const PostDescriptionWrapper = styled.div``

export const PostTitle = styled.h1`
  font-family: ${theme.font.serif};
  font-size: 2.2rem;
  color: ${theme.colors.white};
  font-weight: 300;
  margin-bottom: 4px;

  ${media.greaterThan('huge')`
    font-size: 2.8rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.6rem;
  color: ${theme.colors.gray};
  font-weight: 300;
  margin-top: 2px;
  ${media.greaterThan('huge')`
    font-size: 1.8rem;
  `}
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

export const Wrapper = styled.section`
  /* background-color: ${theme.colors.black}; */
  padding: 12px 20px;

  &.--showcase {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${PostTitle} {
      font-size: 3.2rem;
      font-family: ${theme.font.sans};
    }

    ${media.greaterThan('large')` 
      justify-content: center;
      ${PostTitle}{
        font-size: 3.8rem;
      }
      ${PostCategory}{
        font-size: 1.8rem;
        position: absolute;
        top: 18px;
        left: 20px;
      }
      ${PostDescriptionWrapper} {
        margin-top: 70px;
        width: 100%;
        max-width: 400px;
      }
      .circle {
        width: 15px;
        height: 15px;
        border-width: 2px;
      }
      
    `}
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`
