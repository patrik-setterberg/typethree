import { useState, useContext } from "react";
import { ThemeProvider, Theme } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./context/auth-context";

import themes, { defaultTheme } from "./globals/themes";

import * as S from "./components/UI/App.styles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/UI/Main/Main";
//import Modal from "./components/UI/Modal/Modal";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import TypeTestPage from "./pages/TypeTestPage/TypeTestPage";
import UserPage from "./pages/UserPage/UserPage";

// TEMP LOGOUT ROUTE COMPONENT.
const LogOut = (): JSX.Element => {
  return <span>LOGOUT ROUTE</span>;
};

const App = (): JSX.Element => {
  const authCtx = useContext(AuthContext);

  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <S.AppContainer>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<TypeTestPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </Main>
          <Footer />
        </S.AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
