import { useState } from "react";
import tank1 from "../assets/products/waterquality-tank1.png";
import tank2 from "../assets/products/waterquality-tank2.png";
import diagram from "../assets/waterquality-diagram.png";

function WaterQualityContent() {
  const images = [tank1, tank2];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const keyFeatures = [
    "Real-time monitoring of water quality parameters",
    "Dissolved Oxygen",
    "Dissolved Carbon Dioxide",
    "Electric Conductivity",
    "Total Dissolved Solids",
    "Total Suspended Solids",
    "Turbidity",
    "Salinity",
    "Resistivity",
    "Acidity",
    "Temperature",
  ];

  const benefits = [
    "Customizable range of water quality parameters",
    "Easy access to Web Dashboard",
    "Water Quantification",
    "Real-time monitoring",
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
            Aquacure-Q is a solution contributing to efficient water quality
            monitoring in real-time reporting a vast range of customizable
            water quality parameters on demand. It guarantees smart resource
            management by monitoring water supply and controlling the
            distribution channel without human intervention to ensure safe &
            uninterrupted access of water to all.
          </p>
        </div>

        <div className="product-about-image">
          <div className="product-carousel">
            <button className="carousel-arrow left" onClick={prevSlide}>
              &#10094;
            </button>
            <img src={images[current]} alt="Water Quality monitoring gauge" />
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
          <img src={diagram} alt="Water Quality system architecture" />
        </div>
      </section>
    </>
  );
}
export default WaterQualityContent;