import { useState } from "react";
import device1 from "../assets/aquacure-device.png";
import diagram from "../assets/aquacure-diagram.png";

function AquaCureContent() {
  const images = [device1]; // add more images here later if you have them
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const keyFeatures = [
    "Provides real-time monitoring and Control of water pumping stations",
    "Provides real-time monitoring of water reservoirs",
    "Provides real-time monitoring of water quality (Dissolved Oxygen, Dissolved carbon dioxide, Electric Conductivity, Total Dissolved Solids, Total Suspended Solids, Turbidity, Salinity, Resistivity, Acidity, Temp)",
  ];

  const benefits = [
    "Pumping station monitoring and control, Protective Alerts",
    "Water theft security and leakage traceability",
    "Water Quality Management",
    "Water supply metering (Post-Paid and Pre-Paid)",
    "Complete and easy Asset management",
    "Customizable range of quality parameters testing",
  ];

  const offerColumn1 = [
    { text: "Water supply management" },
    {
      text: "Water Pumping Station:",
      sub: ["Automatic ON/OFF", "functionality", "Online Control & Monitoring", "Electricity Consumption", "Pump protection"],
    },
    {
      text: "Remote valve:",
      sub: ["Automatic ON/OFF", "functionality", "Motorized Valve"],
    },
    {
      text: "Consumer Water Metering:",
      sub: ["Commercial", "Domestic", "Industrial"],
    },
  ];

  const offerColumn2 = [
    "Water supply management",
    "pH Level",
    "Temperature",
    "Water Turbidity",
    "Salinity & Resistivity",
    "Dissolved Co₂",
    "Total Dissolved Solids",
    "Electric Conductivity",
    "Total Suspended Solids",
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="product-about">
        <div className="product-about-text">
          <h2>About AQUACURE</h2>
          <p>
            Water supply management system is a SCADA system that addresses a
            big lump of water protection and metering problems from water
            pumping tube wells through storage tanks to consumers by providing
            real-time data acquisition and control of water quality &
            quantification for the water supply network.
          </p>
        </div>

        <div className="product-about-image">
          <div className="product-carousel">
            <button className="carousel-arrow left" onClick={prevSlide}>
              &#10094;
            </button>
            <img src={images[current]} alt="AquaCure device" />
            <button className="carousel-arrow right" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="product-features">
        <h2>KEY FEATURES</h2>
        <ul className="check-list">
          {keyFeatures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="product-features">
        <h2>BENEFITS</h2>
        <ul className="check-list">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* WHAT DO WE OFFER + SYSTEM ARCHITECTURE */}
      <section className="product-offer">
        <div className="offer-left">
          <h2>WHAT DO WE OFFER?</h2>
          <div className="offer-columns">
            <ul className="check-list">
              {offerColumn1.map((item, index) => (
                <li key={index}>
                  {item.text}
                  {item.sub && (
                    <ul className="sub-list">
                      {item.sub.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <ul className="check-list">
              {offerColumn2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="offer-right">
          <h2>System Architecture</h2>
          <img src={diagram} alt="AquaCure system architecture" />
        </div>
      </section>
    </>
  );
}

export default AquaCureContent;