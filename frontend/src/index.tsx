import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';
import { AuthContextProvider } from './context/auth-context';
import { SettingsContextProvider } from "./context/settings-context/settings-context";
import { TypeTestContextProvider } from './context/type-test-context/type-test-context';
import { WindowContextProvider } from "./context/window-context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthContextProvider>
      <WindowContextProvider>
        <SettingsContextProvider>
          <TypeTestContextProvider>
            <App />
          </TypeTestContextProvider>
        </SettingsContextProvider>
      </WindowContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
