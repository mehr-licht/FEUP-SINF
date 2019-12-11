import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import MachipTable from "./components/MachipTable";
import MachipCard from "./components/MachipCard";
import MachipGoodsReceipt from "./components/MachipGoodsReceipt";

function App() {
  tokenApiRequest();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Machip
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
            <Nav>
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Views" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="/SalesOrders">Sales Orders</NavDropdown.Item>
              <NavDropdown.Item href="/PurchaseOrders">Purchases Orders</NavDropdown.Item>
              <NavDropdown.Item href="/GoodsReceipt/1/20">Goods Receipt</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Warehouses">Warehouses</NavDropdown.Item>
              <NavDropdown.Item href="/WarehousesItems">Warehouse Items</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="/DeliveryTerms">Delivery Terms</NavDropdown.Item>               */}
            </NavDropdown>
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
      <Router>
      <Switch>  
        <Route exact path="/DeliveryTerms">
          <MachipTable endpoint="delivery_terms"/>
        </Route>
          {/* <Route exact path="/DeliveryTerms/:id" render={(props) => <MachipCard {...props} endpoint={"delivery_terms"} />} /> */}
          <Route exact path="/SalesOrders/:id" render={(props) => <MachipCard {...props} endpoint={"sales_orders"} />} />
          <Route exact path="/PurchaseOrders/:id" render={(props) => <MachipCard {...props} endpoint={"purchase_orders"} />} />
          <Route exact path="/item_description/:id" render={(props) => <MachipCard {...props} endpoint={"item_description"} />} />
        <Route path="/SalesOrders">
           <MachipTable endpoint="sales_orders" />  
        </Route>
        <Route path="/PurchaseOrders">
          <MachipTable endpoint="purchase_orders" />  
        </Route>
          <Route path="/GoodsReceipt/:page/:size" render={(props) => <MachipGoodsReceipt {...props} endpoint={"goods_receipt"} />} />
            {/* <MachipTable endpoint="goods_receipt/1/10?company='FEUP-AI'" /> */}
            {/* <MachipTable endpoint="goods_receipt/:page/:size" /> */}
     
          {/* <Route path="/Warehouses">
            <Warehouses />
          </Route> */}
          {/* <Route path="/WarehousesItems">
            <WarehousesItems />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
