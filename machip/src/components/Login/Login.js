import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const [Username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return Username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <body>
      <div className="LoginContainer">
        <div className="LoginTitle">
          <h1 align="center">
            <b>
              Sign In
              </b>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>

          <FormGroup controlId="Username" bsSize="large">
            <FormControl
              autoFocus
              placeholder='Username'
              type="Username"
              value={Username}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className ="passwordInput" controlId="password" bsSize="large">
            <FormControl
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <div id = "buttonLogin" class="text-center">
            <Button variant="info" size="md" disabled={!validateForm()} type="submit">
              Login
        </Button>
          </div>
        </form>
      </div>
    </body>
  );
}
