import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AquaCureContent from "../components/AquaCureContent";
import Footer from "../components/Footer";

function AquaCure() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="AquaCure" />
      <AquaCureContent />
      <Footer />
    </>
  );
}

export default AquaCure;