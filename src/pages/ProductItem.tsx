import Navbar from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import ProductShowcase from '../components/ProductShowcase';
import ReviewSection from '../components/ReviewSection';
import '../styles/ProductItem.css'; // CSS file for styling
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductItem = () => {
  const { addProduct } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    const newProduct = {
      id: Date.now(), // Use a unique ID
      name: 'Bao bì giấy cao cấp loại 1',
      price: 1000000,
      color: 'Trắng',
      quantity: 1,
      image: '/DUE-web/images/product.png',
    };
    addProduct(newProduct);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="product-page-container">
        <Navbar />

        {/* Search Bar and Section */}
      <div className="search-bar-section">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        </div>
      </div>

        <div className='product-cover'>

      {/* Product Section */}
      <div className="product-section">
        {/* Product Image */}
        <div className="product-image">
          <img src="/DUE-web/images/product-big.png" alt="Product" />
          {/* <div className="thumbnail-row">
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
          </div> */}
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1>BAO BÌ GIẤY CAO CẤP LOẠI 1</h1>
          <p>Đã bán 100</p>

          <h3>Mô tả sản phẩm</h3>
          <ul>
            <li>Loại sản phẩm: Hộp mềm</li>
            <li>Kích thước: 20x35cm</li>
            <li>Màu sắc: Đen - Vàng - Trắng</li>
            <li>Chịu tải: Dưới 3kg</li>
          </ul>

          <div className="quantity-section">
            <p>
            <span className="main-text">Số lượng</span>
            <span className="unit-text">[dvt: cái]</span>
            </p>

            <div className="quantity-options">
              <button>&lt;100</button>
              <button>100-500</button>
              <button>&gt;500</button>
            </div>
          </div>

          <div className="color-section">
            
            <p><span className="main-text">Màu sắc</span></p>
            <div className="color-options">
              <button>Trắng</button>
              <button>Đen</button>
              <button>Vàng</button>
            </div>
          </div>

          <button className="contact-button">Liên hệ báo giá</button>
          <button className="contact-button" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <div className="info-box">
          <h3>Mô tả sản phẩm</h3>
          <ul>
            <li>Loại sản phẩm: Hộp mềm</li>
            <li>Kích thước: 20x35cm</li>
            <li>Màu sắc: Đen - Vàng - Trắng</li>
            <li>Chịu tải: Dưới 3kg</li>
            <li>Công dụng: Thích hợp để đựng thực phẩm, phụ kiện thời trang, ...</li>
          </ul>
        </div>

        <div className="info-box right">
          <h3>Chính sách mua hàng</h3>
          <ul>
            <li>Chính sách đổi trả</li>
            <li>Chính sách giao hàng</li>
            <li>Phương thức thanh toán</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
          <p>Hotline: 0949 686 006</p>
        </div>
      </div>
      {showPopup && (
        <div className="notification-popup">
          Sản phẩm đã được thêm vào giỏ hàng!
        </div>
      )}
        </div>
        <ReviewSection />
        <ProductShowcase />
        <PreFooter />
        <Footer />
    </div>

  );
};

export default ProductItem;
