import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

const MyAppointments = () => {

    const [gender, setGender] = useState("");
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
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
                <h1 className="text-center mt-3">My Appointments</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 mt-3 text-center">
                <form onSubmit={handleSubmit}>
                    <label for="appointmentName">
                    
                    </label>
                    <br />
                    <select id="appointmentNameFormControl">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <br />

                    
                    <br />
                    <select id="appointmentNameFormControl">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <br />

                   
                    <br />
                    <select id="appointmentNameFormControl">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <br />
                    
                    
                    
                
               
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

export default MyAppointments;