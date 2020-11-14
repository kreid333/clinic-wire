import React from "react";
import { Link } from "react-router-dom";

const DisclaimerPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="mt-3">Disclaimer</h1>
          <p className="mt-3">
            YOU MUST NEVER RELY ON ANY INFORMATION OBTAINED USING THIS APP FOR
            ANY DIAGNOSIS OR RECOMMENDATION FOR MEDICAL TREATMENT. YOU MUST
            NEVER RELY ON THE INFORMATION RECEIVED FROM THIS APP AS ALTERNATIVE
            TO MEDICAL ADVICE FROM YOUR PHYSICIAN OR OTHER PROFESSIONAL
            HEALTHCARE PROVIDER. YOU MUST NEVER DISREGARD PROFESSIONAL MEDICAL
            ADVICE OR DELAY SEEKING MEDICAL TREATMENT AS RESULT OF ANY
            INFORMATION YOU HAVE SEEN ON OR ACCESSED THROUGH THIS APP. IF YOU
            HAVE ANY SPECIFIC QUESTIONS ABOUT ANY MEDICAL MATTER YOU SHOULD
            CONSULT YOUR PHYSICIAN OR OTHER PROFESSIONAL HEALTHCARE PROVIDER. IF
            YOU THINK YOU MAY BE SUFFERING FROM ANY MEDICAL CONDITION YOU SHOULD
            SEEK IMMEDIATE MEDICAL ATTENTION.
          </p>
          <p>
            The information provided by this app is provided “as is” without any
            representations or warranties, express or implied. ClinicWire makes
            no representations or warranties in relation to the medical or other
            information in this app.
          </p>
          <Link to="/">
            <button class="btn button">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DisclaimerPage;
