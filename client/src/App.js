import { useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`Axios GET request error: ${err}`);
      });
  });
  return (
    <HomePage />
  );
}

export default App;
