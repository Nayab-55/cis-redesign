import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import AquaCureContent from "../Components/AquaCureContent";
import Footer from "../Components/Footer";

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