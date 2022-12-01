import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import themeDefault from './config/Theme/default';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDefault}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
