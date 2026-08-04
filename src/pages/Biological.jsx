import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import BiologicalContent from "../components/BiologicalContent";
import Footer from "../components/Footer";

function Biological() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Biological Water Quality" />
      <BiologicalContent />
      <Footer />
    </>
  );
}

export default Biological;