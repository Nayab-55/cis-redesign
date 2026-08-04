import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AutoFillerContent from "../components/AutoFillerContent";
import Footer from "../components/Footer";

function AutoFiller() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Auto Filler" />
      <AutoFillerContent />
      <Footer />
    </>
  );
}

export default AutoFiller;