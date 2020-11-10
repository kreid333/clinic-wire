import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleAppointment.css";

const ScheduleAppointment = () => {
  return (
    <div id="scheduleAppointmentCenter">
      <h1 className="text-center mt-3">Schedule Appointment</h1>
      <div className="text-center">
        <form>
          <label htmlFor="doctorName" className="mt-3">
            Which Doctor are you seeing?
          </label>
          <br />
          <input type="text" name="doctorName" id="doctorName" />
          <br />



          <label htmlFor="date" className="mt-3">
            Which date would you like to be scheduled for?
          </label>
          <br />
          <input type="text" name="date" id="date" />
          <br />


          <label htmlFor="phoneNumber" className="mt-3">
            Phone Number
          </label>
          <br />
          <input type="text" name="phoneNumber" id="phoneNumber=" />
          <br />



          <label htmlFor="notes" className="mt-3">
            Notes for Doctor
          </label>
          <br />
          <input type="text" name="notes" id="notes" />
          <br />


          <Link to="/dashboard">
            <button className="btn button mt-3">Submit</button>
          </Link>
          <br />
          
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
