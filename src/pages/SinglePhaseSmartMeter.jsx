import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import SinglePhaseSmartMeterContent from "../components/SinglePhaseSmartMeterContent";
import Footer from "../components/Footer";

function SinglePhaseSmartMeter() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Single Phase Smart Meter" />
      <SinglePhaseSmartMeterContent />
      <Footer />
    </>
  );
}

export default SinglePhaseSmartMeter;