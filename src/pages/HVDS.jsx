import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import HVDSContent from "../Components/HVDSContent";
import Footer from "../Components/Footer";

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