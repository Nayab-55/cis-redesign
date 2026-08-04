import { useState, useEffect } from "react";
import diagram from "../assets/products/micrometer-diagram.png";
import device from "../assets/products/micrometer-device.png";

function MicroMeterContent() {
  const images = [diagram, device];
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

  const aboutPoints = [
    "It provides meter readings for individual room.",
    "It is a thief alarm system",
    "It enhances efficiency & power of control over utilities bill",
    "It's easy to install.",
  ];

  const features = [
    "Micro metering users can capture actual power consumption by the users in hostels, hotels, shared apartments and offices.",
    "It will help the customer to correctly charge the electricity consumption.",
    "Accounted electricity usage will help to reduce unnecessary usage hence reducing bills.",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About Micro Meter</h2>
        <p>Micro-meter provides a low cost internal billing framework for the users.</p>

        <ul className="check-list">
          {aboutPoints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="features-heading">Features</h2>
        <ul className="check-list">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="product-about-image">
        <div className="product-carousel">
          <button className="carousel-arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <img src={images[current]} alt="Micro Meter billing device" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default MicroMeterContent;