import { useState, useEffect } from "react";
import device1 from "../assets/products/autofiller-device1.png";
import device2 from "../assets/products/autofiller-device2.png";

function AutoFillerContent() {
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

  const benefits = [
    "Avoids water spill",
    "Makes use of ultrasonic & water flow sensors",
    "Provides undisturbed supply of water",
    "Easy to install",
    "Developed by technical experts",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About Auto Filler</h2>
        <p>
          Autofill provides solution to water spills & wasteful consumption
          of water & electricity. Autofil developed by CISNR, makes use of
          ultrasonic sensor, automatic switch module & water-flow sensors,
          enabling people to obtain undisturbed water supply without water
          spills & any other wastages.
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
          <img src={images[current]} alt="Auto Filler water spill prevention device" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default AutoFillerContent;