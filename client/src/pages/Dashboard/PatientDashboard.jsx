import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
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
              <h2 className="text-center">Welcome, User!</h2>
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
                    value="User"
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
                    value="32"
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
                    value="Male"
                  />
                </div>
              </div>
              <br/>
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
