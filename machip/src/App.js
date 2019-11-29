import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SalesOrders from "./components/sale_orders/sale_orders";

function App() {
  //getToken();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SalesOrders></SalesOrders>
      </header>
    </div>
  );
}

export default App;
