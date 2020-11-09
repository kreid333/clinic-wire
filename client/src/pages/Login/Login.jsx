import React from "react";
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
          <button className="btn button mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
