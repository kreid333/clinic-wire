import React from "react";
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
            <div className="col-sm-12 bg-image mt-3 text-center">
                <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Who are you?</label>
                    <select class="form-control" id="roleFormControl">
                        <option>Patient</option>
                        <option>Doctor</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="emailFormControl" placeholder="name@example.com"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">First Name</label>
                    <input type="name" class="form-control" id="firstNameFormControl"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Last Name</label>
                    <input type="name" class="form-control" id="lastNameFormControl"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select class="form-control" id="genderFormControl">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="passwordInput"></input>
                </div>
                <Link to="/dashboard">
                    <button type="submit" class="btn" id="signUpConfirmBtn">Sign Up!</button>
                </Link>
                </form>
                <Link to="/homepage">
                <button class="btn" id="homeBackBtn">
                Back
                </button>
                </Link>
            </div>
      </div>
    </div>
    )
}

export default SignUp;