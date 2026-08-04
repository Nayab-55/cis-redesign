import { useState, useEffect } from "react";
import device1 from "../assets/products/cms-device1.png";
import device2 from "../assets/products/cms-device2.png";

function CMSContent() {
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

  const operationCycle = [
    "Complaint registration through SMS or Android App",
    "Administration collects information about complaint",
    "Responsibility is assigned to concern employee",
    "Inventory updated by the employee",
    "Complaint resolved by the employee",
    "Complaint status is updated in database",
    "Feedback is taken from customer after complaint resolution",
  ];

  const benefits = [
    "Complaint can be lodged via SMS through mobile app",
    "Inventory can be easily managed",
    "Employee information can be tracked by the management",
    "Efficient, Reliable & Quick process of communication",
    "Complaints can be addressed on time",
    "Complaint details are added by the consumers",
    "Consumer is notified regarding the status of the complaint (i.e. Pending, Resolved, Not resolved, In-progress)",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About CMS</h2>
        <p>
          CMS is a convenient solution for monitoring and tracking user
          complaints. CMS gives a complete system that can automatically
          handle the different processes of a CMS 24/7. Its high-tech device
          provides updated status regarding the complaint and feedback from
          the customers. The device enables the consumers to register their
          complaint via SMS or Mobile Application which can be constantly
          tracked by the consumers therefore providing ease and quick
          communication to the customers.
        </p>

        <h2 className="features-heading">Operation Cycle</h2>
        <ul className="check-list">
          {operationCycle.map((item, index) => (
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
          <img src={images[current]} alt="CMS complaint management system" />
          <button className="carousel-arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default CMSContent;