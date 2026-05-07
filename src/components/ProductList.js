import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Make sure CSS is imported

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          
          {/* Left: Image */}
          <div className="product-image-container">
             <img src={product.image} alt={product.name} />
          </div>

          {/* Center: Details (Text is centered) */}
          <div className="product-details">
            <Link to={`/products/${product.id}`} className="product-link">
              {product.name} <br /> {product.description}
            </Link>
            <p className="product-price">Price: {product.price}</p>
          </div>

          {/* Right: Buy Button */}
          <div className="product-action">
            <button className="buy-btn">Buy</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProductList;