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
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h1>
          Sign In
        </h1>
        <FormGroup controlId="Username" bsSize="large">
          <FormControl
            autoFocus
            placeholder='Username'
            type="Username"
            value={Username}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
