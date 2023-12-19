import { useEffect, useCallback, useRef, useState } from 'react'
import * as S from './styled'
import Image from 'next/image'
import Button from '../Button'
import gsap from 'gsap'
import Link from 'next/link'
import { useFirstRender } from 'src/context/first-render'

const Hero = () => {
  const bg = useRef(null)
  const content = useRef(null)
  const aboutButton = useRef(null)
  const img = useRef(null)
  const { dispatch, state } = useFirstRender()
  const [tl, setTl] = useState(() =>
    gsap.timeline({ onComplete: () => dispatch({ type: 'loaded' }) })
  )

  const { isFirstRender } = state

  const triggerWelcomeAnimation = useCallback(() => {
    if (isFirstRender) {
      tl.fromTo(
        content.current,
        { y: 200, zIndex: 151 },
        { y: 0, zIndex: 140, ease: 'Power1.easeInOut' },
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
    }
  }, [isFirstRender, tl])

  useEffect(() => {
    triggerWelcomeAnimation()
  }, [tl, triggerWelcomeAnimation])

  return (
    <S.Section>
      {/* <S.ImageBg ref={img}>
        <Image
          width="303"
          height="341"
          src="/images/hero-mobile.png"
          layout="fixed"
          alt="Christian of John Bunyan daydreaming"
        />
      </S.ImageBg> */}
      <S.Content ref={content} style={{ zIndex: !isFirstRender && 140 }}>
        <S.Hello>Hello! I&apos;m Matheus Raduan,</S.Hello>
        <S.Function>
          created to <br /> <span className="italic">Build</span>
          <span className="e">&nbsp;&&nbsp;</span>
          <span className="italic">Maintain</span>
        </S.Function>
        <S.ButtonWrapper>
          <Link href="/about" passHref>
            <a>
              <Button ref={aboutButton}>about me</Button>
            </a>
          </Link>
        </S.ButtonWrapper>
      </S.Content>
      {isFirstRender && <S.Bg ref={bg} />}
    </S.Section>
  )
}

export default Hero
