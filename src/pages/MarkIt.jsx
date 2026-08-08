import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import MarkItContent from "../Components/MarkItContent";
import Footer from "../Components/Footer";

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