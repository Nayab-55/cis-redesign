import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import MicroMeterContent from "../components/MicroMeterContent";
import Footer from "../components/Footer";

function MicroMeter() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Micro Meter" />
      <MicroMeterContent />
      <Footer />
    </>
  );
}

export default MicroMeter;