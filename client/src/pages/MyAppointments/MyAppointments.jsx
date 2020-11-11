import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

const MyAppointments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">My Appointments</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3 text-center">
          <select>
            <option>Dr. Abraham</option>
          </select>
          <br/>
          <select className="mt-3">
            <option>Dr. Stenson</option>
          </select>
          <br/>
          <select className="mt-3">
            <option>Dr. Phillips</option>
          </select>
          <br/>
          <Link to="/dashboard">
            <button className="btn button mt-3">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
