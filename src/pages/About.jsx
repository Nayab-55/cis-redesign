import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
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