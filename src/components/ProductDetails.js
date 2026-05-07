import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the product by ID (parsing the URL parameter to an integer)
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="alert alert-danger">Product Not Found</div>;
  }

  return (
    <div className="card text-center p-4 shadow-sm">
      <div className="d-flex justify-content-center mb-4">
        <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
      </div>
      
      <div className="card-body">
        <h2 className="card-title text-primary">{product.name}</h2>
        <h4 className="text-muted">{product.description}</h4>
        <h3 className="my-4">Price: {product.price}</h3>
        
        {/* Cypress target for navigating back to home */}
        <button className="btn btn-dark px-4 py-2" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;