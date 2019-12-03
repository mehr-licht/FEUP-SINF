import React from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';
import SalesOrders from "./components/sale_orders/sale_orders";
import Layout from './components/utils/Layout';
import './styles/App.css';

function App() {
  //getToken();
  return (
    <div className="App">
      <Layout/>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      <div>
        <SalesOrders></SalesOrders>
      </div>
      
    </div>
  );
}

export default App;
