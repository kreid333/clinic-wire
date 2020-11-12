import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/login", { emailAddress: emailAddress, password: password })
      .then((response) => {
        localStorage.setItem("jwt", response.data.data);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="loginCenter">
      <h1 className="text-center mt-3">Login</h1>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress" className="mt-3">
            Email Address
          </label>
          <br />
          <input
            type="text"
            name="emailAddress"
            id="emailAddress"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password" className="mt-3">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="btn button mt-3">Login</button>
          <br />
        </form>
        <Link to="/">
          <button className="btn button mt-3">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
