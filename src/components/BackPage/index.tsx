import React from 'react'
import * as S from './styled'
import Router from 'next/router'

type BackPageProps = {
  title: string
}

const BackPage = ({ title }: BackPageProps) => {
  return (
    <>
      <S.Wrapper onClick={() => Router.back()}>
        <S.ArrowWrapper>
          <svg
            width="77"
            height="76"
            viewBox="0 0 77 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.96 0.0770142L0.401855 38C10.074 47.4859 29.2902 66.4394 38.9606 75.9236L43.8273 71.2165C35.1288 62.6843 23.6201 51.3186 13.4659 41.3472L76.2501 41.3478L76.25 34.6522L13.4658 34.6517L43.827 4.8342L38.96 0.0770142Z"
              fill="#FCFCFC"
            />
          </svg>
        </S.ArrowWrapper>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </>
  )
}
export default BackPage
