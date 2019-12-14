import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import theme from './theme';

const App = () => {
    return (
      <ThemeProvider theme={theme}>
          <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />
          </Router>
      </ThemeProvider>
    );
}

export default App;