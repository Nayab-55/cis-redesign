import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AgroCureContent from "../components/AgroCureContent";
import Footer from "../components/Footer";

function AgroCure() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="AgroCure" />
      <AgroCureContent />
      <Footer />
    </>
  );
}

export default AgroCure;