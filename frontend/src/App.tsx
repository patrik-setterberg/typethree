import { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes, { defaultTheme } from "./globals/themes";

import Header from "./components/Header/Header";
import Main from "./components/UI/Main";


const App = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Main>
        hi
      </Main>
    </ThemeProvider>
  );
}

export default App;
