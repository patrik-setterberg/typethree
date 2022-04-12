import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';
import { SettingsContextProvider } from "./context/settings-context";
import { FocusContextProvider } from "./context/focus-context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <FocusContextProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </FocusContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
