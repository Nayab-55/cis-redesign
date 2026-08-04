function ContactInfo() {
  const cards = [
    {
      icon: "📍",
      title: "ADDRESS",
      lines: ["Office No 17, 3rd Floor Silver City Plaza", "G-11 Markaz Islamabad"],
    },
    {
      icon: "✉️",
      title: "EMAIL",
      lines: ["info@cispvt.com"],
    },
    {
      icon: "📞",
      title: "PHONE",
      lines: ["+92 332 9899396"],
    },
  ];

  return (
    <section className="contact-info-section">
      <p className="contact-subheading">REACHING OUR OFFICE</p>
      <h2>Find Our Location</h2>

      <div className="contact-cards">
        {cards.map((card, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;