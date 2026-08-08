import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import AutoFillerContent from "../Components/AutoFillerContent";
import Footer from "../Components/Footer";

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