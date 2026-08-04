import { useState, useEffect } from "react";
import device1 from "../assets/products/smartparking-device1.png";
import device2 from "../assets/products/smartparking-device2.png";

function SmartCarParkingContent() {
  const images = [device1, device2];
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
    "Tackles Traffic Congestion and Management, a global issue.",
    "Smart Parking Management with Artificial Intelligence in real time.",
    "Easily Implementable on already available surveillance system.",
    "Seamless and hassle-free parking slot allotment and monitoring.",
    "On Camera to see it all.",
    "Reliable and cost effective.",
  ];

  const benefits = [
    "The system is made more efficient as vehicle travel time and search time are significantly reduced due to the information provided by the smart parking system",
    "For the car park operators, the information gathered via the implementation of the Smart Parking System can be exploited to predict future parking patterns.",
    "In terms of environment conservation, the level of pollution can be reduced by decreasing vehicle air pollutant.",
    "It will be reduces fuel consumption as well, which is directly related to vehicle miles travelled.",
    "Most importantly, traffic congestion can be reduced.",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About Smart Car Parking</h2>
        <p>
          The smart parking system implemented mainly in the Europe, United
          States and Japan is developed with the incorporation of advanced
          technologies and researches from various academic disciplines.
          Smart Parking is a parking solution that can include in-ground
          Smart Parking sensors, cameras or counting sensors. These devices
          are usually embedded into parking spots or positioned next to them
          to detect whether parking bays are free or occupied. With its
          deployment in the car park, it is hoped that it would solve the
          aforementioned problems faced by the patrons within the car park.
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
          <img src={images[current]} alt="Smart Car Parking system" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default SmartCarParkingContent;