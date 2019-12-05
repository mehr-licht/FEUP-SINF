import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { tokenApiRequest } from "./api/tokenApiRequest";
import { Navbar } from "react-bootstrap";
import "./App.css";

function App() {
  tokenApiRequest();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
