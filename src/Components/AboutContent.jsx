function AboutContent() {
  const goals = [
    "To Provide a platform and resources to competent researchers, developers and engineers to innovate modern solutions for complex problems.",
    "Development of Innovative designs and intelligent Systems.",
    "To conduct research in various fields of AI and prevent/minimize Natural and man-made disasters using data Intelligence",
    "Build national capacity to carry out R&D in the emerging field of Artificial Intelligence by solving at least a small number of AI problems identified and mutually agreed by scientific communities comprising local and international experts.",
  ];

  return (
    <section className="about-content">
      <h2>About Us</h2>
      <p className="about-intro">
        CISPVT is registered with the Asian Development Bank & World Bank as a
        consulting firm. It provides consultation regarding emerging &
        existing solutions in a vast area of technological & social
        development sectors. Global expertise, applied locally CISPVT allows
        rapid engagement scalability, right from analysis to implementation.
      </p>

      <ul className="about-goals">
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </section>
  );
}

export default AboutContent;