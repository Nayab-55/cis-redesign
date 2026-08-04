import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import WaterQualityContent from "../components/WaterQualityContent";
import Footer from "../components/Footer";

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