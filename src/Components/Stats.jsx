function Stats() {
  const stats = [
    { number: "12", label: "Total Products" },
    { number: "8", label: "Total Projects" },
    { number: "80", label: "Mou" },
  ];

  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2>{stat.number}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;