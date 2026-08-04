import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import HVDSContent from "../components/HVDSContent";
import Footer from "../components/Footer";

function HVDS() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="HVDS" />
      <HVDSContent />
      <Footer />
    </>
  );
}

export default HVDS;