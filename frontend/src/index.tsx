import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';
import { AuthContextProvider } from './context/auth-context';
import { FocusContextProvider } from "./context/focus-context";
import { SettingsContextProvider } from "./context/settings-context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthContextProvider>
      <FocusContextProvider>
        <SettingsContextProvider>
          <App />
        </SettingsContextProvider>
      </FocusContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
