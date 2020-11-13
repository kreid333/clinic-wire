import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

const MyAppointments = () => {
  var gapi = window.gapi;
  var CLIENT_ID =
    "380489880878-r11s6d8u991p2428a61jlabi2i47o0ej.apps.googleusercontent.com";
  var API_KEY = "AIzaSyCIxIKqIwaFfqDliqXqEwqAd-nkwUzoFx8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = (doctor, date, time) => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: "Appointment with " + doctor,
            location: "800 Howard St., New York City, NY 10001",
            start: {
              dateTime: date + "T" + time + ":00-05:00",
              timeZone: "America/New_York",
            },
            end: {
              dateTime: date + "T" + (parseInt(time) + 1 + ":00") + ":00-05:00",
              timeZone: "America/New_York",
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });
        });
    });
  };
  const [userApts, setUserApts] = useState([]);
  const jwt = require("jsonwebtoken");

  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });

  useEffect(() => {
    if (decoded) {
      axios
        .get(`/api/appointments/${decoded.payload._id}`)
        .then((response) => {
          setUserApts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [decoded]);

  return (
    <div className="container">
<<<<<<< HEAD
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
                    <div className="card-body text-center">
                      <button className="btn button m-3">Delete</button>
                      <span><Link to="UpdatePatient"><button className="btn button m-3">
                        Edit Note
                        </button></Link></span>
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
=======
      {token && decoded ? (
        <>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center mt-3">My Appointments</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-3 text-center">
              <div className="card">
                <div className="card-body">
                  {userApts.length === 0 && <h2>No appointments scheduled yet!</h2>}
                  {userApts.map((appointment) => (
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h2>
                          {appointment.dateScheduled} with{" "}
                          {appointment.doctorName}
                        </h2>
                        <h5>Time scheduled: {appointment.timeScheduled}</h5>
                        <h5>Notes for doctor: {appointment.doctorNotes}</h5>
                        <button
                          className="btn mt-3"
                          onClick={() => {
                            handleClick(
                              appointment.doctorName,
                              appointment.dateScheduled,
                              appointment.timeScheduled
                            );
                          }}
                        >
                          Add to Google Calendar
                        </button>
                      </div>
                    </div>
                  ))}
>>>>>>> a7959e3e67ccde42925010f8f04170725663e01d
                </div>
              </div>
              <Link to="/dashboard">
                <button className="btn button m-3">Back</button>
              </Link>
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

export default MyAppointments;
