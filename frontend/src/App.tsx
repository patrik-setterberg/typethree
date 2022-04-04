import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import SettingsContext from "./context/settings-context";
import themes, { defaultTheme } from "./globals/themes";

import Header from "./components/Header/Header";
import Main from "./components/UI/Main";
import Modal from "./components/UI/Modal";


const App = (): JSX.Element => {
  const settingsCtx = useContext(SettingsContext);

  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Main>
        hi
      </Main>
      {settingsCtx.settingsModalVisible && <Modal onClose={settingsCtx.closeSettings}>Modal!</Modal>}
    </ThemeProvider>
  );
}

export default App;
