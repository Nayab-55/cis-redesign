import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import CMSContent from "../components/CMSContent";
import Footer from "../components/Footer";

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