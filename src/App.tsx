import React from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
