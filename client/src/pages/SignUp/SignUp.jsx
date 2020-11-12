import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", { gender, fullName, emailAddress, password, age })
      .then((response) => {
        localStorage.setItem("jwt", response.data.data);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">Sign Up for an Account</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3 text-center">
          <form onSubmit={handleSubmit}>
            <label for="userRole">Who are you?</label>
            <br />
            <select id="roleFormControl">
              <option>Patient</option>
              <option>Doctor</option>
            </select>
            <br />
            <label for="gender" className="mt-3">
              Gender
            </label>
            <br />
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select One</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <br />
            <label for="fullName" className="mt-3">
              Full Name
            </label>
            <br />
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <br />
            <label for="emailAddress" className="mt-3">
              Email address
            </label>
            <br />
            <input
              type="email"
              id="emailAddress"
              placeholder="user@email.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
            <br />
            <label for="age" className="mt-3">
              Age
            </label>
            <br />
            <input
              type="number"
              min="0"
              max="100"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <br />
            <label for="password" className="mt-3">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit" className="btn button mt-3">
              Sign Up!
            </button>
          </form>
          <Link to="/">
            <button className="btn button mt-3">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
