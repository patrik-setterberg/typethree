import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';
import { SettingsContextProvider } from "./context/settings-context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
