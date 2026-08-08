import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Front-end only for now — backend password reset endpoint
    // will be connected later.
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 600);
  };

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="al-page">
        <div className="al-card">
          <div className="al-logo-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L3 7v6c0 5 3.8 9.4 9 11 5.2-1.6 9-6 9-11V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h2 className="al-brand">CIS Pvt Ltd</h2>
          <p className="al-tagline">Company of Innovative Solutions &amp; Networks Research</p>

          <div className="al-divider" />

          {sent ? (
            <>
              <h1 className="al-title">Check Your Email</h1>
              <p className="al-subtitle">
                If an account exists for <strong>{email}</strong>, a reset link has been sent.
              </p>
              <Link to="/admin-login" className="al-back-link">
                &larr; Back to login
              </Link>
            </>
          ) : (
            <>
              <h1 className="al-title">Reset Your Password</h1>
              <p className="al-subtitle">Enter your email and we'll send you a reset link</p>

              <form onSubmit={handleSubmit} className="al-form">
                <div className="al-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@cispvt.com"
                    required
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="al-submit-btn">
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              <Link to="/admin-login" className="al-back-link">
                &larr; Back to login
              </Link>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ForgotPassword;