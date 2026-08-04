function WhyChooseUs() {
  const points = [
    {
      title: "Energy efficiency & sustainability:",
      text: "We are committed to bring efficient & sustainable energy for the whole society.",
    },
    {
      title: "Protecting infrastructure:",
      text: "We ensure optional health of infrastructure & saving it from any hazardous incidents.",
    },
    {
      title: "Pioneer in the digitization & transformation of energy:",
      text: "We are pioneers in the digitization, transformation & processes, turning the bold ideas of utility/distribution companies & customers into reality with a sense of purpose & highest standards.",
    },
    {
      title: "Saving energy & Environment:",
      text: "We ensure to save energy & environment for our upcoming generations via secure & sophisticated technologies.",
    },
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose Us!</h2>
      <div className="why-grid">
        {points.map((point, index) => (
          <div className="why-item" key={index}>
            ✅ <strong>{point.title}</strong> {point.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;