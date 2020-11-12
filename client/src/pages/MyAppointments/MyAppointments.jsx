import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

const MyAppointments = () => {
  const [userApts, setUserApts] = useState([]);
  const jwt = require("jsonwebtoken");

  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });
  useEffect(() => {
    axios
      .get(`/api/appointments/${decoded.payload._id}`)
      .then((response) => {
        setUserApts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userApts);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">My Appointments</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3 text-center">
          <div className="card">
            <div className="card-body">
              {userApts.map((appointment) => (
                <div className="card mb-3">
                  <div className="card-body text-center">
                    <h2>
                      {appointment.dateScheduled} with {appointment.doctorName}
                    </h2>
                    <h5>Time scheduled: {appointment.timeScheduled}</h5>
                    <h5>Notes for doctor: {appointment.doctorNotes}</h5>
                    <button className="btn mt-3">
                      Add to Google Calendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/dashboard">
            <button className="btn button m-3">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
