import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {

    const [gender, setGender] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (gender, fullName, emailAddress, password) => {
        e.preventDefault();
        axios
          .post("/api/users", { gender, fullName, emailAddress, password })
          .then((response) => {
            console.log(response.data);
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
                <form onSubmit={(e) => {
                    handleSubmit(e, gender, fullName, emailAddress, password);
                }}>
                    <label for="userRole">
                        Who are you?
                    </label>
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
                        id="genderFormControl" 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
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
                        id="fullNameFormControl"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        />
                    <br />
                    <label for="emailAddress" className="mt-3">
                        Email address
                    </label>
                    <br />
                    <input 
                        type="email" 
                        id="emailFormControl" 
                        placeholder="user@email.com" 
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    <br />
                    <label for="password" className="mt-3">
                        Password
                    </label>
                    <br />
                    <input 
                        type="password" 
                        id="passwordFormControl" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                <Link to="/dashboard">
                    <button type="submit" className="btn button mt-3">Sign Up!</button>
                </Link>
                </form>
                <Link to="/">
                <button className="btn button mt-3">
                Back
                </button>
                </Link>
            </div>
      </div>
    </div>
    )
}

export default SignUp;