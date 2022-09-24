import React from 'react'
import * as S from './styled'

type ButtonProps = {
  children: React.ReactNode
}
const Button = React.forwardRef((props: ButtonProps, ref) => {
  const { children } = props
  return (
    <div ref={ref}>
      <S.Wrapper>
        {children}
        <S.Arrow>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6.00008L7.30702 5.36445L1.39364 9.15527e-05L0 1.27135L5.2127 6.00008L0 10.7288L1.39364 12.0001L7.30702 6.63572L8 6.00008V6.00008Z"
              fill="#D49B73"
            />
          </svg>
        </S.Arrow>
      </S.Wrapper>
    </div>
  )
})

Button.displayName = 'Button'

export default Button
