import React from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
