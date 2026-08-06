import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("admin_token", data.token);
        navigate("/admin-dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Unable to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
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

          <h1 className="al-title">Welcome Back</h1>
          <p className="al-subtitle">Sign in to the CIS admin panel</p>

          <form onSubmit={handleLogin} className="al-form">
            <div className="al-field">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cispvt.com"
                required
              />
            </div>

            <div className="al-field">
              <label>Password</label>
              <div className="al-password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="al-eye-btn"
                  onClick={() => setShowPassword((s) => !s)}
                  tabIndex={-1}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <Link to="/forgot-password" className="al-forgot-link">
                Forgot password?
              </Link>
            </div>

            {error && <p className="al-error">{error}</p>}

            <button type="submit" disabled={isSubmitting} className="al-submit-btn">
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminLogin;