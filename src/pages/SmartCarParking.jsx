import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import SmartCarParkingContent from "../components/SmartCarParkingContent";
import Footer from "../components/Footer";

function SmartCarParking() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Smart Car Parking" />
      <SmartCarParkingContent />
      <Footer />
    </>
  );
}

export default SmartCarParking;