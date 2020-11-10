import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <h1 className="text-center mt-3">Sign Up for an Account</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 mt-3 text-center">
                <form>
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
                    <select id="genderFormControl">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <br />
                    <label for="firstName" className="mt-3">
                        First Name
                    </label>
                    <br />
                    <input type="text" id="firstNameFormControl"></input>
                    <br />
                    <label for="lastName" className="mt-3">
                        Last Name
                    </label>
                    <br />
                    <input type="text" id="lastNameFormControl"></input>
                    <br />
                    <label for="emailAddress" className="mt-3">
                        Email address
                    </label>
                    <br />
                    <input type="email" id="emailFormControl" placeholder="user@email.com"></input>
                    <br />
                    <label for="password" className="mt-3">
                        Password
                    </label>
                    <br />
                    <input type="password" id="passwordInput"></input>
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