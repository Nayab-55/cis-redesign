import diagram from "../assets/products/singlephase-diagram.png";

function SinglePhaseSmartMeterContent() {
  const features = [
    "Single phase two wire connection.",
    "On demand and scheduled meter reading.",
    "PF calculation peak current, peak voltage.",
    "Measures active & reactive energy & power.",
    "Transformer fault detection and reporting.",
    "Built-in GPRS for secure and fast communication.",
    "Unbalanced load detection & remote switching.",
    "User oriented meter reading options i.e. hourly, daily, weekly, monthly.",
    "Long life, clear, wide and high contrast display.",
    "Metering and reactive power data collection.",
    "MDI measurement.",
    "Load Profile Data Recording.",
  ];

  return (
    <section className="product-about">
      <div className="product-about-text">
        <h2>About Single Phase Smart Meter</h2>
        <p>
          CISNR Smart Meter is single phase whole current smart energy meter
          designed for measurement of active and reactive energy as well as
          maximum demand, multi-tariffs for domestic, commercial and
          industrial customers in three phase networks. CISNR smart energy
          meter used for residential and commercial connections with remote
          connect and disconnect and Global System for Mobile Communication
          / General Packet Radio Service (GSM/GPRS) communication
          capability. To resolve the menace of energy theft prevalent in
          local market, it is carefully designed with stringent anti-tampering
          features. To offer highest level of flexibility, it can operate as
          a standalone product or be integrated with various data collection
          and energy management tools.
        </p>

        <h2 className="features-heading">Features</h2>
        <ul className="check-list">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="product-about-image">
        <img
          src={diagram}
          alt="Single Phase Smart Meter distribution diagram"
          className="static-product-image"
        />
      </div>
    </section>
  );
}

export default SinglePhaseSmartMeterContent;