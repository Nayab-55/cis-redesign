import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showWhistleDropdown, setShowWhistleDropdown] = useState(false);
  const [showSmartMeters, setShowSmartMeters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAll = () => {
    setShowWhistleDropdown(false);
    setShowSmartMeters(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={mobileMenuOpen ? "nav-open" : ""}>
        <li><Link to="/" onClick={closeAll}>Home</Link></li>
        <li><Link to="/products" onClick={closeAll}>Products</Link></li>
        <li><Link to="/tender" onClick={closeAll}>Tenders</Link></li>
        <li><Link to="/about" onClick={closeAll}>About Us</Link></li>
        <li><Link to="/contact" onClick={closeAll}>Contact</Link></li>
        <li className="dropdown">
          <span onClick={() => setShowWhistleDropdown(!showWhistleDropdown)}>
            Whistleblower
          </span>
          {showWhistleDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/whistleblower-form" onClick={closeAll}>Whistleblower Form</Link></li>
              <li><Link to="/whistleblower-policy" onClick={closeAll}>Whistleblower Policy</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;