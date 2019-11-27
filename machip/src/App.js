import React from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
