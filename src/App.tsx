import React from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';

function App() {
  console.log(process.env)
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
