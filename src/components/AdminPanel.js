import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({ name: '', description: '', image: '', price: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newProduct = { ...formData, id: Date.now(), price: Number(formData.price) };
    setProducts([...products, newProduct]);
    setFormData({ name: '', description: '', image: '', price: '' });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-wrapper">
      <h2>Admin Panel</h2>
      
      {/* Adding a Product Form */}
      <form onSubmit={handleAdd} className="admin-form">
        <input className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="form-control" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input className="form-control" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input className="form-control" name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>

      {/* Product List */}
      <div className="admin-list">
        {products.map((product) => (
          <div key={product.id} className="admin-row">
            {/* Child 1: Info */}
            <div className="admin-row-info">
              {product.name}
            </div>
            
            {/* Child 2: Delete Button (Matches :nth-child(2) > .float-right) */}
            <div className="admin-row-delete">
              <button className="float-right" onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
            
            {/* Child 3: Edit Link */}
            <div className="admin-row-edit">
              <Link to={`/products/${product.id}`} className="edit-link">Edit Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;