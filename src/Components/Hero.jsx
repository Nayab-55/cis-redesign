import { useState } from "react";
import hero1 from "../assets/hero1-new.png";
import hero2 from "../assets/hero2-new.png";
import { Link } from "react-router-dom";

function Hero() {
  
  const slides = [
    {
      image: hero2,
      title: "Company Of Innovative Solutions & Network Research",
      description:
        "CISPVT brings technological revolution by providing secure, smart and innovative solutions to build a prosperous society",
      buttonText: "OUR SERVICES",
      buttonLink: "/services",
    },
    {
      image: hero1,
      title: "ELECTROCURE",
      description: "Meterless Solution For Electricity Theft and Low Cost Smart Metering",
      buttonText: "VIEW DETAIL",
      buttonLink: "/electrocure",
    },
  ];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="hero-overlay">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].description}</p>
        <Link to={slides[current].buttonLink} className="hero-btn">
          {slides[current].buttonText}
        </Link>
      </div>

      <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
  
}

export default Hero;