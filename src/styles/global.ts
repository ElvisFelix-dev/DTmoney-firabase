import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #00875F;
  }

  body {
    background: #202024;
    color : #E1E1E6;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400  1rem 'Roboto', sans-serif; ;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }
`
