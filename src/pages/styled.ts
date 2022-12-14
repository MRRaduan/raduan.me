import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  margin-top: 2px;
  grid-row-gap: 2px;
  height: 100%;
  ${media.greaterThan('large')`
    margin-top: 3px;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
  `}
`
