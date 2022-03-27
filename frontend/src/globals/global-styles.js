import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-main: 'Roboto mono', 'monospace';
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-main);
  }
`

export default GlobalStyle;