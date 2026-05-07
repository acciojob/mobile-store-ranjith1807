import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
function ProductList({ products }) {
  return (
    <div className="product-container" style={{ padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} className="product-card" style={{ borderBottom: '1px solid #ccc', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <img src={product.image} alt={product.name} style={{ width: '80px' }} />
          
          <div style={{ textAlign: 'center' }}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: '#0056b3', fontSize: '18px' }}>
              {product.name}
            </Link>
            <p style={{ color: '#0056b3' }}>Price: {product.price}</p>
          </div>
          
          <button style={{ padding: '8px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;