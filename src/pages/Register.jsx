import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    // TODO HANDLE REGISTER HERE
    register({ username, password }).then((response) => {
      console.log(response);
      if (response) {
        console.log(response?.code);
        alert("Anda berhasil membuat akun");
        navigate("/");
      }
    });
  }

  return (
    <div className="p-2">
      <strong className="fs-1 text-center text-light">Sign Up</strong>
      <Form
        className="row px-5 col-md-4 g-3 m-5 text-light card mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="row-md-6 text-start">
          <Form.Label className="text-dark fs-4">Username</Form.Label>
          <Form.Control
            className="py-3"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label className="text-dark fs-4">Password</Form.Label>
          <Form.Control
            className="py-3"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group>
          {username && password ? (
            <Button
              className="col-3 my-5 btn-outline-warning"
              variant="light"
              type="submit"
            >
              Register
            </Button>
          ) : (
            <Button
              className="col-3 my-5 btn btn-warning p-2 text-light"
              type="submit"
              disabled
            >
              Register
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Register;
