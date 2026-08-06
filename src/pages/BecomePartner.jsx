import { useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/hero2-new.png";
import "./BecomePartner.css";

function BecomePartner() {
  const [formData, setFormData] = useState({
    title: "Mr.",
    company: "",
    jobTitle: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/partners`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          company: formData.company,
          job_title: formData.jobTitle,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Thank you for your interest in partnering with us! We'll be in touch soon.");
        setFormData({
          title: "Mr.",
          company: "",
          jobTitle: "",
          email: "",
          address: "",
          city: "",
          state: "",
          country: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please check your inputs and try again.");
      }
    } catch (error) {
      alert("Unable to connect to server. Please try again later.");
    }
  };
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div
        className="bp-hero"
        style={{ backgroundImage: `linear-gradient(rgba(15,41,66,0.7), rgba(16,73,63,0.7)), url(${heroImage})` }}
      >
        <h1>Become A Partner</h1>
        <p>Home / Become A Partner</p>
      </div>

      <div className="bp-page">
        <div className="bp-card">
          <h2 className="bp-title">Tell Us About Yourself</h2>
          <p className="bp-subtitle">
            Fill in the details below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="bp-form">
            <div className="bp-field">
              <label>Title (Required)</label>
              <select name="title" value={formData.title} onChange={handleChange} required>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>

            <div className="bp-field">
              <label>Company (Required)</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>Job Title (Required)</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Your Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>Email (Required)</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field bp-field-full">
              <label>Address (Required)</label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>City (Required)</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>State (Required)</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>Country (Required)</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field">
              <label>Phone (Required)</label>
              <input
                type="text"
                name="phone"
                placeholder="Please enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bp-field bp-field-full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="bp-submit-wrap">
              <button type="submit" className="bp-submit-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BecomePartner;