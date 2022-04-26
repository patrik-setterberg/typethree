import { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./context/auth-context";
// import SettingsContext from "./context/settings-context";
import themes, { defaultTheme } from "./globals/themes";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/UI/Main/Main";
//import Modal from "./components/UI/Modal/Modal";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import UserPage from "./pages/UserPage/UserPage";
import ToggleSwitch from "./components/UI/ToggleSwitch/ToggleSwitch";

import TestCountdown from "./components/TestCountdown/TestCountdown";

// TEMP LOGOUT ROUTE COMPONENT.
const LogOut = (): JSX.Element => {
  return (
    <span>LOGOUT ROUTE</span>
  );
}

const App = (): JSX.Element => {
  const authCtx = useContext(AuthContext);

  const [currentTheme, setCurrentTheme] = useState(themes[defaultTheme]);
  // IF LOGGED IN, USE USER'S PREFERED THEME SETTING.

  let testVar = false;

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header />
        <Main>
          <ToggleSwitch Id="test" labelText="Label text" onChangeFunc={(isChecked) => {testVar = isChecked;}}/>
          <Routes>
            <Route path="/" element={<TestCountdown />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
