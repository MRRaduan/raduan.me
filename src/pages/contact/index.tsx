import Layout from 'src/components/Layout'
import * as S from './styled'
import GetInTouchLink from 'src/components/GetInTouchLink'

const contactLinks = [
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/matheus-raduan',
  },
  {
    name: 'Github',
    link: 'https://github.com/MRRaduan',
  },
  {
    name: 'X',
    link: 'https://x.com/MRRaduan',
  },
  {
    name: 'Email',
    link: 'mailto: raduan.me@gmail.com',
  },
]

const GetInTouch = () => {
  return (
    <Layout>
      <S.AllContentWrapper>
        <S.CallWrapper>
          <S.Title>Contact</S.Title>
          <S.ContentWrapper>
            <S.ContactHero>
              <S.CallTextWrapper>
                <S.TextCall>
                  Get in <br />
                  &nbsp; &nbsp; touch
                </S.TextCall>
                <S.MessageText>
                  send me a <br /> message
                </S.MessageText>
              </S.CallTextWrapper>
            </S.ContactHero>
          </S.ContentWrapper>
          <S.BlurBackground />
        </S.CallWrapper>
        <S.ContactLinksWrapper>
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <GetInTouchLink name={item.name} />
            </a>
          ))}
        </S.ContactLinksWrapper>
      </S.AllContentWrapper>
    </Layout>
  )
}

export default GetInTouch
