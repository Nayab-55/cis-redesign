import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import MicroMeterContent from "../Components/MicroMeterContent";
import Footer from "../Components/Footer";

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