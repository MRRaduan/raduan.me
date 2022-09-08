import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Header = styled.header`
  width: calc(100% - 12px);
  display: flex;
  background-color: ${theme.colors.black};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 7.3rem;
  margin-bottom: 2px;
  position: fixed;
  top: 6px;
  left: 6px;
  border-radius: 12px 12px 0 0;
  ${media.greaterThan('medium')`
    top: 15px;
    left: 15px;
    border-radius: 15px 0px 0 15px;
    height: calc(100vh - 30px);
    width: max-content;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    margin-bottom:0;
  `}
`

export const Profile = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const Avatar = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    margin-bottom: 10px;
  `}
`

export const Role = styled.span`
  display: none;
  font-size: 1.2rem;
  color: ${theme.colors.white};
  font-family: ${theme.font.serif};
  ${media.greaterThan('medium')`
    display: block;
    margin-top: 5px;
  `}
`

export const Menu = styled.nav``

export const MenuItems = styled.ul`
  display: flex;
  ${media.greaterThan('medium')`
    flex-direction: column;
  `}
`

export const MenuItem = styled.li`
  font-size: 1.6rem;
  list-style: none;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
  ${media.greaterThan('medium')`
    margin: 5px 0;
    font-size: 2.2rem;
  `}
`

export const Lines = styled.div`
  display: none;
  > .line {
    width: 2.8rem;
    height: 0.1rem;
    background-color: ${theme.colors.white};
    display: block;
    margin: 8px 0;
  }
  ${media.greaterThan('medium')`
    display: block;
    margin-top: 32px;
  `}
`

export const SDG = styled.span`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    font-size: 1.6rem;
    font-family: ${theme.font.serif};
    font-style: italic;
  `}
`
