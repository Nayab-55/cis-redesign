import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/hero1-new.png";

function Services() {
  const interests = [
    "Artificial Intelligence (AI)",
    "Information & Communication Technology",
    "Image Processing",
    "Intelligent System Design",
    "Evolutionary Computing & Smart Grids",
    "Wireless Sensor Networks",
    "Mobile Ad-Hoc Networks (MANETs)",
    "Routing, Network Traffic Estimation",
    "Operational Research & Femtocells",
    "Machine 2 Machine Communications",
    "Intelligent Transportation System (ITS)",
  ];

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Our Services</h1>
        <p style={{ fontSize: "16px", opacity: 0.9 }}>Home / Our Services</p>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>

        {/* Engineering Services */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#0D47A1", marginBottom: "20px", borderBottom: "3px solid #1565C0", paddingBottom: "10px" }}>
            Engineering Services
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "8px" }}>New Product Development (NPD) Solutions</h3>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Product Design, Product Engineering and Product Manufacturing with a focus on database design,
              wireless sensor networks, embedded systems & engineering automation.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "8px" }}>High Performance Computing based Engineering Services</h3>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Computer Aided Engineering (CAE) simulation-based domain solutions through a fully managed
              High Performance Computing (HPC) Environment.
            </p>
          </div>
        </div>

        {/* Industrial Services */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#0D47A1", marginBottom: "20px", borderBottom: "3px solid #0D47A1", paddingBottom: "10px" }}>
            Industrial Services
          </h2>
          <div>
            <h3 style={{ marginBottom: "8px" }}>Plant Solutions and Services</h3>
            <p style={{ color: "#444", lineHeight: "1.7" }}>
              Process plant engineering, digital manufacturing solutions, manufacturing execution & intelligence (MEI),
              control systems solutions, sourcing solutions & integrated asset management.
            </p>
          </div>
        </div>

        {/* Consultancy Services */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ color: "#0D47A1", marginBottom: "20px", borderBottom: "3px solid #0D47A1", paddingBottom: "10px" }}>
            Consultancy Services
          </h2>
          <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "20px" }}>
            We are registered with the Asian Development Bank (Registration number: 024814) & World Bank as a
            consulting firm. We provide consultation regarding emerging and existing solutions in a vast area of
            technological and social development sectors. We also work with our clients to implement the change,
            thereby validating the effectiveness of our solutions for your business. Global expertise, applied
            locally — CISNR allows rapid engagement scalability, right from analysis to implementation.
          </p>

          <h3 style={{ marginBottom: "16px" }}>Main Areas of Interest</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {interests.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 18px",
                  backgroundColor: "#f5eaea",
                  borderLeft: "4px solid #0D47A1",
                  borderRadius: "4px",
                  color: "#333",
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

export default Services;