import theme from 'src/styles/theme'
import styled from 'styled-components'

export const Wrapper = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  border: none;
  color: ${theme.colors.white};
  font-size: 1.6rem;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.32s ease-in-out;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);

    cursor: pointer;
    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 0.7s;
    }
    &:after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: 0.7s;
    }
  }

  &:active {
    background-color: ${theme.colors.blue};
  }
`

export const Arrow = styled.div`
  padding: 2px 2px 2px 8px;
  display: block;
`
