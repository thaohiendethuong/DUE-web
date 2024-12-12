import { useNavigate } from 'react-router-dom';
import '../styles/ProductBar.css';

const ProductBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/product-item');
  };

  return (
    <div className="product-bar">
        <h2>Tất cả sản phẩm</h2>  
    <div className="product-container">
      <div className="filter-sidebar">
        <div className='filter-container'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="search-input"
          />
        </div>
        <div className="filters">
          <h3>Khoảng giá</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-1">Dưới 100.000</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-2" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-2">Từ 100.000 đến 500.000</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-3" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-3">Từ 100.000 đến 500.000</label>
            </div>
        </div>

        <div className="filters">
          <h3>Màu sản phẩm</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-4" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-4">Đen</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-5" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-5">Trắng</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-6" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-6">Vàng</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-7" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-7">Đỏ</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-8" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-8">Khác</label>
            </div>
        </div>

        <div className="filters">
          <h3>Loại sản phẩm</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-9" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-9">Hộp mềm</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-10" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-10">Hộp cứng</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-11" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-11">Có quai</label>
            </div>
        </div>

        <div className="filters">
          <h3>Kích thước (cm)</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-12" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-12">24x35</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-13" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-13">30x45</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-14" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-14">40x55</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-15" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-15">Khác</label>
            </div>
        </div>
        <div className='filter-button'>
            <button className="button-42">Lọc sản phẩm</button>
        </div>
        </div>
      </div>
    <div className='product-sidebar'>
      <div className="product-list">
        <div className="product-grid">
          {/* Example product cards */}
          {[...Array(9)].map((_, index) => (
            <div className="product-card-bar" key={index}>
              <img src="/images/product.png" alt="Product" />
              <p className="product-size">24x35cm</p>
              <p className="product-name">Bao Bì Giấy Loại 1</p>
              <p className="product-price">Liên hệ báo giá</p>
              <div className='product-footer'>
                <p className="product-quant">Đã bán 100</p>
                <button className="add-to-cart" onClick={handleNavigation}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button className="pagination-btn">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
        </div>
      </div>
    </div>
    </div>  
    </div>
  );
};

export default ProductBar;
