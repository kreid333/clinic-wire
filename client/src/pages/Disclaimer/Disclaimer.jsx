import React from "react";
import { Link } from "react-router-dom";


const DisclaimerPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">ClinicWire</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 about mt-3">
          <h2 className="text-center">Disclaimer</h2>
          <p className="text-center">


            YOU MUST NEVER RELY ON ANY INFORMATION OBTAINED USING THIS APP FOR ANY DIAGNOSIS OR RECOMMENDATION FOR MEDICAL TREATMENT.
            YOU MUST NEVER RELY ON THE INFORMATION RECEIVED FROM THIS APP AS ALTERNATIVE
            TO MEDICAL ADVICE FROM YOUR PHYSICIAN OR OTHER PROFESSIONAL HEALTHCARE PROVIDER.

            YOU MUST NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL TREATMENT
            AS RESULT OF ANY INFORMATION YOU HAVE SEEN ON OR ACCESSED THROUGH THIS APP.
            IF YOU HAVE ANY SPECIFIC QUESTIONS ABOUT ANY MEDICAL MATTER YOU SHOULD CONSULT YOUR PHYSICIAN
            OR OTHER PROFESSIONAL HEALTHCARE PROVIDER. IF YOU THINK YOU MAY BE SUFFERING FROM ANY MEDICAL
            CONDITION YOU SHOULD SEEK IMMEDIATE MEDICAL ATTENTION.

            The information provided by this App is provided “as is” without any representations or warranties, express or implied. Clinic-wire makes no representations or warranties in relation to the medical or other information in this App.

          </p>
          <br />
          <br />
          <p>
             <div className="text-center">
               <Link to="login">
                  <button className="btn " id="returnBtn">
                      Login
                  </button>
              </Link>
              </div>
          </p>
        </div>
      </div>

    </div>
  );
};
export default DisclaimerPage;
