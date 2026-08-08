import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import SinglePhaseSmartMeterContent from "../Components/SinglePhaseSmartMeterContent";
import Footer from "../Components/Footer";

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