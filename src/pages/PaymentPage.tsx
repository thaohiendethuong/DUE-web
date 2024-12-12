import Navbar from '../components/Navbar';
import '../styles/PaymentPage.css'; // Ensure CSS is linked
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
  const { products } = useCart();

  // Function to calculate total price
  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className='payment-page-container-whole'>
      <Navbar />

      <div className="payment-page-container">
        {/* Shipping Information */}
        <div className="shipping-info">
          <div className="shipping-info-header">
            <h2>Thông tin giao hàng</h2>
          </div>
          <form className='first-form'>
            <input type="text" placeholder="Họ tên" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Số điện thoại" />
            <input type="text" placeholder="Địa chỉ" />
            <div className="dropdown-group">
              <select>
                <option value="">Tỉnh, thành phố</option>
              </select>
              <select>
                <option value="">Quận, huyện</option>
              </select>
              <select>
                <option value="">Phường, xã</option>
              </select>
            </div>
          </form>

          <div className="shipping-method">
            <div className="shipping-method-header">
              <h3>Phương thức giao hàng</h3>
            </div>
            <form>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Tốc độ tiêu chuẩn (từ 2 - 5 ngày làm việc)
                <span className="price">0 VND</span>
              </label>
            </form>
          </div>

          <div className="payment-method">
            <div className="payment-method-header">
              <h3>Phương thức thanh toán</h3>
            </div>
            <form>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Thanh toán trực tiếp khi nhận hàng (cọc 50% giá trị đơn hàng)
              </label>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Chuyển khoản ngân hàng
              </label>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Thẻ tín dụng
              </label>
            </form>
          </div>

          {/* Return to Cart Link */}
          <a href="#" className="return-to-cart">
            Quay lại giỏ hàng
          </a>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="order-summary-header">
            <h2>Đơn hàng</h2>
          </div>
          <div className="order-items">
            {products.map((product) => (
              <div className="order-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>
                    <span>Màu: {product.color}</span>
                    <span className='pad-left'>SL: {product.quantity}</span>
                  </p>
                </div>
                <span className="price">
                  {(product.price * product.quantity).toLocaleString()} VND
                </span>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="order-total">
            <p>Tạm tính<span>{calculateTotal().toLocaleString()} VND</span></p>
            <p>Phí vận chuyển<span>0 VND</span></p>
            <hr />
            <p className="total">Tổng cộng<span>{calculateTotal().toLocaleString()} VND</span></p>
          </div>

          {/* Checkout Button */}
          <button className="checkout-button">THANH TOÁN</button>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default PaymentPage;
