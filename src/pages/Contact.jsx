import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import aboutBanner from "../assets/about-banner.png";

function Contact() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <PageBanner title="Contact Us" image={aboutBanner} />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;