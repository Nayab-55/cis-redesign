import { useState, useEffect } from "react";
import device1 from "../assets/products/agrocure-device1.png";
import device2 from "../assets/products/agrocure-device2.png";

function AgroCureContent() {
  const images = [device1, device2];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const benefits = [
    "Reduction in Food Insecurity",
    "Eliminates middlemen",
    "Transparent platform to access farm data",
    "Saves agriculture input and water",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About AgroCure</h2>
        <p>
          AgroCure is a tech-based solution to reduce food insecurity,
          empower farmers by eliminating the middlemen, and provide a
          transparent platform to access real-time farm data and insights
        </p>

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
          <img src={images[current]} alt="AgroCure smart farming device" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AgroCureContent;