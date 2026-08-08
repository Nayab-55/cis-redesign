import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import PageBanner from "../Components/PageBanner";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
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