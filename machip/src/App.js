import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SalesOrders from './pages/SalesOrders';
import PurchaseOrders from './pages/PurchaseOrders';
import theme from './theme';
import {tokenApiRequest} from "./api/tokenApiRequest";

const App = () => {
  tokenApiRequest();
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <SalesOrders path="/sales_orders" />
          <PurchaseOrders path="/purchase_orders" />
        </Router>
    </ThemeProvider>
  );
}

export default App;