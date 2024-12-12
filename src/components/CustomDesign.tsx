import '../styles/CustomDesign.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const CustomDesign: React.FC = () => {
  return (
    <section className="custom-design">
      <div className="text-section">
        <h2>Tạo thiết kế của riêng bạn</h2>
        <p>Trải nghiệm thiết kế sản phẩm của riêng bạn một cách dễ dàng và thú vị. Công cụ thiết kế trực quan giúp bạn tạo ra các mẫu thiết kế chuyên nghiệp mà không cần bất kỳ kỹ năng thiết kế nào.</p>
        <div className="buttons">
          {/* Use Link to navigate to DesignPage */}
          <Link to="/design">
            <button className="button-33">Tạo thiết kế AI</button>
          </Link>
          <button className="button-33"> Tải lên mẫu</button>
        </div>
      </div>
      <div className="image-section"></div>
    </section>
  );
};

export default CustomDesign;
