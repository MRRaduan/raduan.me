import React from 'react'
import Cursor from '../Cursor'
import Header from '../Header'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <>
      <S.Layout>
        {/* <S.Borders> */}
        {/* <div className="layout-direction"> */}
        <Header />
        <S.ContentWrapper>{children}</S.ContentWrapper>
        {/* </div> */}
        {/* </S.Borders> */}
        <Cursor />
      </S.Layout>
    </>
  )
}

export default Layout
