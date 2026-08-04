// src/components/Header.jsx
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        {/* Replace src with your actual logo path in /src/assets */}
    <img src={logo} alt="CIS Pvt Ltd Logo" style={{ height: "60px" }} />
      </div>

      <div className="header-contact">
        <div>
          <p className="label">Call Us</p>
          <p className="value">(+92) 332 9899396</p>
        </div>
        <div>
          <p className="label">Email Us</p>
          <p className="value">info@cispvt.com</p>
        </div>
        <Link to="/become-partner" className="partner-btn">Become A Partner</Link>
      </div>
    </div>
  );
}

export default Header;