import React from "react";
import { Link } from "react-router-dom";
import "./ScheduleAppointment.css";

const ScheduleAppointment = () => {
  return (
    <div id="scheduleAppointmentCenter">
      <h1 className="text-center mt-3">Schedule Appointment</h1>
      <div className="text-center">
        <form>
        <label htmlFor="" className="d-block">
              Which doctor are you seeing?
            </label>
            <select name="" id="">
                <option value="">Dr. Abraham</option>
                <option value="">Dr. Stenson</option>
                <option value="">Dr. Phillips</option>
            </select>
            <br />
            <label htmlFor="" className="d-block">
              What date would you like to schedule for?
            </label>
            <input
              type="date"
              min="2020-11-10"
              max="2020-11-13"
              className="mb-2"
            />
            <br />
            <label htmlFor="" className="d-block">
              What time would you like to schedule for?
            </label>
            <input type="time" min="9:00" max="17:00" className="mb-2" />
            <br />
            <small className="">Office hours are 9AM to 5PM</small>


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
