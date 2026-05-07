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
    <div>
      {/* 1st Child: Product Info */}
      <div>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>

      {/* 2nd Child: Edit Input */}
      <div>
        <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Edit Price" />
      </div>

      {/* 3rd Child: Save Button (Matches :nth-child(3) > .float-right) */}
      <div>
        <button className="float-right" onClick={handleSave}>Save Changes</button>
      </div>

      {/* Required .btn for returning home */}
      <button className="btn" onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default ProductDetails;