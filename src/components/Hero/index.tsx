import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import Button from '../Button'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const bg = useRef(null)
  const content = useRef(null)
  const aboutButton = useRef<HTMLDivElement>(null)
  const img = useRef(null)
  const [tl, setTl] = useState(() => gsap.timeline())

  useEffect(() => {
    tl.fromTo(
      content.current,
      { y: 200 },
      { y: 0, zIndex: 151, ease: 'Power1.easeInOut' },
      2
    )
      .to(
        bg.current,
        {
          opacity: 0,
          transformOrigin: 'top left',
          ease: 'Power1.easeInOut',
          display: 'none',
        },
        '<'
      )
      .fromTo(
        img.current,
        { x: -10, opacity: 0, ease: 'Power1.easeInOut' },
        {
          x: 0,
          opacity: 1,
          duration: '1.2',
          ease: 'Power1.easeInOut',
        },
        '<'
      )
      .fromTo(
        aboutButton.current,
        { y: 10, opacity: 0, ease: 'Power1.easeInOut' },
        {
          y: 0,
          opacity: 1,
          duration: '1',
          ease: 'Power1.easeInOut',
        },
        '<'
      )
  }, [tl])

  return (
    <S.Section>
      <S.ImageBg ref={img}>
        <Image
          width="303"
          height="341"
          src="/images/hero-mobile.png"
          layout="fixed"
        />
      </S.ImageBg>
      <S.Content ref={content}>
        <S.Hello>Hello! I'm Matheus Raduan</S.Hello>
        <S.Function>
          Created to <br /> <span className="italic">Build</span>
          <span className="e">&nbsp;&&nbsp;</span>
          <span className="italic">Maintain</span>
        </S.Function>
        <S.ButtonWrapper>
          <Button ref={aboutButton}>about me</Button>
        </S.ButtonWrapper>
      </S.Content>
      <S.Bg ref={bg} />
    </S.Section>
  )
}

export default Hero
