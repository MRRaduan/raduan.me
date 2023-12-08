import { useEffect, useRef } from 'react'
import * as S from './styled'
import CursorLogic from './cursor'

const Cursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = new CursorLogic(cursorRef.current)
    ;[...document.querySelectorAll('a, button, iframe')].forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.emit('enter'))
      el.addEventListener('mouseleave', () => cursor.emit('leave'))
    })
  }, [])

  return (
    <S.Wrapper>
      <svg
        className="cursor"
        width="280"
        height="280"
        viewBox="0 0 280 280"
        ref={cursorRef}
        style={{ zIndex: 999 }}
      >
        <defs>
          <filter
            id="filter-1"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.15"
              numOctaves="3"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="0"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
        <circle className="cursor__inner" cx="140" cy="140" r="50" />
      </svg>
    </S.Wrapper>
  )
}

export default Cursor
