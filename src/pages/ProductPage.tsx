import CustomDesign from '../components/CustomDesign';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductBackground from '../components/Product-Background';
import ProductShowcase from '../components/ProductShowcase';
import PreFooter from '../components/PreFooter';
import ProductBar from '../components/ProductBar';

function ProductPage() {
    return (
      <>
        <Navbar />
        <ProductBackground />
        <ProductShowcase />
        <ProductBar />
        <CustomDesign />
        <PreFooter />
        <Footer />
      </>
    );
  }
  
  export default ProductPage;