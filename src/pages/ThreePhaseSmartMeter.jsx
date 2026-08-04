import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ThreePhaseSmartMeterContent from "../components/ThreePhaseSmartMeterContent";
import Footer from "../components/Footer";

function ThreePhaseSmartMeter() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Three Phase Smart Meter" />
      <ThreePhaseSmartMeterContent />
      <Footer />
    </>
  );
}

export default ThreePhaseSmartMeter;