import React from 'react'
import Cursor from '../Cursor'
import Header from '../Header'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <>
      <S.Layout>
        <div className="layout-direction">
          <Header />
          <S.ContentWrapper>
            <S.ContentWrapperScroll>{children}</S.ContentWrapperScroll>
          </S.ContentWrapper>
        </div>
        <Cursor />
      </S.Layout>
    </>
  )
}

export default Layout
