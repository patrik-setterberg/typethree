import { useState } from "react";
import { ThemeProvider } from "styled-components";

import themes, { defaultTheme } from "./globals/themes";

import Main from "./components/UI/Main";
import Modal from "./components/UI/Modal";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      {/* HEADER */}
      <Modal onClose={() => console.log('onClose!')}>Modal!</Modal>
      <Main>
        hi
      </Main>
    </ThemeProvider>
  );
}

export default App;
