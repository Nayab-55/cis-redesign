import huawei from "../assets/huawei.png";
import fwo from "../assets/fwo.png";
import pesco from "../assets/pesco.png";
import wsscs from "../assets/wsscs.png";
function Clients() {
  const logos = [huawei, fwo, pesco, wsscs];

  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <div className="clients-marquee">
        <div className="clients-track">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client logo ${index + 1}`} />
          ))}
          {/* Duplicate so the scroll loop looks seamless */}
          {logos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo} alt={`Client logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;