import { useState, useEffect } from "react";
import workflow from "../assets/products/markit-workflow.png";
import paper from "../assets/products/markit-paper.png";

function MarkItContent() {
  const images = [workflow, paper];
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
    "Automated extraction of exam data from scanned PDFs",
    "High-precision detection of selected answers",
    "Flexible configuration options for various exam formats.",
    "Transformer & boxes summary (Description & location etc.).",
    "Utilization of multiprocessing for scalable processing",
    "Seamless integration with digital infrastructure",
    "Reliable processing ensuring consistent grading",
    "Comprehensive data analysis for informed decision-making",
    "Automated exam reports generation",
  ];

  const benefits = [
    "Automation: Speeds up grading process by automating scanning and checking of exam papers",
    "Accuracy: Ensures precise detection of answer markings, reducing human errors.",
    "Efficiency: Handles multiple exam papers concurrently, enhancing overall productivity.",
    "Scalability: Easily scales to process large volumes of exams with minimal additional resources.",
    "Cost-effectiveness: Long-term cost savings compared to manual grading methods.",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About MarkIt</h2>
        <p>
          MarkIt is the ultimate solution for effortless MCQ paper grading.
          It streamlines the grading process by allowing users to simply
          scan their papers into PDF format and upload them to the program.
          Once uploaded, MarkIt takes over, swiftly processing each paper,
          detecting and identifying answers with precision. By comparing
          them against an answer key, MarkIt efficiently grades each paper,
          saving educators valuable time and effort
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
          <img src={images[current]} alt="MarkIt MCQ grading system" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default MarkItContent;