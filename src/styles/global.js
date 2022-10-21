import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyles`
  *
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primary};
    height: 100vh;
    margin: 0;
    padding 0;
    font-family: 'Robo', sans-serif;
    transition: all 0.25s linear;
  }
  
`