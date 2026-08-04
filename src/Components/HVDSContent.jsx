import { useState, useEffect } from "react";
import pole from "../assets/products/hvds-pole.png";
import tower from "../assets/products/hvds-tower.png";

function HVDSContent() {
  const images = [pole, tower];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    "Effectively reduces high losses in the distribution network",
    "Improves quality of supply & HT/LT ratio",
    "Network reconfiguration",
    "Provision of HT supply for bulk consumers",
    "Utilizes feeders as per capacity",
  ];

  const benefits = [
    "Effectively reduces high losses in the distribution network",
    "Improves quality of supply & HT/LT ratio",
    "Network reconfiguration",
    "Provision of HT supply for bulk consumers",
    "Utilizes feeders as per capacity",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About HVDS</h2>
        <p>
          High Voltage Distribution Systems is a technology where the
          electricity is distributed to the consumers at Higher Voltage
          Level (11kV) instead of Low Voltage (400V/240V). Our smart HVDS
          converts the existing 3 phase, 4 wires lines to 11KV systems using
          the existing supports and providing intermediate poles wherever
          necessary. HVDS is the most successful method in dropping the
          technical losses and improving the quality of supply in power
          distribution system.
        </p>

        <h2 className="features-heading">Features</h2>
        <ul className="check-list">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="features-heading">Benefits</h2>
        <ul className="check-list">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="product-about-image">
        <div className="product-carousel">
          <button className="carousel-arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <img src={images[current]} alt="HVDS high voltage distribution system" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default HVDSContent;