import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login, putAccessToken } from "../utils/network";
import logoImage from "../assets/logo.png";
import backgroundImage from "../assets/bg.jpeg";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    // TODO HANDLE LOGIN HERE
    const response = await login({ username, password });
    if (response?.data?.token) {
      putAccessToken(response.data.token);
      navigate(`/${username}`);
    }
  }
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const containerStyle = {
    backgroundImage: 'url("/path-to-your-image.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "right",
    height: "100vh",
  };

  return (
    <>
      <div style={backgroundStyle}>
        {}
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div>
            <img src={logoImage} alt="logo" width="220" height="70" />
          </div>
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">
            <strong>Garden Plants</strong>
          </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class=" justify-content-end flex-grow-1 pe-3 collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav d-flex justify-content-center">
                <li class="nav-item">
                  <a class=" nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Petisi
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Artikel
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Forum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    Donasi
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button class="btn btn-outline-success" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <h1>Silahkan Masuk</h1>

                        <div className="p-2 ">
                          <Form
                            onSubmit={(event) => {
                              onSubmitHandler(event);
                            }}
                          >
                            <Form.Group className="row-md-6 text-start">
                              <Form.Label className="text-dark fs-4">
                                Username
                              </Form.Label>
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
                              <Form.Label className="text-dark fs-4">
                                Password
                              </Form.Label>
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
                                  className="col-6 btn-outline-success mt-3"
                                  variant="light"
                                  type="submit"
                                >
                                  Submit
                                </Button>
                              ) : (
                                <Button
                                  className="col-6 btn btn-success p-2 text-light mt-3"
                                  type="submit"
                                  disabled
                                >
                                  Submit
                                </Button>
                              )}
                            </Form.Group>
                            <div className="line"></div>
                            <p className="text-secondary text-start mt-3">
                              Belum Punya Akun?
                            </p>
                            <Form>
                              <Button
                                className="col-3 btn-outline-success"
                                variant="light"
                                type="submit"
                                onClick={() => {
                                  navigate("/register");
                                }}
                              >
                                Register
                              </Button>
                            </Form>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
