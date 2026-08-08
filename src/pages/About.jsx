import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import aboutBanner from "../assets/about-banner.png";

function About() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="About Us" image={aboutBanner} />
      <AboutContent />
      <Footer />
    </>
  );
}

export default About;