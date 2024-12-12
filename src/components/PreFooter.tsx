import React from 'react';
import '../styles/PreFooter.css';

const PreFooter: React.FC = () => {
  return (
    <footer className="prefooter">
      <div className="footer-container">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h3 className="footer-title">THÔNG TIN LIÊN HỆ</h3>
          <p><strong>Địa chỉ:</strong> 18 Lê Duy Đình, Phường Chính Gián, Quận Thanh Khê, TP.Đà Nẵng</p>
          <p><strong>Hotline:</strong> 0949 686 006</p>
          <p><strong>Sales:</strong> 0789 686 579 - 0789 686 779</p>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h3 className="footer-title">CHÍNH SÁCH</h3>
          <ul className="footer-list">
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách giao hàng</a></li>
            <li><a href="#">Phương thức thanh toán</a></li>
            <li><a href="#">Hướng dẫn mua hàng</a></li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src="/DUE-web/images/logo.png" alt="Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default PreFooter;
