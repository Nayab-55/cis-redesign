import { useState } from "react";
import device1 from "../assets/products/biological-device1.png";
import device2 from "../assets/products/biological-device2.png";

function BiologicalContent() {
  const images = [device1, device2];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const features = [
    "5–8 hour E. Coli detection time – much faster than traditional 24–48 hour methods",
    "Faster detection supports quicker response to safeguard consumers",
    "Enables earlier release of product batches, reducing storage costs for perishables",
    "Helps identify sources of waterborne/foodborne outbreaks rapidly",
    "Allows public health agencies to intervene swiftly and prevent illness spread",
    "Offers competitive edge with faster turnaround time for test results",
    "Facilitates faster decision-making for clients and industries",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About Biological Water Quality</h2>
        <p>
          We specialize in rapid detection solutions for Biological in water
          and food samples. Our cutting-edge system offers significantly
          faster results than traditional methods, enabling swift and
          informed decision-making to protect public health and reduce
          costs. By minimizing testing time, we support industries with
          timely product releases and faster responses during health
          emergencies.
        </p>

        <h2 className="features-heading">Distinct Features and Competitive Advantages</h2>
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
          <img src={images[current]} alt="Biological Water Quality detection kit" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default BiologicalContent;