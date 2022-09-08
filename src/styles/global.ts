import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ibm-plex-sans/ibm-plex-sans-v14-latin-regular.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ibm-plex-sans/ibm-plex-sans-v14-latin-italic.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/ibm-plex-sans/ibm-plex-sans-v14-latin-600.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ibm-plex-serif/ibm-plex-serif-v15-latin-regular.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Serif';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/ibm-plex-serif/ibm-plex-serif-v15-latin-italic.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/ibm-plex-serif/ibm-plex-serif-v15-latin-600.woff2') format('woff2'); 
  }
  @font-face {
    font-family: 'IBM Plex Serif';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/ibm-plex-serif/ibm-plex-serif-v15-latin-600italic.woff2') format('woff2'); 
  }

  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', serif-serif;
    /* background-color: ${theme.colors.black}; */
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
  }
 
`

export default GlobalStyles
