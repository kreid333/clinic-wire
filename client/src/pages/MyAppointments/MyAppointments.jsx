import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

const MyAppointments = () => {

    const [appointmentNameFormControl1, setappointmentNameFormControl1] = useState("");
    const [appointmentNameFormControl2, setappointmentNameFormControl2] = useState("");
    const [appointmentNameFormControl3, setappointmentNameFormControl3] = useState("");
   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/users", { appointmentNameFormControl1, appointmentNameFormControl2, appointmentNameFormControl3})
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
                    <select id="appointmentNameFormControl1">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <select 
                        id="genderFormControl1" 
                        value={appointmentNameFormControl1}
                        onChange={(e) => setappointmentNameFormControl1(e.target.value)}>
                        <option>Select One</option>
                        <option>Dr.Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr.Phillips</option>
                    </select>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <br />

                    
                    <br />
                    <select id="appointmentNameFormControl2">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <select 
                        id="genderFormControl2" 
                        value={appointmentNameFormControl2}
                        onChange={(e) => setappointmentNameFormControl2(e.target.value)}>
                        <option>Select One</option>
                        <option>Dr.Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr.Phillips</option>
                    </select>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <br />

                   
                    <br />
                    <select id="appointmentNameFormControl3">
                        <option>Dr. Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr. Phillips</option>
                    </select>
                    <select 
                        id="genderFormControl3" 
                        value={appointmentNameFormControl3}
                        onChange={(e) => setappointmentNameFormControl3(e.target.value)}>
                        <option>Select One</option>
                        <option>Dr.Abraham</option>
                        <option>Dr. Stenson</option>
                        <option>Dr.Phillips</option>
                    </select>
                    <button type="button" class="btn btn-danger">Delete</button>
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