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
      <S.AboutMeContent>
        <S.AboutContentWrapper>
          <S.Quote>
            Everything is designed. <br />
            Few things are designed well
          </S.Quote>
          <p>
            I'm Matheus Raduan, a Frontend Developer based in Brazil 🇧🇷 and for
            7 years I've been solving problems by design and building web
            experiences.
          </p>
          <p>
            I have experience since working with digital agency (audaz), passing
            by a brazilian big tech product company as iFood (group Movile), and
            with huge client to CI&T, attending EMEA market (Europe, the Middle
            East and Africa).
          </p>
          <p>
            The main stack that I’ve been worked is React, Next.js, Gatsby,
            Vue.js, Typescript, React Query, CSS-in-JS, Jest (TDD), Material UI,
            Contentful and designing REST APIs.
          </p>
          <p>
            Recently I've been focusing on Clean Architecture for the frontend
            environment.
          </p>
          <p>Nice to meet you! 😄</p>
          <h1>A little bit about my history</h1>
          <p>I like design.</p>
          <p> I grew up drawing a lot, since when I was a kid.</p>
          <p>
            In the highschool I almost reprove an specific class because I only
            draw in the school 😅. But don't take me wrong! Give me a chance, I
            faced this seriously, I was decided to be a illustrator or work with
            design. For the good, some results start to show earlier.
          </p>
          <p>
            When I was coursing the techinician degree of informatics (in my
            high school), because the fame of my illustrations one of my arts
            was ellected to be launched as a t-shirt print to a digital company
            called Camiseteria (if it were in english would be something like
            T-shirtting ).
          </p>
          <p>
            This was a great achievement to me, I was only with 15 years and
            some people would buy a t-shirt with my illustration 😀. So I
            decided to focus only on illustration and study design, and even
            started a Visual Communication technical course that contains the
            core of a Graphic Design degree, how I liked that course.
          </p>
          <S.IllustrationWrapper className="img-border">
            <Image
              src="/images/eye-of-truth.png"
              layout="fill"
              className="img"
            />
          </S.IllustrationWrapper>
          <S.FigCaption>
            The T-shirt origial Illustration called Eye Of Truth.
          </S.FigCaption>
          <S.HistoryContentWrapper>
            <S.HistoryTextWrapper>
              <h2>The game change</h2>
              <p>
                As I mentioned, in that time I already coursed my techinician
                degree of informatics. <br /> So I was open too to work with
                some tech stuff, and because of great friendship of a brother of
                the church that influenced me a lot, I started to create
                websites and work as freelance to him for one entire year.{' '}
                <br /> It was awesome and a great experience. He really invested
                in my carrer.
              </p>
              <p>
                That was the way that found the place where I could put the two
                things that I like working together, <b>coding</b> and
                <b> design</b>. <br /> I found what I wanted to work and live 😄
              </p>
            </S.HistoryTextWrapper>
            <S.UnblackMetalPicWrapper>
              <S.UnblackMetalPic>
                <Image
                  src="/images/adm-server.png"
                  layout="fill"
                  className="img"
                  alt="Two guys in the wood praising God"
                />
              </S.UnblackMetalPic>
              <S.FigCaption>
                My brother in Christ Diego Neves at left and me at right in
                2017. Both like death and unblack metal. The phrase in the
                picture is in norwegian language and said ”If not to adore You
                for what I was born”.
              </S.FigCaption>
            </S.UnblackMetalPicWrapper>
          </S.HistoryContentWrapper>
          <h1>How I face the work</h1>
          <p>
            I believe that we always work for someone and the Person I work for
            is bigger than my own work. The question you should ask me is, who
            do you work for?
          </p>
        </S.AboutContentWrapper>
      </S.AboutMeContent>
    </Layout>
  )
}

export default About
