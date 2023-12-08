import theme from 'src/styles/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  > .cursor {
    display: none;
  }

  @media (any-pointer: fine) {
    .cursor {
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      pointer-events: none;
      opacity: 0;
    }
    .cursor__inner {
      fill: transparent;

      stroke: ${theme.colors.white};
      stroke-width: 1px;
    }
  }
`
