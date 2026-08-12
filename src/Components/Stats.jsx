import { useState, useEffect, useRef } from "react";

function Stats() {
  const stats = [
    { number: 12, label: "Total Products" },
    { number: 8, label: "Total Projects" },
    { number: 80, label: "Mou" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(
        stats.map((stat) => Math.round(stat.number * Math.min(progress, 1)))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(stats.map((stat) => stat.number));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <section className="stats" ref={sectionRef}>
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <h2>{counts[index]}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;