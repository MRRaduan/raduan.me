import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  margin-top: 2px;
  grid-row-gap: 2px;
  height: 100%;

  ${media.greaterThan('large')`
    display: grid;
    margin-top: 3px;
    grid-gap: 3px;
    grid-template-columns: 1.2fr 1fr;
    height: calc(100vh - 390px);
  `}
`
