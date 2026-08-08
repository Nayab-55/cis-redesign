import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroImage from "../assets/hero1-new.png";

function ElectroCure() {
  const benefits = [
    "Reduction of 30% electricity losses including theft losses, technical losses & administrative losses.",
    "Reduces HR cost by automatically sending alerts & data to central billing system.",
    "Developed by technical experts.",
    "Developed according to international standards and needs.",
  ];

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>ElectroCure</h1>
        <p style={{ fontSize: "16px", opacity: 0.9 }}>Home / ElectroCure</p>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 20px" }}>

        {/* About */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#000", marginBottom: "20px", borderBottom: "3px solid #000", paddingBottom: "10px" }}>
            About ElectroCure
          </h2>
          <p style={{ color: "#444", lineHeight: "1.7" }}>
            ElectroCure is a Low Cost Smart Metering solution with Meter-less Architecture. Single Module
            serves multiple consumers, hence, it helps in cost reduction per consumer. It's an ideal solution
            for electricity theft & losses detection. ElectroCure provides real time data acquisition of
            electricity distribution network, metering, monitoring & control.
          </p>
        </div>

        {/* Architecture */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#000", marginBottom: "20px", borderBottom: "3px solid #000", paddingBottom: "10px" }}>
            Architecture
          </h2>
          <p style={{ color: "#444", lineHeight: "1.7" }}>
            The overall architecture is similar to smart metering, which provides a real time electricity
            consumption measurement & sends data to regional data center of electricity supply company
            automatically. ElectroCure solution is multi tariff, demand response, remote controlled power
            on/off and interactive interface. The Distribution boxes installed at consumer end will record
            and send energy usage periodically to regional data center (RDC).
          </p>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#000", marginBottom: "20px", borderBottom: "3px solid #000", paddingBottom: "10px" }}>
            Benefits
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {benefits.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 18px",
                  backgroundColor: "#F5F5F5",
                  borderLeft: "4px solid #000",
                  borderRadius: "4px",
                  color: "#333",
                  lineHeight: "1.6",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ElectroCure;