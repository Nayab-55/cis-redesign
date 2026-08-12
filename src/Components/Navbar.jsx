import { NavLink, Link } from "react-router-dom";
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
        <li><NavLink to="/" onClick={closeAll}>Home</NavLink></li>
        <li><NavLink to="/products" onClick={closeAll}>Products</NavLink></li>
        <li><NavLink to="/tender" onClick={closeAll}>Tenders</NavLink></li>
        <li><NavLink to="/about" onClick={closeAll}>About Us</NavLink></li>
        <li><NavLink to="/contact" onClick={closeAll}>Contact</NavLink></li>
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