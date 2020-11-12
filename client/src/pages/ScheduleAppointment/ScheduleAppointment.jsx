import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ScheduleAppointment.css";

const ScheduleAppointment = () => {

   
    const [doctorName, setDoctorName] = useState("");
    const [dateScheduled, setdateScheduled] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [doctorNotes, setdoctorNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/users", { doctorName, dateScheduled, phoneNumber, doctorNotes })
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
                <h1 className="text-center mt-3">Schedule an Appointment</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 mt-3 text-center">
                <form onSubmit={(e) => {
                    handleSubmit();
                }}>
                    
                    <label for="doctorName" className="mt-3">
                        Which doctor are you seeing?
                    </label>
                    <br />
                    <input 
                        type="text" 
                        id="doctorNameFormControl"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        />
                    <br />

                    <label for="dateScheduled" className="mt-3">
                        What date would you like to schedule for?
                    </label>
                    <br />
                    <input 
                        type="text" 
                        id="dateScheduledFormControl"
                        value={dateScheduled}
                        onChange={(e) => setdateScheduled(e.target.value)}
                        />
                    <br />

                    <label for="phoneNumber" className="mt-3">
                        What is your Phone Number?
                    </label>
                    <br />
                    <input 
                        type="text" 
                        id="phoneNumberFormControl"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        />
                    <br />

                     <label for="doctorNotes" className="mt-3">
                    Notes for your Doctor:
                    </label>
                    <br />
                    <input 
                        type="text" 
                        id="doctorNotesFormControl"
                        value={doctorNotes}
                        onChange={(e) => setdoctorNotes(e.target.value)}
                        />
                    <br />


                <Link to="/dashboard">
                    <button type="submit" className="btn button mt-3">Submit</button>
                </Link>
                </form>
                
            </div>
      </div>
    </div>
    )
}

export default ScheduleAppointment;

