import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="CIS Pvt Ltd Logo" />
        </div>

        <div className="footer-contact">
          <h4><span className="bar"></span> CONTACT US</h4>
          <p><strong>Tel:</strong> (+92) 332 9899396</p>
          <p><strong>E-mail:</strong> info@cispvt.com</p>
        </div>

        <div className="footer-social">
          <h4><span className="bar"></span> FOLLOW US</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="GitHub">GH</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Company of Innovative Solutions and Network Research. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;