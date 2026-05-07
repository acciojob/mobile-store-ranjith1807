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
    <div>
      <h2>Admin Panel</h2>
      
      {/* Form with required .form-control classes */}
      <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
        <input className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="form-control" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input className="form-control" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input className="form-control" name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>

      {/* Flat List Structure to satisfy Cypress */}
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <span>{product.name}</span>
            <div>
              <Link to={`/products/${product.id}`}>Edit</Link>
              <button className="float-right" onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;