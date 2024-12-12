import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomDesign from '../components/CustomDesign';
import ProductShowcase from '../components/ProductShowcase';
import TrendingSection from '../components/TrendingSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import PreFooter from '../components/PreFooter';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomDesign />
      <ProductShowcase />
      <TrendingSection />
      <Reviews />
      <PreFooter />
      <Footer />
    </>
  );
}

export default Home;
