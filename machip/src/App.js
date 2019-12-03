import React from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';
import SalesOrders from "./components/sale_orders/sale_orders";

function App() {
  //getToken();
  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
        <SalesOrders></SalesOrders>
  );
}

export default App;
