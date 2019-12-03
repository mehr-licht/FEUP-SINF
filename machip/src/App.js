import React from 'react';
import SalesOrders from "./components/sale_orders/sale_orders";
import PurchaseOrders from "./components/purchase_orders/purchase_orders";
import Layout from './components/utils/Layout';
import './styles/App.css';

function App() {
  //getToken();
  return (
    <div className="App"> 
      <Layout></Layout>
      <div>
        <SalesOrders></SalesOrders>
        <PurchaseOrders></PurchaseOrders>
      </div>
      
    </div>
  );
}

export default App;
