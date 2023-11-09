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
  z-index: 149;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: ${theme.colors.blue} 0%;

    ${media.greaterThan('medium')`
    display: none;
  `}
  }
  ${media.greaterThan('medium')`
    top: 15px;
    left: 15px;
    border-radius: 15px 0px 0 15px;
    height: calc(100vh - 30px);
    width: 320px;
    flex-direction: column;
    align-items: center;
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

  transition: 0.16s;
  ${media.greaterThan('medium')`
    display: block;
    margin-bottom: 10px;
  `}
  &:hover {
    transform: scale3d(1.2, 1.2, 1.2);
    transition: 0.16s;

    & ~ .logo {
      transform: translate3d(0, 20px, 0);

      transition: 0.23s;
    }
  }

  & ~ .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.12s;
  }
`

export const Role = styled.span`
  display: none;
  font-size: 1.2rem;
  color: ${theme.colors.white};
  font-family: ${theme.font.serif};
  ${media.greaterThan('medium')`
  font-size: 1.6rem;
  color: ${theme.colors.white};
    display: block;
    margin-top: 5px;
  `}
`

export const RoleDescription = styled.p`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    margin-top: 16px;
    color: ${theme.colors.gray};
    text-align: center;
    font-family: ${theme.font.sans};
    font-size: 1.6rem;
  `}
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuItems = styled.ul`
  display: flex;
  ${media.greaterThan('medium')`
    flex-direction: column;
    align-items: center;
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

export const SDGAbreviation = styled.span``
export const SDGFull = styled.span`
  display: none;
`

export const SDG = styled.span`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    font-size: 1.6rem;
    font-family: ${theme.font.serif};
    font-style: italic;
  `}

  &:hover {
    ${SDGFull} {
      display: block;
      font-size: 1.6rem;
    }
    ${SDGAbreviation} {
      display: none;
    }
  }
`
