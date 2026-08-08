import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import WaterQualityContent from "../Components/WaterQualityContent";
import Footer from "../Components/Footer";

function WaterQuality() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Water Quality" />
      <WaterQualityContent />
      <Footer />
    </>
  );
}

export default WaterQuality;