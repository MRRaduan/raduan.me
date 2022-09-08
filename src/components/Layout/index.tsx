import React, { useEffect } from 'react'
import Cursor from '../Cursor'
import Header from '../Header'
import * as S from './styled'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.Layout>
        <S.Borders>
          <div className="layout-direction">
            <Header />
            <S.ContentWrapper>{children}</S.ContentWrapper>
          </div>
        </S.Borders>
        <Cursor />
      </S.Layout>
    </>
  )
}

export default Layout
