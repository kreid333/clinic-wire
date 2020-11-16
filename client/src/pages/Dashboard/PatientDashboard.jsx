import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });
  const [clinicName, setClinicName] = useState("");

  const [truth, setTruth] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);
  const [email, setEmail] = useState("");

  const emailAddress = document.getElementById("emailAddress");

  useEffect(() => {
    axios
      .get(`/api/users/${decoded.payload._id}`)
      .then((response) => {
        setClinicName(response.data.clinic.name);
        setEmail(response.data.emailAddress);
      })
      .catch((err) => {
        console.lof(err);
      });
  }, [decoded.payload._id]);
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const handleEdit = () => {
    setSaveBtn(true);
    if (truth) {
      emailAddress.removeAttribute("disabled");
    }
  };

  const handleSave = (e) => {
    axios
      .put(`/api/user/${e.target.id}`, { emailAddress: email })
      .then((response) => {
        console.log(response);
        setSaveBtn(false);
        emailAddress.setAttribute("disabled", true);
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
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <h1 className="text-center mt-3">Dashboard</h1>
            </div>
            <div className="col-sm-4">
              <button className="btn float-right" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center">
                    Welcome, {decoded.payload.fullName}!
                  </h2>
                  <div className="card">
                    <div className="card-body text-center">
                      <label htmlFor="" className="d-block">
                        Clinic
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2"
                        value={clinicName}
                        disabled
                      />
                      <label htmlFor="emailAddress" className="d-block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name=""
                        id="emailAddress"
                        className="mb-2"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        disabled
                      />
                      <label htmlFor="" className="d-block">
                        Name
                      </label>
                      <input
                        type="text"
                        name=""
                        id="fullName"
                        className="mb-2"
                        value={decoded.payload.fullName}
                        disabled
                      />
                      <br />
                      <label htmlFor="" className="d-block">
                        Age
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2"
                        value={decoded.payload.age}
                        disabled
                      />
                      <br />
                      <label htmlFor="" className="d-block">
                        Gender
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="mb-2"
                        value={decoded.payload.gender}
                        disabled
                      />
                      <br />
                      <button className="btn mt-3" onClick={handleEdit}>
                        Edit Info
                      </button>
                      <br />
                      {saveBtn && (
                        <button
                          id={decoded.payload._id}
                          className="btn mt-3"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <Link to="/schedule">
                      <button class="btn button" id="ScheduleBtn">
                        Schedule Appointment
                      </button>
                    </Link>
                    <br />
                    <Link to="/myappointments">
                      <button class="btn button mt-3" id="AppointmentsBtn">
                        Appointments
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
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
export default Dashboard;
