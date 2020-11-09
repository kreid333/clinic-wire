import React from "react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">ClinicWire</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3 text-center">
          <div class="text-center main-buttons">
            <Link to="/Schedule">
            <button class="btn" id="ScheduleBtn">
               Schedule Appointment
              </button>
              
            </Link>
            <br />
            <br />
            <Link to="/MyAppointments">
              <button class="btn" id="AppointmentsBtn">
               Apppointments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientDashboard;
