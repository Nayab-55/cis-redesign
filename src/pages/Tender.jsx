import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TenderTable from "../components/TenderTable";
import Footer from "../components/Footer";
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