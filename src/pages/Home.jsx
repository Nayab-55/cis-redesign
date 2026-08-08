import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Mission from "../Components/Mission";
import Clients from "../Components/Clients";
import WhyChooseUs from "../Components/WhyChooseUs";
import ProductsShowcase from "../Components/ProductsShowcase";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";

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