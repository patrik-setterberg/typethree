import { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes, { defaultTheme } from "./globals/themes";

import Main from "./components/UI/Main";
import Modal from "./components/UI/Modal";

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      {/* HEADER */}
      <Modal>Modal!</Modal>
      <Main>
        
      </Main>
    </ThemeProvider>
  );
}

export default App;
