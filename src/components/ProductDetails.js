import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === parseInt(id));
  const [price, setPrice] = useState(product ? product.price : '');

  if (!product) return <h2>Product Not Found</h2>;

  const handleSave = () => {
    const updated = products.map((p) => p.id === product.id ? { ...p, price: Number(price) } : p);
    setProducts(updated);
  };

  return (
    <div className="details-wrapper">
      {/* Child 1: Info */}
      <div className="details-info">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Current Price: {product.price}</p>
      </div>

      {/* Child 2: Edit Input (.form-control requirement) */}
      <div className="details-edit">
        <label>Edit Price: </label>
        <input 
          className="form-control" 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>

      {/* Child 3: Save Button (Matches :nth-child(3) > .float-right) */}
      <div className="details-save">
        <button className="float-right" onClick={handleSave}>Save Changes</button>
      </div>

      {/* Required .btn back to home */}
      <div className="details-back">
        <button className="btn" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default ProductDetails;