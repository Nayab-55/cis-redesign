import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import ThreePhaseSmartMeterContent from "../Components/ThreePhaseSmartMeterContent";
import Footer from "../Components/Footer";

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