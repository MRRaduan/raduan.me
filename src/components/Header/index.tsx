import * as S from './styled'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isAvatarHover, setIsAvatarHover] = useState(false)
  return (
    <S.Header>
      <Link href="/">
        <S.Profile>
          <S.Avatar
            onMouseEnter={() => setIsAvatarHover(true)}
            onMouseLeave={() => setIsAvatarHover(false)}
          >
            {isAvatarHover ? (
              <Image src="/images/avatar-smile.png" width={60} height={60} />
            ) : (
              <Image src="/images/avatar.png" width={60} height={60} />
            )}
          </S.Avatar>
          <div className="logo">
            <svg
              width="105"
              height="35"
              viewBox="0 0 105 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.104 24.256C28.416 24.832 28.836 25.492 29.364 26.236C29.916 26.98 30.504 27.688 31.128 28.36C31.776 29.056 32.448 29.632 33.144 30.088C33.84 30.568 34.524 30.808 35.196 30.808C35.46 30.808 35.724 30.76 35.988 30.664C36.276 30.568 36.552 30.4 36.816 30.16C36.12 30.928 35.4 31.612 34.656 32.212C34.032 32.716 33.324 33.172 32.532 33.58C31.74 34.012 30.948 34.228 30.156 34.228H29.868C29.436 34.204 28.884 33.796 28.212 33.004C27.564 32.236 26.856 31.288 26.088 30.16C25.32 29.032 24.528 27.808 23.712 26.488C22.896 25.168 22.14 23.944 21.444 22.816C20.748 21.664 20.124 20.704 19.572 19.936C19.044 19.168 18.672 18.76 18.456 18.712V24.112C18.6 24.136 18.744 24.16 18.888 24.184C19.032 24.184 19.188 24.184 19.356 24.184C19.692 24.184 20.016 24.16 20.328 24.112C20.664 24.04 20.988 23.908 21.3 23.716L17.232 27.82C16.392 27.268 15.492 26.776 14.532 26.344C13.716 25.96 12.804 25.612 11.796 25.3C10.812 24.988 9.816 24.832 8.808 24.832C7.824 24.832 6.924 24.916 6.108 25.084C5.316 25.252 4.62 25.504 4.02 25.84C3.444 26.152 2.988 26.536 2.652 26.992C2.34 27.424 2.184 27.904 2.184 28.432C2.184 29.128 2.388 29.584 2.796 29.8C3.228 30.016 3.684 30.124 4.164 30.124C4.596 30.124 4.98 30.088 5.316 30.016C5.484 29.968 5.652 29.92 5.82 29.872C5.628 29.992 5.4 30.1 5.136 30.196C4.92 30.268 4.668 30.328 4.38 30.376C4.116 30.448 3.84 30.484 3.552 30.484C3.312 30.484 3.036 30.436 2.724 30.34C2.436 30.268 2.16 30.124 1.896 29.908C1.632 29.716 1.404 29.44 1.212 29.08C1.044 28.72 0.96 28.264 0.96 27.712C0.96 26.992 1.2 26.272 1.68 25.552C2.16 24.808 2.82 24.148 3.66 23.572C4.524 22.972 5.52 22.48 6.648 22.096C7.8 21.712 9.048 21.52 10.392 21.52C10.656 21.52 10.908 21.52 11.148 21.52C11.388 21.52 11.64 21.544 11.904 21.592V8.236C11.592 7.732 11.22 7.276 10.788 6.868C10.404 6.532 9.924 6.22 9.348 5.932C8.796 5.644 8.136 5.5 7.368 5.5C6.072 5.5 5.1 5.824 4.452 6.472C3.828 7.096 3.516 7.864 3.516 8.776C3.516 9.232 3.588 9.688 3.732 10.144C3.9 10.576 4.128 10.972 4.416 11.332C4.728 11.692 5.088 11.98 5.496 12.196C5.928 12.412 6.408 12.52 6.936 12.52C7.224 12.52 7.524 12.496 7.836 12.448C8.148 12.376 8.472 12.256 8.808 12.088C8.616 12.256 8.4 12.4 8.16 12.52C7.968 12.64 7.728 12.736 7.44 12.808C7.152 12.88 6.84 12.916 6.504 12.916C6.144 12.916 5.736 12.832 5.28 12.664C4.824 12.496 4.392 12.256 3.984 11.944C3.6 11.608 3.276 11.2 3.012 10.72C2.748 10.216 2.616 9.652 2.616 9.028C2.616 8.476 2.7 7.924 2.868 7.372C3.06 6.82 3.3 6.304 3.588 5.824C3.9 5.32 4.236 4.888 4.596 4.528C4.956 4.168 5.316 3.892 5.676 3.7C6.132 3.484 6.684 3.304 7.332 3.16C8.004 3.016 8.748 2.944 9.564 2.944C10.644 2.944 11.808 3.124 13.056 3.484C14.328 3.844 15.576 4.528 16.8 5.536V7.444L17.952 6.796V2.944H18.456V6.508L24.972 2.8C24.948 2.848 24.936 2.896 24.936 2.944V3.268C24.936 3.484 24.948 3.76 24.972 4.096C25.02 4.432 25.104 4.792 25.224 5.176C25.344 5.536 25.512 5.92 25.728 6.328C25.968 6.712 26.268 7.084 26.628 7.444C26.964 7.78 27.24 8.248 27.456 8.848C27.672 9.448 27.78 10.108 27.78 10.828C27.78 11.404 27.696 12.004 27.528 12.628C27.384 13.252 27.144 13.852 26.808 14.428C26.472 14.98 26.028 15.508 25.476 16.012C24.948 16.492 24.288 16.888 23.496 17.2C23.856 17.704 24.24 18.28 24.648 18.928C25.08 19.552 25.512 20.188 25.944 20.836C26.376 21.484 26.772 22.108 27.132 22.708C27.516 23.308 27.84 23.824 28.104 24.256ZM16.8 8.416V17.92L17.952 17.38V7.768L16.8 8.416ZM17.952 18.676C17.496 18.676 17.112 18.724 16.8 18.82V23.716L17.124 23.824C17.244 23.872 17.364 23.908 17.484 23.932C17.604 23.956 17.76 23.98 17.952 24.004V18.676ZM21.048 15.868C21.288 15.724 21.54 15.556 21.804 15.364C22.068 15.148 22.308 14.896 22.524 14.608C22.764 14.32 22.956 13.996 23.1 13.636C23.268 13.276 23.364 12.88 23.388 12.448C23.388 11.8 23.208 11.296 22.848 10.936C22.512 10.576 22.14 10.24 21.732 9.928C21.324 9.616 20.94 9.268 20.58 8.884C20.244 8.5 20.076 7.948 20.076 7.228C20.076 7.108 20.076 6.988 20.076 6.868C20.076 6.724 20.1 6.58 20.148 6.436L18.456 7.444V17.128L21.048 15.868ZM44.1223 25.372L40.6663 28.108L37.3183 25.588L33.4303 28.108C32.6863 27.892 32.0263 27.568 31.4503 27.136C30.9703 26.752 30.5263 26.224 30.1183 25.552C29.7103 24.88 29.5063 24.004 29.5063 22.924C29.5063 21.844 29.6863 20.968 30.0463 20.296C30.4303 19.624 30.8503 19.084 31.3063 18.676C31.8343 18.22 32.4343 17.872 33.1063 17.632C32.6983 17.416 32.3503 17.176 32.0623 16.912C31.7983 16.672 31.5583 16.384 31.3423 16.048C31.1263 15.688 31.0183 15.292 31.0183 14.86C31.0183 14.548 31.1503 14.212 31.4143 13.852C31.6783 13.468 32.0143 13.084 32.4223 12.7C32.8303 12.316 33.2623 11.956 33.7183 11.62C34.1983 11.26 34.6423 10.948 35.0503 10.684C35.4583 10.42 35.8063 10.204 36.0943 10.036C36.3823 9.868 36.5503 9.784 36.5983 9.784L42.6463 14.428L41.8183 14.788V24.58L42.8623 25.552L44.1223 25.372ZM38.0023 20.908C37.7383 21.268 37.4743 21.532 37.2103 21.7C36.9703 21.844 36.7423 21.916 36.5263 21.916C36.2623 21.916 36.0343 21.82 35.8423 21.628C35.6503 21.412 35.5543 21.172 35.5543 20.908C35.5543 20.716 35.6143 20.572 35.7343 20.476C35.8543 20.356 35.9983 20.26 36.1663 20.188C36.3583 20.092 36.5743 20.032 36.8143 20.008V19.216C36.5983 19.024 36.3463 18.868 36.0583 18.748C35.7943 18.604 35.5183 18.532 35.2303 18.532C35.0143 18.532 34.7863 18.592 34.5463 18.712C34.3063 18.832 34.0783 19.036 33.8623 19.324C33.6463 19.588 33.4663 19.948 33.3223 20.404C33.2023 20.836 33.1423 21.388 33.1423 22.06C33.1423 22.756 33.2503 23.344 33.4663 23.824C33.6823 24.28 33.9103 24.652 34.1503 24.94C34.4143 25.204 34.6543 25.372 34.8703 25.444C35.0863 25.516 35.1943 25.492 35.1943 25.372L38.0023 24.364V20.908ZM38.0023 14.212L35.3743 11.764C34.9663 11.884 34.6063 12.076 34.2943 12.34C34.0303 12.556 33.7783 12.844 33.5383 13.204C33.3223 13.54 33.2143 13.96 33.2143 14.464C33.2143 15.088 33.4543 15.676 33.9343 16.228C34.4383 16.756 34.9783 17.224 35.5543 17.632C36.1543 18.016 36.7063 18.328 37.2103 18.568C37.7143 18.808 37.9783 18.928 38.0023 18.928V14.212ZM57.9691 25.372L50.9851 28.252C51.0571 28.252 50.9251 28.132 50.5891 27.892C50.2531 27.652 49.8091 27.328 49.2571 26.92C48.7051 26.512 48.0931 26.032 47.4211 25.48C46.7731 24.904 46.1611 24.28 45.5851 23.608C45.0331 22.936 44.5651 22.24 44.1811 21.52C43.7971 20.776 43.6051 20.02 43.6051 19.252C43.6051 18.748 43.6771 18.232 43.8211 17.704C43.9651 17.176 44.1571 16.648 44.3971 16.12C44.6371 15.568 44.9011 15.04 45.1891 14.536C45.5011 14.008 45.8251 13.516 46.1611 13.06C46.9051 11.98 47.7571 10.924 48.7171 9.892C48.9331 10.132 49.2331 10.384 49.6171 10.648C50.0251 10.912 50.4331 11.164 50.8411 11.404C51.2971 11.668 51.7891 11.944 52.3171 12.232L52.2091 3.988L50.7691 3.34L54.2251 0.603999L57.4651 3.592H56.3131V24.184L57.9691 25.372ZM52.1371 13.708L51.0571 12.808C50.3131 13.552 49.6291 14.296 49.0051 15.04C48.4771 15.664 47.9851 16.348 47.5291 17.092C47.0971 17.812 46.8571 18.472 46.8091 19.072C46.7851 19.192 46.7731 19.372 46.7731 19.612C46.7731 20.356 46.8811 21.064 47.0971 21.736C47.3131 22.408 47.5891 22.996 47.9251 23.5C48.2851 24.004 48.6931 24.4 49.1491 24.688C49.6051 24.976 50.0731 25.12 50.5531 25.12C50.8891 25.12 51.1531 25.06 51.3451 24.94C51.5611 24.796 51.7291 24.64 51.8491 24.472C51.9691 24.28 52.0651 24.052 52.1371 23.788V13.708ZM71.4798 28L67.3758 24.904L63.2718 27.856L59.0598 25.192L60.2838 23.968V13.384L58.9158 12.304L61.7238 9.64L65.2158 11.908L64.2438 12.952V23.536L65.9718 24.904L68.4918 23.068V13.024L67.1238 11.944L69.9318 9.316L73.4598 11.548L72.4878 12.592V23.176L74.3238 24.688L71.4798 28ZM89.5442 25.372L86.0882 28.108L82.7402 25.588L78.8522 28.108C78.1082 27.892 77.4482 27.568 76.8722 27.136C76.3922 26.752 75.9482 26.224 75.5402 25.552C75.1322 24.88 74.9282 24.004 74.9282 22.924C74.9282 21.844 75.1082 20.968 75.4682 20.296C75.8522 19.624 76.2722 19.084 76.7282 18.676C77.2562 18.22 77.8562 17.872 78.5282 17.632C78.1202 17.416 77.7722 17.176 77.4842 16.912C77.2202 16.672 76.9802 16.384 76.7642 16.048C76.5482 15.688 76.4402 15.292 76.4402 14.86C76.4402 14.548 76.5722 14.212 76.8362 13.852C77.1002 13.468 77.4362 13.084 77.8442 12.7C78.2522 12.316 78.6842 11.956 79.1402 11.62C79.6202 11.26 80.0642 10.948 80.4722 10.684C80.8802 10.42 81.2282 10.204 81.5162 10.036C81.8042 9.868 81.9722 9.784 82.0202 9.784L88.0682 14.428L87.2402 14.788V24.58L88.2842 25.552L89.5442 25.372ZM83.4242 20.908C83.1602 21.268 82.8962 21.532 82.6322 21.7C82.3922 21.844 82.1642 21.916 81.9482 21.916C81.6842 21.916 81.4562 21.82 81.2642 21.628C81.0722 21.412 80.9762 21.172 80.9762 20.908C80.9762 20.716 81.0362 20.572 81.1562 20.476C81.2762 20.356 81.4202 20.26 81.5882 20.188C81.7802 20.092 81.9962 20.032 82.2362 20.008V19.216C82.0202 19.024 81.7682 18.868 81.4802 18.748C81.2162 18.604 80.9402 18.532 80.6522 18.532C80.4362 18.532 80.2082 18.592 79.9682 18.712C79.7282 18.832 79.5002 19.036 79.2842 19.324C79.0682 19.588 78.8882 19.948 78.7442 20.404C78.6242 20.836 78.5642 21.388 78.5642 22.06C78.5642 22.756 78.6722 23.344 78.8882 23.824C79.1042 24.28 79.3322 24.652 79.5722 24.94C79.8362 25.204 80.0762 25.372 80.2922 25.444C80.5082 25.516 80.6162 25.492 80.6162 25.372L83.4242 24.364V20.908ZM83.4242 14.212L80.7962 11.764C80.3882 11.884 80.0282 12.076 79.7162 12.34C79.4522 12.556 79.2002 12.844 78.9602 13.204C78.7442 13.54 78.6362 13.96 78.6362 14.464C78.6362 15.088 78.8762 15.676 79.3562 16.228C79.8602 16.756 80.4002 17.224 80.9762 17.632C81.5762 18.016 82.1282 18.328 82.6322 18.568C83.1362 18.808 83.4002 18.928 83.4242 18.928V14.212ZM104.74 26.056L102.292 28.612L98.2604 25.732L99.1604 24.976H99.3404V13.78L97.9724 12.34L95.5244 14.356V24.04L97.1804 25.408L94.3724 28.144L90.3764 25.732L91.5644 24.256V13.888L89.9804 12.34L92.6084 9.856L95.4524 12.016V13.276L99.6644 10.144L103.084 13.384V25.084H103.156L104.74 26.056Z"
                fill="#FCFCFC"
              />
            </svg>
            <S.Role>Frontend Engineer</S.Role>
          </div>
        </S.Profile>
      </Link>
      <S.Menu>
        <S.MenuItems>
          <S.MenuItem>
            <Link href="/about-me">
              <a>about me</a>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </S.MenuItem>
        </S.MenuItems>
        <S.Lines>
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((line) => (
            <div key={line} className="line"></div>
          ))}
        </S.Lines>
      </S.Menu>
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/Soli_Deo_gloria"
        rel="noreferrer"
      >
        <S.SDG>
          <S.SDGAbreviation>S. D. G.</S.SDGAbreviation>
          <S.SDGFull>Soli Deo gloria</S.SDGFull>
        </S.SDG>
      </a>
    </S.Header>
  )
}

export default Header
