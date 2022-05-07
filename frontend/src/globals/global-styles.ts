import { createGlobalStyle } from "styled-components";
import media from "./media-breakpoints";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-main: 'Roboto mono', 'monospace';

    --default-spacing: 0.75rem;
    --content-width: 100%;
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
      --default-spacing: 0.875rem;
      --content-width: 45rem;
    }
  }

  @media ${media.large} {
    :root {
      --default-spacing: 1rem;
      --content-width: 64rem;
    }
  }
`

export default GlobalStyle;