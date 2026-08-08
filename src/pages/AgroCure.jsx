import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import AgroCureContent from "../Components/AgroCureContent";
import Footer from "../Components/Footer";

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