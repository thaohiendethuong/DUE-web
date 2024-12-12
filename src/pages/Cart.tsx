import Navbar from '../components/Navbar';
import '../styles/CartPage.css';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/payment');
  };
  const { products, setProducts } = useCart();

  // Function to delete a product from the cart
  const handleDelete = (id: number) => {
    console.log(id)
    // Filter out the product with the matching id
    const updatedProducts = products.filter((product) => product.id !== id);
    // Update the state with the filtered products
    setProducts(updatedProducts);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        {/* Left: Cart Items */}
        <div className="cart-items">
          <h1 className="cart-title">Giỏ hàng của bạn</h1>
          {products.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>
                  <span className="price">
                    {product.price.toLocaleString()}
                  </span>
                </p>
                <p>
                  <span>Màu:</span> {product.color}{' '}
                  <span className="cart-info-span">SL:</span> {product.quantity}
                </p>
                <div className="cart-item-actions">
                  <button className="edit-button">Sửa</button>
                  {/* Delete Button */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)} // Remove the product on click
                  >
                    Xóa
                  </button>
                </div>
              </div>
              <input type="checkbox" className="select-item-checkbox" />
            </div>
          ))}
        </div>

        {/* Right: Summary Section */}
        <div className="cart-summary">
          <h2>Thông tin giao hàng</h2>
          <div className="summary-details">
            <p>
              <span className="key">Tạm tính</span>{' '}
              <span>{calculateTotal().toLocaleString()}</span>
            </p>
            <p>
              <span className="key">Giảm giá sản phẩm</span> <span>0</span>
            </p>
            <p>
              <span className="key">Tổng tiền</span>{' '}
              <span>{calculateTotal().toLocaleString()}</span>
            </p>
          </div>
          <div className="apply-discount">
            <div className="input-wrapper">
              <input
                type="text"
                className="input-with-gradient"
                placeholder="Nhập mã khuyến mãi"
              />
            </div>
            <button className="apply-button">Áp dụng</button>
          </div>

          <div className="invoice-checkbox">
            <input type="checkbox" className="styled-checkbox" />
            <label>Xuất hóa đơn</label>
          </div>

          <div className="note-wrapper">
            <textarea className="note-box" placeholder="Ghi chú"></textarea>
          </div>

          <button className="checkout-button" onClick={handleNavigation}>THANH TOÁN NGAY</button>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default CartPage;

