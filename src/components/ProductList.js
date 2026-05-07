import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <Link to={`/products/${product.id}`} className="product-title">
              {product.name} <br/> {product.description}
            </Link>
            <p className="product-price">Price: {product.price}</p>
          </div>
          <div className="product-action">
  <button 
    className="buy-btn" 
    onClick={() => alert(`Successfully added ${product.name} to your cart!`)}
  >
    Buy
  </button>
</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;