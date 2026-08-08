import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import BiologicalContent from "../Components/BiologicalContent";
import Footer from "../Components/Footer";

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