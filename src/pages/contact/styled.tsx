import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const ContactHero = styled.section`
  background-color: ${theme.colors.black};
  width: 100%;
  height: 100%;
  padding: 0px 20px 95px 20px;
  position: relative;

  ${media.greaterThan('large')`
    padding: 52px 60px;
    height: calc(100vh - 102px);
    display: flex;
    align-items: center;
  `}
`

export const Title = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  z-index: 1;
  position: relative;
  padding-left: 20px;
  ${media.greaterThan('large')`
    font-size: 1.6rem;
    padding-left: 60px;
  `}
`

export const CallTextWrapper = styled.div`
  position: relative;
  margin: 2rem auto 0 auto;
  width: 310px;
  ${media.greaterThan('large')`
    width: 605px;
    margin-top: -150px;
  `}
`

export const TextCall = styled.h1`
  font-size: 7.2rem;
  line-height: 0.95em;
  font-family: ${theme.font.serif};
  font-weight: 300;
  display: block;
  position: relative;
  z-index: 1;
  ${media.greaterThan('large')`
    font-size: 15.0rem;
  `}
`

export const MessageText = styled.div`
  display: block;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  border: solid 1px ${theme.colors.white};
  border-radius: 100%;
  padding: 10px;
  width: 105px;
  position: absolute;
  top: 12px;
  right: 0;
  z-index: 1;
  ${media.greaterThan('large')`
    font-size: 1.8rem;
    border-width: 2px;
    padding: 19px 27px;
    width: 160px;
    margin-top: 3rem;
  `}
`

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  pointer-events: none;

  &:before {
    pointer-events: none;
    content: '';
    position: absolute;
    width: 200px;
    aspect-ratio: 1/1;
    display: block;
    top: 50px;
    left: calc(50% - 100px);
    background-image: linear-gradient(
      180deg,
      rgba(72, 141, 169, 0.5) 15.34%,
      rgba(188, 90, 85, 0.5) 66.79%,
      rgba(212, 156, 115, 0.5) 90.75%
    );
    border-radius: 23% 77% 1% 99% / 71% 100% 0% 29%;
    ${media.greaterThan('large')`
      width: 490px;
      top: calc(50% - 320px);
      left: calc(50% - 245px);
    `}
  }

  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    backdrop-filter: blur(25px);
    ${media.greaterThan('large')`
      backdrop-filter: blur(55px);
      height: calc(100% - 120px);
    `}
  }
`

export const ContentWrapper = styled.div`
  position: relative;
`

export const CallWrapper = styled.div`
  background-color: ${theme.colors.black};
  padding-top: 28px;
  position: relative;
  width: 100%;

  ${media.greaterThan('large')`
    padding-top: 52px;
  `}
`

export const ContactLinksWrapper = styled.section`
  margin-top: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: calc(100vh - 375px);
  grid-gap: 2px;
  ${media.greaterThan('large')`
    margin: 0px 0 0 3px;
    width: 40%;
    height: 100%;
    grid-template-columns: none;
    grid-template-rows: none;
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

export const AllContentWrapper = styled.div`
  ${media.greaterThan('large')`
    display: flex;
  `}
`
