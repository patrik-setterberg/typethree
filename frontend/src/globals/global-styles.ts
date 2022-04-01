import { createGlobalStyle } from "styled-components";
import media from "./media-breakpoints";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-main: 'Roboto mono', 'monospace';

    --default-spacing: 1.5rem;
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

  @media ${media.medium} {
    :root {
      --default-spacing: 1.75rem;
    }
  }

  @media ${media.large} {
    :root {
      --default-spacing: 2rem;
    }
  }
`

export default GlobalStyle;