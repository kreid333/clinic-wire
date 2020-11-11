import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const jwt = require("jsonwebtoken");
  // const { token } = useContext(AuthContext);
  // console.log(token);
  const token = localStorage.getItem("jwt");
  const decoded = jwt.decode(token, { complete: true });
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Welcome, {decoded.payload.fullName}!</h2>
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
                  <button class="btn" id="ScheduleBtn">
                    Schedule Appointment
                  </button>
                </Link>
                <br />
                <Link to="/myappointments">
                  <button class="btn mt-3" id="AppointmentsBtn">
                    Apppointments
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
