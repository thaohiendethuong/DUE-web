import React from 'react';
import '../styles/ProductShowcase.css';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Bao Bì 1', image: '/images/product.png' },
  { id: 2, name: 'Bao Bì 2', image: '/images/product.png' },
  { id: 3, name: 'Bao Bì 3', image: '/images/product.png' },
  { id: 4, name: 'Bao Bì 4', image: '/images/product.png' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="product-showcase">
      <h1>Sản phẩm nổi bật</h1>
      <div className="carousel-wrapper">
        <div className="carousel">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p>Liên hệ</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
