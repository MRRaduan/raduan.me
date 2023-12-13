import theme from 'src/styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @keyframes arrowback {
    from {
      transform: translate3d(0, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(-8px, 0, 0);
      opacity: 1;
    }
  }

  &:hover {
    svg {
      animation-name: arrowback;
      animation-iteration-count: infinite;
      animation-direction: forwards;
      animation-duration: 0.64s;
      animation-timing-function: ease-in;
    }
  }
`

export const Title = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 300;
  z-index: 1;
  position: relative;
  margin-left: 6px;

  ${media.greaterThan('large')`
    font-size: 1.6rem;
  `}
`

export const ArrowWrapper = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  > svg {
    width: 20px;
  }
`
