import Layout from 'src/components/Layout'
import Image from 'next/image'
import * as S from './styled'

const About = () => {
  return (
    <Layout>
      <S.Wrapper>
        <S.PageTitle>About me</S.PageTitle>
        <S.ImgWrapper>
          <Image
            width="303"
            height="341"
            src="/images/about-me.png"
            layout="fill"
            alt="A guy smiling with a side looking"
            className="aboutMe__img"
          />
        </S.ImgWrapper>

        <S.TextWrapper>
          <S.TitleWrapper>
            <S.Title>
              &nbsp; &nbsp; I'm an
              <span className="fw-b fs-i ff-s"> ordinary</span> guy, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; with an
              <span className="fw-b fs-i ff-s"> ordinary</span> life <br /> who
              does his
              <span className="fw-b fs-i ff-s"> job</span> well
            </S.Title>
            <S.CaptionWrapper>
              <S.Caption>Servant of Jesus, husband and web developer</S.Caption>
              <S.Subtitle>in this order 😉</S.Subtitle>
            </S.CaptionWrapper>
          </S.TitleWrapper>
        </S.TextWrapper>
      </S.Wrapper>
    </Layout>
  )
}

export default About
