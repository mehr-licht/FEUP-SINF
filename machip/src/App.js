import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './components/utils/Layout';
import theme from './theme';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Layout/>
      </ThemeProvider>
    );
  }
}
