import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import SmartCarParkingContent from "../Components/SmartCarParkingContent";
import Footer from "../Components/Footer";

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