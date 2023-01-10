import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './template/App';
import { ThemeProvider } from 'styled-components'; 
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-tyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

