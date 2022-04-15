import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./context/auth-context";
// import SettingsContext from "./context/settings-context";
import themes, { defaultTheme } from "./globals/themes";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/UI/Main";
import Modal from "./components/UI/Modal/Modal";

import TestCountdown from "./components/TestCountdown/TestCountdown";

const Temp = ():JSX.Element => {
  return <span>Heehehehe</span>;
}

const App = (): JSX.Element => {
  const authCtx = useContext(AuthContext);

  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<TestCountdown />} />
            <Route path="/settings" element={<Temp />} />
          </Routes>
        </Main>
        <Footer />
        {authCtx.userModalVisible && (
          <Modal title="User!" onClose={authCtx.closeModal}>
            Modal!
          </Modal>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
