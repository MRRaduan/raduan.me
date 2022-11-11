import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const ContactLink = styled.div`
  /* flex-grow: 1; */
  background-color: ${theme.colors.black};
  position: relative;
  /* margin: 2px 0; */
  padding: 40px 20px;
  height: 100%;
  font-size: 3.2rem;
  font-family: ${theme.font.serif};
  display: flex;
  align-items: center;

  ${media.greaterThan('large')`
    padding: 40px 60px;
    font-size: 4rem;
    &:first-child {
      margin-top: 0;
    }
  `}

  > .arrow {
    opacity: 0;
    transform: translate3d(-30px, 5px, 0);
    transition: all ease-in-out 0.16s;
    display: none;

    ${media.greaterThan('large')`
      display: block;
    `}
  }

  &:hover {
    > .arrow {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: all ease-in-out 0.16s;
    }
  }
`

export const SVGLink = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
`
