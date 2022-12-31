import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const BlogWrapper = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    width: 100%;
  `}
`

export const BlogHero = styled.section`
  background-color: ${theme.colors.black};
  padding: 40px 20px 80px 20px;
  ${media.greaterThan('large')`
    padding: 40px 40px;
    height: 100vh;
    width: 50%;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
  `}
`
export const BlogHeroPageTitle = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  display: block;
  font-weight: 300;

  ${media.greaterThan('large')`
    font-size: 1.6rem;
    position: absolute;
    top: 40px;
    left: 40px;
  `}
`

export const BlogHeroTitleWrapper = styled.div`
  ${media.greaterThan('large')`
    margin-top: -60px;
  `}
`

export const BlogHeroTitle = styled.h1`
  margin-top: 32px;
  color: ${theme.colors.white};
  font-size: 4.2rem;
  font-family: ${theme.font.serif};
  font-weight: 300;
  ${media.greaterThan('medium')`
    font-size: 6rem;
  `}
`

export const BlogHeroText = styled.span`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-family: ${theme.font.serif};
  font-weight: 300;
  font-style: italic;
  position: relative;
  display: block;
  margin-left: 140px;
  margin-top: -29px;
  ${media.greaterThan('medium')`
    font-size: 1.8rem;
    margin-left: 200px;
    margin-top: -35px;
  `}
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    background-color: ${theme.colors.white};
    transform: rotate(45deg);
    position: absolute;
    top: -50%;
    left: 18%;
    ${media.greaterThan('medium')`
      height: 140px;
      top: -90%;
      left: 18%;
    `}
  }
`

export const ShowcasePostsWrapper = styled.section`
  ${media.greaterThan('large')`
    margin-left: 3px;
    width: 50%;
  `}
`

export const ShowcasePostList = styled.ul`
  width: 100%;
`

export const ShowcasePostItem = styled.li`
  list-style: none;
  margin-top: 2px;
  width: 100%;

  ${media.greaterThan('large')`
    height: 65vh;
    &:nth-child(1) {
      margin-top: 0px;
    }
  `}
`

export const RemainingPosts = styled.section`
  margin-top: 2px;
  background-color: ${theme.colors.black};
  padding-top: 8px;
  ${media.greaterThan('large')`
    margin-top: 3;
    padding: 60px 0;
  `}
`

export const ReaminingPostsList = styled.ul`
  width: 100%;
  margin: 20px 0;
  ${media.greaterThan('large')`
    width: 800px;
    margin: 0 auto;
  `}
`
export const ReaminingPostsItem = styled.li`
  list-style-type: none;
  margin: 12px 0;
`
