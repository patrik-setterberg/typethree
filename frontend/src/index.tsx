import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globals/global-styles';
import '../src/assets/fonts/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
