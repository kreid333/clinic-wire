import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div id="loginCenter">
      <h1 className="text-center mt-3">Login</h1>
      <div className="text-center">
        <form>
          <label htmlFor="emailAddress" className="mt-3">
            Email Address
          </label>
          <br />
          <input type="text" name="emailAddress" id="emailAddress" />
          <br />
          <label htmlFor="password" className="mt-3">
            Password
          </label>
          <br />
          <input type="text" name="password" id="password" />
          <br />
          <Link to="/dashboard">
            <button className="btn button mt-3">Login</button>
          </Link>
          <br />
          <Link to="/">
            <button className="btn button mt-3">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
