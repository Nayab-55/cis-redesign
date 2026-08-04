import { Link } from "react-router-dom";
import "./WhistleblowerForm.css";

function WhistleblowerForm() {
  return (
    <div className="wbf-page">
      <div className="wbf-hero">
        <h1>Whistleblower Form</h1>
        <p className="wbf-breadcrumb">Home &gt; Whistleblower &gt; Form</p>
      </div>

      <div className="wbf-container">
        <div className="wbf-card">
          <h2>Annexure 1 - Whistleblowing Form</h2>
          <p>
            Please download the form below and fill it in with as much
            detail as possible. This will help us decide the cause of the
            incident and its level, for the appropriate investigation.
          </p>

          <a href="/whistleblower-form.docx" download className="wbf-download-btn">
            Download Whistleblowing Form
          </a>

          <div className="wbf-guidelines">
            <h3>How to Submit</h3>
            <p>Once completed, you can send the form:</p>
            <p>
              <strong>By email to:</strong> <a href="mailto:ceo@cispvt.com">ceo@cispvt.com</a>
            </p>
            <p>
              <strong>Or by post to:</strong>
              <br />
              Communication Officer
              <br />
              Company of Innovative Solutions and Networks Research Private Limited (CIS Pvt Ltd)
              <br />
              Office no. 17, 3rd Floor, Silver City Plaza,
              <br />
              G11 Markaz, Islamabad
            </p>
            <p>
              <strong>Opening hours:</strong> Monday to Friday, 09:00-13:00 and 14:00-17:00
            </p>
          </div>

          <p className="wbf-policy-link">
            Want to know more first? Read our <Link to="/whistleblower-policy">Whistleblower Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhistleblowerForm;