import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ScheduleAppointment.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ScheduleAppointment = () => {
  const jwt = require("jsonwebtoken");

  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });
  const history = useHistory();
  const [doctorName, setDoctorName] = useState("");
  const [dateScheduled, setDateScheduled] = useState("");
  const [timeScheduled, setTimeScheduled] = useState("");
  const [doctorNotes, setDoctorNotes] = useState("");
  const [patient, setPatient] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (decoded) {
      setPatient(decoded.payload._id);
    }
    axios
      .get(`/api/users/${decoded.payload._id}`)
      .then((response) => {
        setDoctors(response.data.clinic.doctors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [decoded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/appointments", {
        patient,
        doctorName,
        dateScheduled,
        timeScheduled,
        doctorNotes,
      })
      .then((response) => {
        console.log(response.data);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {token && decoded ? (
        <>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center mt-3">Schedule an Appointment</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-3 text-center">
              <form onSubmit={handleSubmit}>
                <label for="doctorName" className="mt-3">
                  Which doctor are you seeing?
                </label>
                <br />
                <select
                  name={doctorName}
                  id="doctorName"
                  onChange={(e) => setDoctorName(e.target.value)}
                  required
                >
                  <option >Select One</option>
                  {doctors.map((doctor) => (
                    <option>{doctor}</option>
                  ))}
                </select>
                <br />

                <label for="dateScheduled" className="mt-3">
                  What date would you like to schedule for?
                </label>
                <br />
                <input
                  type="date"
                  id="dateScheduled"
                  value={dateScheduled}
                  onChange={(e) => setDateScheduled(e.target.value)}
                  required
                />
                <br />

                <label for="timeScheduled" className="mt-3">
                  What time would you like to schedule for?
                </label>
                <br />
                <input
                  type="time"
                  id="timeScheduled"
                  value={timeScheduled}
                  onChange={(e) => setTimeScheduled(e.target.value)}
                  required
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
                  onChange={(e) => setDoctorNotes(e.target.value)}
                  required
                />
                <br />
                <button type="submit" className="btn button mt-3">
                  Submit
                </button>
                <br />
                <Link to="/dashboard">
                  <button className="btn button mt-3">Back</button>
                </Link>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center col-sm-12">
          <h1 className="mt-3">You do not have access to this page!</h1>
          <Link to="/">
            <button className="btn button mt-3">Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScheduleAppointment;
