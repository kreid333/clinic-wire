import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import Dashboard from "./pages/Dashboard/PatientDashboard";
import ScheduleAppointment from "./pages/ScheduleAppointment/ScheduleAppointment"
import DisclaimerPage from "./pages/Disclaimer/Disclaimer";
import MyAppointments from "./pages/MyAppointments/MyAppointments"

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
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/schedule" component={ScheduleAppointment} />
        <Route exact path="/disclaimer" component={DisclaimerPage} />
        <Route exact path="/myappointments" component={MyAppointments} />
        <Route path="/" component={HomePage} />       
      </Switch>
    </Router>
  );
}

export default App;
