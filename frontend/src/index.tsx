import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';
import { AuthContextProvider } from './context/auth-context';
import { WindowContextProvider } from "./context/window-context";
import { SettingsContextProvider } from "./context/settings-context/settings-context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthContextProvider>
      <WindowContextProvider>
        <SettingsContextProvider>
          <App />
        </SettingsContextProvider>
      </WindowContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
