import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background: #f2f2f2;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%
    }
    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }
`
