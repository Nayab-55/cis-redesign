import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import TenderTable from "../Components/TenderTable";
import Footer from "../Components/Footer";
import aboutBanner from "../assets/about-banner.png";

function Tender() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Tender Details" image={aboutBanner} />
      <TenderTable />
      <Footer />
    </>
  );
}

export default Tender;