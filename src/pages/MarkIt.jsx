import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import MarkItContent from "../components/MarkItContent";
import Footer from "../components/Footer";

function MarkIt() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="MarkIt" />
      <MarkItContent />
      <Footer />
    </>
  );
}

export default MarkIt;