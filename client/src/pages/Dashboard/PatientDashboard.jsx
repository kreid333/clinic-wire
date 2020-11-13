import React from "react";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    history.push("/");
  };

  return (
    <div className="container">
      {token && decoded ? (
        <>
          <div className="row">
            <div className="col-sm-12">
              <button className="btn float-right" onClick={handleLogout}>
                Logout
              </button>
              <h1 className="text-center mt-3">Dashboard</h1>
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
                        Name
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
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
                        Apppointments
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
<div class="card-footer text-center">
            <div class="nav-item">
            <a class="nav-link" href="/Disclaimer">Disclaimer Link</a>
          </div>
        </div>
export default Dashboard;
