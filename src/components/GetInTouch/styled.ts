import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.a`
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.3rem 2rem;
  flex: 1;
  cursor: pointer;

  ${media.greaterThan('medium')`
    padding: 50px;
    display: block;
    order: 2;
  `}

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    }
  }

  .circle-get-in-touch_svg__circle__inner, .circle-get-in-touch_svg__circle__out  {
    transition: all .2s ease-in-out;
  }
  &:hover {
    .circle-get-in-touch_svg__circle__inner {
      animation: rotation 5s infinite linear;
      animation-fill-mode: forwards;
      transform-origin: center;
      transition: all .2s ease-in-out;
    }
    .circle-get-in-touch_svg__circle__out {
      animation: rotation 9s infinite linear ;
      animation-fill-mode: forwards;
      transform-origin: center;
      transition: all .2s ease-in-out;
    }
  }
`

export const Title = styled.h1`
  font-size: 2.8rem;
  color: ${theme.colors.white};
  font-family: ${theme.font.serif};
  font-weight: 300;
  position: relative;
  ${media.greaterThan('medium')`
    font-size: 11.0rem;
    width: 31.0rem;
    line-height: 0.95em;
  `}
`

export const CircleWrapper = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    /* display: none; */
    position: absolute;
    right: -100px;
    top: -55px;
  `}
`

export const Lines = styled.ul`
  display: flex;
  > .line {
    width: 0.1rem;
    height: 1.2rem;
    background-color: ${theme.colors.white};
    display: block;
    margin: 0px 3px;
  }
  ${media.greaterThan('medium')`
    display: none;
  `}
`
