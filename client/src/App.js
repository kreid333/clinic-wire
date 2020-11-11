import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import Dashboard from "./pages/Dashboard/PatientDashboard";
import ScheduleAppointment from "./pages/ScheduleAppointment/ScheduleAppointment";
import MyAppointments from "./pages/MyAppointments/MyAppointments";
import AuthContext from "./context/AuthContext";

function App() {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const localJwt = localStorage.getItem("jwt");
  //   if (localJwt) {
  //     setToken(localJwt);
  //   }
  // }, []);
  // console.log(token)
  return (
    <Router>
      {/* <AuthContext.Provider value={{ token, setToken }}> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/schedule" component={ScheduleAppointment} />
          <Route exact path="/myappointments" component={MyAppointments} />
          <Route path="/" component={HomePage} />
        </Switch>
      {/* </AuthContext.Provider> */}
    </Router>
  );
}

export default App;
