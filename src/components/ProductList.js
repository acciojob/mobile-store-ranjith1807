import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="list-group">
      {products.map((product) => (
        <div key={product.id} className="list-group-item d-flex align-items-center mb-3 shadow-sm">
          <img src={product.image} alt={product.name} style={{ width: '100px', objectFit: 'contain' }} className="mr-4" />
          
          <div className="d-flex flex-column text-center w-100">
            <Link to={`/products/${product.id}`} className="text-primary text-decoration-none">
              <h5 className="mb-1">{product.name}</h5>
              <p className="mb-2">{product.description}</p>
            </Link>
            
            <div className="d-flex justify-content-center align-items-center mt-2">
              <span className="text-primary mr-3" style={{ fontSize: '1.1rem' }}>Price: {product.price}</span>
              <button className="btn btn-secondary px-4">Buy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;