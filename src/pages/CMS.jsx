import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import CMSContent from "../Components/CMSContent";
import Footer from "../Components/Footer";

function CMS() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="CMS" />
      <CMSContent />
      <Footer />
    </>
  );
}

export default CMS;