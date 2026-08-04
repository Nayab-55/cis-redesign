import teamPhoto from "../assets/team.png";

function Mission() {
  return (
    <section className="mission">
      <div className="mission-image">
        <img src={teamPhoto} alt="CIS Pvt Ltd Team" />
      </div>
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          We aim at providing smart and intelligent solutions to the society
          that create a balance in managing energy, economic growth and
          environment through accurate data acquisition and technology.
        </p>
        
      </div>
    </section>
  );
}

export default Mission;