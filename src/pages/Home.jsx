import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Clients from "../Components/Clients";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductsShowcase from "../components/ProductsShowcase";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Hero />
      <Mission />
      <Clients />
      <WhyChooseUs />
      <ProductsShowcase />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;