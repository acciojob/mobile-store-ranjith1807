import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/App.css';
function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '200px', margin: '20px 0' }} />
      <p>{product.description}</p>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Price: {product.price}</p>
      
      {/* Target for homepage navigation test */}
      <button className="btn" onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Back to Home
      </button>
    </div>
  );
}

export default ProductDetails;